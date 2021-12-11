---
home: true
title: Home
heroImage: /images/logo.png
heroText: 

actions:
- text: Get Started
  link: /guide/getting-started.html
  type: primary
- text: Introduction
  link: /guide/
  type: secondary
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
Invoke::setup([
    "sayHelloTo",
]);

Invoke::handleHTTPRequests();
```

Start a server, invoke the function:

```shell
curl "localhost/sayHelloTo?name=Kitty"

# response will be: { "result": "Hello, Kitty!" }
```

#### Example 2:

Create Post and Comment types:

```php
class PostResult extends Result
{
    public int $id;
    
    public string $title;
    
    #[ArrayOf(PostType::class)]
    public array $comments;
}
```

```php
class CommentResult extends Result
{
    public int $id;
    
    public string $message;
}

class CommentInput extends Input
{
    #[Lenght(3, 255)]
    public string $message;
}
```

Create methods for getting posts and creating comments:

```php
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
Invoke::setup([
    "getPosts" => GetPosts::class,
    "createComment" => CreateComment::class,
]);

Invoke::handleHTTPRequests();
```

Start a server, invoke the functions:

```shell
curl "localhost/getPosts"
```

```shell
curl -X POST "localhost/createComment" \
  --data '{ "postId": 123, comment: { "message: "Great post!" } }'
```
