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

InvokeMachine::setup([
    1 => [
        
    ]
]);

InvokeMachine::handleRequest();
```
