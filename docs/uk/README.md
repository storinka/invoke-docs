---
home: true
title: Домівка

actions:
- text: Початок роботи
  link: /uk/guide/getting-started.html
  type: primary
- text: Вступ
  link: /uk/guide/
  type: secondary
---

#### Example 1:

Створи функцію:
```php
// functions/dec2hex.php

function dec2hex(int $dec): string
{
    return dechex($dec);
}
```

Налаштуй Виклик:
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

Запусти сервер та виклич фукнцію:
```shell
php -S localhost:5000 index.php

curl "localhost:5000/invoke/1/dec2hex?dec=10"
```


#### Example 2:

Створи тип UserResult:
```php
use Invoke\Typesystem\Result;

class UserResult extends Result
{
    public int $id;
    
    public string $name;
    
    public bool $is_verified;
}
```

Створи клас-функцію:
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

Налаштуй Виклик:
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

Запусти сервер та виклич фукнцію:
```shell
php -S localhost:5000 index.php

curl "localhost:5000/invoke/1/getUser?id=123"
```
