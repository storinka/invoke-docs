# Documentation

Invoke has built-in schema generation. It allows you to create documentation with list and descriptions of available
methods and types automatically.

## `SchemaDocument`

`SchemaDocument` is a `Data` type that contains information about available methods and types.

Example:

```php
use Invoke\Docs\Types\SchemaDocument;

$currentSchema = SchemaDocument::current();
```

## `MethodDocument`

`MethodDocument` is a `Data` type that contains information about a method.

Example 1:

```php
use Invoke\Docs\Types\MethodDocument;

$methodDocument = MethodDocument::from([
    "name" => "dec2hex",
    "method" => Dec2Hex::class,
]);
```

Example 2:

```php
use Invoke\Docs\Types\MethodDocument;

$methodDocument = MethodDocument::byName("dec2hex");
```

## `ParamDocument`

`ParamDocument` is a `Data` type that contains information about a parameter.

Example:

```php
use Invoke\Docs\Types\ParamDocument;
use Invoke\Docs\Types\TypeDocument;

$paramDocument = ParamDocument::from([
    "name" => "dec2hex",
    "type" => TypeDocument::from(...),
]);
```

## `TypeDocument`

`TypeDocument` is a `Data` type that contains information about a type.

Example:

```php
use Invoke\Docs\Types\TypeDocument;

$typeDocument = TypeDocument::from(SomeData::class);
```

## `GetSchema`

`GetSchema` is a method that returns current `SchemaDocument`.

Example:

```php
use Invoke\Invoke;
use Invoke\Docs\Methods\GetSchema;

Invoke::setup([
    "getSchema" => GetSchema::class,
]);

// curl 'localhost:5000/invoke/getSchema'
```
