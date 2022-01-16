# Type

`Type` type is used to create custom types.

```php
use Invoke\Type;

class InputFile extends Type
{
    public File $file;

    public function __construct(string $name, $value)
    {
        if (!($value instanceof File)) {
            throw new InvalidParamValueException();
        }
        
        $this->file = $file;
    }
    
    public function save(string $path) {
        // some logic here
    }
}
```

Inside method:

```
class SomeMethod extends Method
{
    public InputFile $logoImage;

    protected function handle()
    {
        $this->logoImage->save("/var/data/images/logos/logo.png");
    }
}
```
