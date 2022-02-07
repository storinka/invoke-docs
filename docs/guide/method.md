# Method

## Introduction

1. `Method` is a [`Type`](type.md) pipe with parameters and additional handler for their processing.
2. Result of method's handler will be used as the result of invocation.

`Method` example:

```php
use Invoke\Method;

class IsEven extends Method
{
    public int $x;

    protected function handle(): bool
    {
        return $this->x % 2 == 0;
    }
}

echo IsEven::invoke(["x" => 2]) ? "true" : "false"; // true
```

## Creating methods

### As function

```php
use Invoke\Invoke;

function add(int $a, int $b): int
{
    return $a + $b;
}

Invoke::setup([
    "add",
]);

$result = Invoke::invoke("add", [
    "a" => 1,
    "b" => 2
]);

echo $result; // 2
```

### As class

```php
use Invoke\Method;
use Invoke\Invoke;

class GetPeopleNearby extends Method
{
    #[Size(min: -90, max: 90)]
    public float $lat;
    
    #[Size(min: -180, max: 180)]
    public float $lng;
    
    protected function handle(): array
    {
        // write your complex logic here
        // or use external repository
    }
}

Invoke::setup([
    GetPeopleNearby::class,
]);

$result = Invoke::invoke("getPeopleNearby", [
    "lat" => -43.32,
    "lng" => 23.43
]);

echo $result; // ...
```

## Extensions

### Trait extensions

Trait extensions allow you to extend method's functionality using traits.

Example:

```php
use Invoke\Attributes\TraitExtension;
use Invoke\Method;

#[TraitExtension]
trait CanCreateBooks
{
    public function beforeHandleCanCreateBooks()
    {
        // do some logic here
    }
}

class CreateBook extends Method
{
    use CanCreateBooks;
    
    public function handle()
    {
        // ...
    }
}
```

#### Hooks

##### `beforeHandle{traitName}`

Called after parameters were validated and right before `handle` method is called.

Arguments:

_None_

##### `afterHandle{traitName}`

Called right after `handle` method was called.

Arguments:

- `mixed $result` - result of `handle`

### Method extensions

Method extensions allow you to extend method's functionality via class attributes.

Example:

```php
use Attribute;
use Closure;
use Invoke\MethodExtension;
use Invoke\Method;

#[Attribute]
class CheckPermissions extends MethodExtension
{
    public array $permissions;
    
    public function __construct(array $permissions)
    {
        $this->permissions = $permissions;
    }
    
    public function beforeHandle(Method $method): void
    {
        // do some logic here
    }
}

#[CheckPermissions(["delete-user"])]
class DeleteUser extends Method
{
    use CanCreateBooks;
    
    public function handle()
    {
        // ...
    }
}
```

#### Hooks

##### `beforeHandle`

Called after parameters were validated and right before `handle` method is called.

Arguments:

- `Method $method` - method instance

##### `afterHandle`

Called after params validation and before handle.

Arguments:

- `Method $method` - method instance
- `mixed $result` - result of `handle`
