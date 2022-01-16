# Validation

`Validation` is used to validate or transform parameters of a method or `Data`.

Example:

```php
use Invoke\Validation;

class ValidEmail extends Validation
{    
    public function validate(string $name, $value)
    {
        if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidParamValueException("The provided \"$name\" value is not a valid email.");
        }
        
        return $value;
    }
}
```

Inside `Method`:

```php
class SomeMethod extends Method
{
    #[ValidEmail]
    public string $email;
    
    protected function handle()
    {
        // logic here
    }
}
```

Inside `Data`:

```php
class UserResult extends Data
{
    #[ValidEmail]
    public string $email;
}
```
