# Typesystem

Invoke has very simple and at the same time powerful typesystem. Basically, you can create any type you need, but you
would not do this, probably.

## `Data` type

When you have some structure with some data within it, you probably should use one of `Data` types.

Pure `Data` type can be used if the structure is the same within both input and result.

`Data` type example:

```php
use Invoke\Data;

class UserPreferences extends Data
{
    public bool $dark_mode;
    
    public bool $receive_emails;
    
    // etc..
}
```

> `Data` type can be nested within `Input` or `Result` type, **but not vice versa**!

## `Input` and `Result` types

Both of those types are children of the `Data` type. But at the same time they are totally independent and must not be
used within each other.

When you need to transmit data from client to server (as request for example), you should use `Input` type.

`Input` type example:

```php
use Invoke\Input;

class PostInput extends Input
{
    public string $title;
    
    public string $text;
}
```

When you need to transmit data from server to client (as response for example), you should use `Result` type.

`Result` type example:

```php
use Invoke\Result;

class PostResult extends Result
{
    public int $id;
    
    public int $createdAt; // unix
    
    public int $createdBy; // user id

    public string $title;
    
    public string $text;
    
    public ?int $publishedAt; // nullable, unix
}
```

> You can use `Data` type inside both `Input` and `Result` types, **but must never use those types inside `Data` type**!

## `Validation` type

This kind of type is used to validate or map data.

First, create the validation:

```php
use Invoke\Validation;

class EmailValidation extends Validation
{
    public static $baseType = "string";
    
    public function validate($value, string $name)
    {
        if (!isValueEmail($value)) {
            throw new InvokeParamValidatationException(
                $name,
                $value,
                "The provided \"$name\" value is not a valid email."
            );
        }
    }
}
```

Second, create function builder to easily use the validation:

```php
function validEmail() {
    return new EmailValidation();
}
```

Finally, use it:

```php
class SomeMethod extends Method
{
    public static function params(): array
    {
        return [
            "email" => validEmail(),
        ];
    }
}
```

Examples of `Validation` type:

- `int(min, max)`
- `float(min, max)`
- `string(minLength, maxLength)`
- `regex(pattern)`
- `arrayOf(type)`
- `mapOf(keyType, valueType)`
