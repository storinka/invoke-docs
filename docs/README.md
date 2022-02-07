---
home: true
title: Home
heroImage: /images/logo.png
heroImageDark: /images/logo_dark.png
heroText: 

actions:
- text: Get Started
  link: /guide/getting-started.html
  type: primary
- text: Explore APIs
  link: https://explore.invoke.red
  type: secondary

features:
- title: Fast
  details: Invoke allows you to build fast APIs and deploy them in minutes.
- title: Modern
  details: TODO
- title: Simple
  details: TODO
- title: 100% typed
  details: Invoke allows you to create fully typed APIs without pain.
- title: Super-flexible
  details: Invoke provides absolutely new way of creating backends with extremely high level of flexibility.
- title: Self-documented
  details: Just write a code that works and Invoke will generate the documentation for you.
---

#### Example 1:

Create a function:

```php
function sayHelloTo(string $name): string
{
    return "Hello, $name!";
}
```

Setup Invoke:

```php
use Invoke\Invoke;

Invoke::setup([
    "sayHelloTo",
]);

Invoke::serve();
```

Start a server, invoke the function:

```shell
curl "localhost/invoke/sayHelloTo?name=Kitty"

# response will be: { "result": "Hello, Kitty!" }
```

#### Example 2:

Create Post and Comment types:

```php
use Invoke\Data;
use Invoke\Validations\ArrayOf;

class PostResult extends Data
{
    public int $id;
    
    public string $title;
    
    #[ArrayOf(CommentResult::class)]
    public array $comments;
}
```

```php
use Invoke\Data;
use Invoke\Validations\Length;

class CommentResult extends Data
{
    public int $id;
    
    public string $message;
}

class CommentInput extends Data
{
    #[Length(min: 3, max: 255)]
    public string $message;
}
```

Create methods for getting posts and creating comments:

```php
use Invoke\Method;

class GetPosts extends Method
{
    protected PostsRepository $postsRepository;

    public function __construct(PostsRepository $postsRepository)
    {
        $this->postsRepository = $postsRepository;
    }

    protected function handle(): array
    {
        $posts = $this->postsRepository->getWithComments();
    
        return PostType::many($posts);
    }
}

class CreateComment extends Method
{
    protected CommentsRepository $commentsRepository;

    public function __construct(CommentsRepository $commentsRepository)
    {
        $this->commentsRepository = $commentsRepository;
    }

    protected function handle(int $postId, CommentInput $comment): CommentResult
    {
        $newComment = $this->commentsRepository->create($postId, $comment);
    
        return CommentResult::from($newComment);
    }
}
```

Setup Invoke:

```php
use Invoke\Invoke;

Invoke::setup([
    "getPosts" => GetPosts::class,
    "createComment" => CreateComment::class,
]);

Invoke::serve();
```

Start a server, invoke the functions:

```shell
curl "localhost/invoke/getPosts"
```

```shell
curl -X POST "localhost/invoke/createComment" \
  --data '{ "postId": 123, comment: { "message: "Great post!" } }'
```
