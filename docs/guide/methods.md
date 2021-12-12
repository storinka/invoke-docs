# Methods (aka functions)

Core feature of Invoke is a method. The method is some kind of action. You use methods to get, create, update or
transport data through or within Invoke. There is nothing new about it, you can think of methods as actual PHP methods,
or better as functions.

A method (function) example:

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

### 1 option: you can always use PHP functions

```php
function getUser(int $id): UserResult
{
    $user = User::where("id", $id)->first();
    
    return UserResult::from($user);
}
```

To register the function simply put it in `setup`:

```php
use Invoke\Invoke;

Invoke::setup([
    "getUser",
]);
```

### 2 option: it is recommended to create a class for the method with complex logic

```php
use Invoke\Method;
use function Invoke\float;

class GetPeopleNearby extends Method
{
    // define input params
    // you can use it to provide complex param types or validations
    // 
    // it is optional
    public static function params(): array
    {
        return [
            "lat" => float(-90, 90),
            "lng" => float(-180, 180)
        ];
    }
    
    protected function handle(float $lat, float $lng): array
    {
        // write your complex logic here
        // or use external repository
    }
}
```

To register the method simply put its class with name in `setup`:

```php
use Invoke\Invoke;

Invoke::setup([
    "getPeopleNearby" => GetPeopleNearby::class,
]);
```

## Method lifecycle

When you do `$result = Method::invoke([..params]);` here is what is happening under the hood.

### 1 step: instance creation

First, Invoke checks if custom initializer is available. If so, then the custom one will be used to create an instance
of the method.

If no custom initializer was provided, new instance will be created like this: `$methodInstance = new Method();`

Read more about custom initializer [here](configuration#custom-initializer).

After method instance is ready, the `__invoke` function in this instance will be called with provided input params. All
subsequent steps are implemented within this function.

### 2 step: traits initialization

Here extension-traits are initialized.

Read more about extension-traits [here](#extensions).

### 3 step: params validation

Method params types are combined from params of `handle` function and result of static `params` function.

### 4 step: `prepare` hooks call

Hook `prepare` is called at this step for the method itself and for the registered extension-traits.

Here you can do any preparation to invocation. You can also do authorization here.

### 5 final step: `handle` call

At this step finally `handle` is called and its result will be used as result of invocation.

## Extensions

TODO: describe extensions
