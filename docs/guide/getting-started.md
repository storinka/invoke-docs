# Getting started

## Prerequisites

- PHP 7.4+
- Composer

## Installation

### New project

If you want to start a project from scratch, here is what you need.

#### Create the project folder

```shell
mkdir invoke-project

cd invoke-project
```

#### Init Composer

```shell
composer init
```

#### Add Invoke as dependency

```shell
composer require storinka/invoke:^v1
```

#### Create `public/index.php` file with the following content

```php
require_once "vendor/autoload.php";

// classic style
class HelloFunction extends InvokeFunction
{
    public function handle(string $name)
    {
        return "Hello, $name!";
    }
}

// fn style
function byeFn(string $name): string
{
    return "Bye, $name";
}

InvokeMachine::setup([
    1 => [
        "hello" => HelloFunction::class,
        "bye" => "byeFn",
    ]
]);

InvokeMachine::handleRequest();
```

Then run the script with `php -S 5000 public/index.php` and make the requests:

```shell
curl localhost:5000/invoke/hello?name=human

curl localhost:5000/invoke/bye?name=human
```

### Example project

To create a project from example, run the following command:

```shell
composer create-project --prefer-dist storinka/invoke-example invoke-project
```

To run the project, use `php -S 5000 public/index.php`

### Laravel integration

Invoke has a Laravel plugin for integration.

#### Create functions file

```php
// config/functions.php
<?php

return [
    // here put your functions
];
```

#### Install the plugin

```shell
composer require storinka/invoke-laravel:^v1
```

#### Register the provider

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

#### Register routes

```php
// routes/api.php

\Invoke\Laravel\Facades\Invoke::routes();
```

```php
// routes/web.php

\Invoke\Laravel\Facades\Invoke::docsRoutes();
```

#### Create folders for functions and types:

- `app/Invoke/Functions`
- `app/Invoke/Types`

#### That it, you can do your job now :)
