---
home: true
title: Домівка

actions:
- text: Початок роботи
  link: /guide/getting-started.html
  type: primary
- text: Вступ
  link: /guide/
  type: secondary
---

#### Example 1:

Create a function:
```php
// functions/dec2hex.php

function dec2hex(int $dec): string
{
    return dechex($dec);
}
```

Setup Invoke:
```php
// index.php

use Invoke\InvokeMachine;

InvokeMachine::setup([
    1 => [
        "dec2hex" => "dec2hex"
    ]
]);

InvokeMachine::handleRequest();
```

Invoke the function:
```shell
curl "http://app.test/invoke/1/dec2hex?dec=10"
```


#### Example 2:

Create a UserResult type:
```php
use Invoke\Typesystem\Result;

class UserResult extends Result
{
    public int $id;
    
    public string $name;
    
    public bool $is_verified;
}
```

Create a class function:
```php
use Invoke\InvokeFunction;
use Invoke\Typesystem\Types;

class GetUserFunction extends InvokeFunction
{
    public static function params(): array
    {
        return [
            "id" => Types::Int,
        ];
    }
    
    public function handle(int $id): UserResult
    {
        $user = getUserFromDb($id);
        
        return UserResult::from($user);
    }
}
```
Setup Invoke:
```php
// index.php

use Invoke\InvokeMachine;

InvokeMachine::setup([
    1 => [
        "getUser" => GetUserFunction::class,
    ]
]);

InvokeMachine::handleRequest();
```

Invoke the function:
```shell
curl "http://app.test/invoke/1/getUser?id=123"
```
