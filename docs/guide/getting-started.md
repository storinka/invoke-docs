# Getting started

## Prerequisites

- PHP 8.0+
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
composer require storinka/invoke:^v2
```

#### Create `index.php` file with your code

```php
<?php

require_once "vendor/autoload.php";

use Invoke\Method;
use Invoke\Invoke;

function bye(string $name): string
{
    return "Bye, {$name}..";
}

class Hello extends Method
{
    public string $name;

    public function handle(): string
    {
        return "Hello, {$this->name}!";
    }
}

Invoke::setup([
    "bye",
    "hello" => Hello::class,
]);

Invoke::serve();
```

Then run the project by `php -S 'localhost:5000' index.php` and try to invoke:

```shell
curl 'localhost:5000/invoke/bye?name=REST'

curl 'localhost:5000/invoke/hello?name=Invoke'
```

### Laravel integration

Get Laravel integration package [here](https://github.com/storinka/invoke-laravel).
