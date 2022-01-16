# Configuration

You can configure Invoke when calling `setup` method.

```php
Invoke::setup([
    // function here
], [
    // config here
    
    "server" => [
        "pathPrefix" => "api",
    ],
]);
```

## `server`

The server configuration when using `Invoke::serve()`.

### `pathPrefix`

Prefix of the path.

- Type: `string`
- Default: `invoke`

## `ioc`

IoC configuration.

### `makeFn`

Function for resolving instances.

Example:

```php
function ($class, $deps) {
    return new $class();
}
```

- Type: `callable`
- Default: `null`

### `callFn`

Function for calling functions.

Example:

```php
function ($callable, $params) {
    return $callable();
}
```

- Type: `callable`
- Default: `null`

## `typesystem`

Typesystem configuration.

### `strict`

Strict type checking.

- Type: `boolean`
- Default: `true`

### `typeNames`

Include class name during serialization of `Data`.

- Type: `boolean`
- Default: `true`
