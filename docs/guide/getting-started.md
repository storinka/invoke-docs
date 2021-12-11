# Getting started

## Prerequisites

- PHP 7.4+
- Composer

## Installation

### New project

If you want to start a project from scratch, here is what you need.

#### Create the project folder

```shell
mkdir invoke-app

cd invoke-app
```

#### Init Composer

```shell
composer init
```

#### Add Invoke as dependency

```shell
composer require storinka/invoke:^v1
```

#### Create `public/index.php` file with your code

```php
require_once "vendor/autoload.php";

/**
 * @method static string invoke(array $params)
 */
class Hello extends Method
{
    public function handle(string $name): string
    {
        return "Hello, $name!";
    }
}

// fn style
function bye(string $name): string
{
    return "Bye, $name";
}

Invoke::setup([
    "hello" => Hello::class,
    "bye",
]);

Invoke::handleHTTPRequests();
```

Then run the script with `php -S 5000 public/index.php` and make the requests:

```shell
curl localhost:5000/hello?name=human

curl localhost:5000/bye?name=human
```

### Example project

To create a project from example, run the following command:

```shell
composer create-project --prefer-dist storinka/invoke-example invoke-project
```

To run the project, use `php -S 5000 public/index.php`

### Laravel integration

Invoke has a Laravel plugin for integration.

#### Create a config with functions list

```php
<?php
// config/functions.php

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

## Examples

TODO: add some project examples
