# Type

## Introduction

1. `Type` is a pipe that is used as a parameter type.
2. Both `Method` and `Data` pipes are also types.

`Type` example:

```php
use Invoke\Type;
use Invoke\Pipeline;
use Invoke\Types\StringType;

/**
 * Location name type.
 * 
 * Example: `Lukasha Street, 5, Lviv, Ukraine`
 */
class LocationName implements Type
{
    public string $value;

    public function pass(mixed $value): mixed
    {
        // ensure that the passed value is a string
        // and store it inside a variable to use to later
        $this->value = Pipeline::pass(StringType::class, $value);
        
        return $value;
    }
    
    public function fetchInfo(): array
    {
        $info = // fetch some detailed info from external service
        
        return $info;
    }
    
    // @override
    public static function getName(): string
    {
        return "string<locationName>";
    }
}
```

Usage with a method:

```php
class SomeMethod extends Method
{
    public LocationName $locationName;

    protected function handle()
    {
        $locationInfo = $this->locationName->fetchInfo();
    }
}
```

## Builtin types

There are few basic types predefined by Invoke.

- `Invoke\Types\AnyType` - does not validate
- `Invoke\Types\ArrayType` - validates arrays
- `Invoke\Types\BoolType` - validates booleans
- `Invoke\Types\FloatType` - validates floats
- `Invoke\Types\IntType` - validates integers
- `Invoke\Types\NullType` - validates nulls
- `Invoke\Types\StringType` - validates string
- `Invoke\Types\UnionType` - validates union of types
