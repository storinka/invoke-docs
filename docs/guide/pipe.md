# Pipe

## Introduction

1. `Pipe` is the most basic abstract component of Invoke.
2. Everything withing Invoke is a `Pipe`.
3. Invoke itself is a `Pipe`.
4. Think of `Pipe` as of a single step of execution of your app.

`Pipe` gives you an ability to validate/transform/process data during execution of your application.

`Pipe` example:

```php
use Invoke\Pipe;
use Invoke\Data;

#[Attribute]
class DoubleValuePipe implements Pipe
{
    public function pass(mixed $value)
    {
        return $value * 2;
    }
}

class SomeData extends Data
{
    #[DoubleValuePipe]
    public int $x;
}

$some = SomeData::from([
    "x" => 5,
]);

echo $some->x; // 10
```
