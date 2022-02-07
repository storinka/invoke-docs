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

Server configuration when using `HttpPipe`.

### `pathPrefix`

- Type: `string`
- Default: `invoke`

Prefix of the path.

## `inputMode`

Input mode configuration.

### `convertStrings`

- Type: `callable`
- Default: `null`

Convert strings to valid types.

1. string -> int
2. string -> float
3. string -> bool
4. string -> null
