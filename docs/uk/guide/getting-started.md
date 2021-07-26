# Початок роботи

## Передумови

- PHP 7.4+
- Composer

## Налаштування

### Новий проєкт

Якщо ти бажаєш створити Виклик-проєкт з початку, ось кроки які потрібно пройти.

#### Створи папку для проєкту

```shell
mkdir invoke-project

cd invoke-project
```

#### Ініціалізуй Composer

```shell
composer init
```

#### Додай Виклик як залежність

```shell
composer require storinka/invoke:^v1
```

#### Створи файл `public/index.php` з наступним вмістом:

```php
require_once "vendor/autoload.php";

// classic style
class HelloFunction extends InvokeFunction
{
    public function handle(string $name): string
    {
        return "Привіт, $name!";
    }
}

// fn style
function byeFn(string $name): string
{
    return "Бувай, $name..";
}

InvokeMachine::setup([
    1 => [
        "hello" => HelloFunction::class,
        "bye" => "byeFn",
    ]
]);

InvokeMachine::handleRequest();
```

Після чого запусти сервер командою `php -S 5000 public/index.php` та пробуй робити запити:

```shell
curl localhost:5000/invoke/1/hello?name=human

curl localhost:5000/invoke/1/bye?name=human
```

### Приклад проєкту

Щоб не робити забагато роботи, ми підготували шаблон Виклик-проєкту. Виконай наступну команду для створення шаблону.

```shell
composer create-project --prefer-dist storinka/invoke-example invoke-project
```

Після чого запускай проєкт командою `php -S 5000 public/index.php`

### Інтеграція з Laravel-ем

Виклик має готовий плагін для інтеграції з Laravel-ем.

#### Створи файл-конфігурацію функцій

```php
// config/functions.php

return [
    // сюди клади фукнції
    
    // версія => [назва => функція_або_клас]
    // 1 => ["dec2hex" => Dec2Hex::class]
];
```

#### Встанови плагін наступною командою

```shell
composer require storinka/invoke-laravel:^v1
```

#### Зареєструй Виклик-надавача

```php
// config/app.php

return [
    // ...
    
    "providers" => [
        // ...
        Invoke\Laravel\Providers\InvokeProvider::class,
    ],
    
    // ...
];
```

#### Зареєстуй шляхи

```php
// routes/api.php

\Invoke\Laravel\Facades\Invoke::routes();
```

```php
// плагін вміє автоматично створювати документацію на основі зареєстрованих функцій
// документація доступна за цим шляхом: /invoke/docs
// і реєструється наступною стрічкою у файлі routes/web.php

\Invoke\Laravel\Facades\Invoke::docsRoutes();
```

#### Створи відповідні папки, де будуть розміщуватись функції та типи:

- `app/Invoke/Functions`
- `app/Invoke/Types`

#### Ось і все :)
