# Methods

Core feature of Invoke is a method. The method is some kind of action. You use methods to get, create, update or
transport data through or within Invoke. There is nothing new about it, you can think of methods as actual PHP methods,
or better as functions.

A method example:

```php
function add(float $a, float $b): float
{
    return $a + $b;
}

echo add(2, 2); // 4
```

Another method example:

```php
use Invoke\Method;

class IsEven extends Method
{
    protected function handle(int $x): bool
    {
        return $x % 2 == 0;
    }
}

echo IsEven::invoke(["x" => 2]) ? "true" : "false"; // true
```

Of course, in real case you would never really do the second example. But when things come to creating web API, this
example actually will be a good option. Actually, I lied, because the first example is better option in this case.

## Creating methods

### Function

Simply define a function and register it.

```php
function getUser(int $id): UserResult
{
    $user = User::find($id);
    
    return UserResult::from($user);
}
```

To register the function simply put it within `setup`:

```php
use Invoke\Invoke;

Invoke::setup([
    "getUser",
]);
```

### Class

This way requires doing more job as you need to create a class for it. Such way is recommended for complex cases.

```php
use Invoke\Method;

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
```

To register the method put its name and class within `setup`:

```php
use Invoke\Invoke;

Invoke::setup([
    "getPeopleNearby" => GetPeopleNearby::class,
]);
```

## Method lifecycle

When you do `$result = Method::invoke([..params]);` here is what is happening under the hood.

### 1 step: instance creation

At this step a new instance of the method is created.

After method instance is ready, the `__invoke` function in this instance will be called with provided input params. All
subsequent steps are implemented within this function.

### 2 step: extensions registration

At this step extensions are registered.

Read more about extension-traits [here](#extensions).

### 3 step: params validation

At this step parameters are validated.

### 5 final step: `handle` call

At this step method `handle` is called.

## Extensions

There are three ways of extending method's functionality.

### Invoke extensions

You can read more about invoke extensions [here](extensions).

### Trait extensions

Trait extensions allows you to extend method's functionality through traits.

Example:

```php
use Invoke\Attributes\TraitExtension;
use Invoke\Method;

#[TraitExtension]
trait CanCreateBooks
{
    public function beforeHandleCanCreateBooks(array $params = [])
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

##### `init{traitName}`

Called before params validation.

Arguments:

_None._

##### `beforeHandle{traitName}`

Called after params validation and before handle.

Arguments:

- 1: `array $params` - input params

##### `afterHandle{traitName}`

Called after params validation and before handle.

Arguments:

- 1: `mixed $result` - result from the `handle` method

### Method extensions

Method extensions allow you to extend method's functionality through class attributes.

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
    
    public function beforeHandle(Method|string|Closure $method, array $params = [])
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

##### `init`

Called before params validation.

Arguments:

- 1: `Method|string|Closure $method` - method

##### `beforeHandle`

Called after params validation and before handle.

Arguments:

- 1: `Method|string|Closure $method` - method
- 2: `array $params` - input params

##### `afterHandle`

Called after params validation and before handle.

Arguments:

- 1: `Method|string|Closure $method` - method
- 2: `mixed $result` - result from the `handle` method
