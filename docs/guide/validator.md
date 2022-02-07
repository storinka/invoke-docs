# Validator

## Introduction

1. `Validator` pipe is used to validate parameters.
2. Used as an attribute to a parameter.

Example:

```php
use Invoke\Validator;
use Attribute;

#[Attribute]
class ValidEmail implements Validator
{    
    public function pass(mixed $value): mixed
    {
        if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
            throw new ValidationFailedException("The provided value is not valid email.");
        }
        
        return $value;
    }
}
```

Usage with a method:

```php
use Invoke\Method;

class Some extends Method
{
    #[ValidEmail]
    public string $email;
    
    protected function handle()
    {
        // logic here
    }
}
```

Usage with `Data`:

```php
use Invoke\Data;

class UserResult extends Data
{
    #[ValidEmail]
    public string $email;
}
```

## Builtin validators

There are few builtin validators predefined by Invoke.

- `Invoke\Validators\ArrayOf` - validate array items type
- `Invoke\Validators\Length` - validate string length
