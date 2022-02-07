# Data

1. `Data` is a [`Type`](type.md) pipe with parameters.
2. Used to define strictly typed data structures.

`Data` example:

```php
use Invoke\Data;

class UserPreferences extends Data
{
    public bool $darkMode;
    
    public bool $receiveEmails;
    
    // etc..
}
```

Usage with a method:

```php
use Invoke\Method;

class UpdateUserPreferences extends Method
{
    public int $userId;
    
    public UserPreferences $preferences;
    
    protected function handle(): UserPreferences
    {
        $updatedPreferences = /* update preferences */;

        return UserPreferences::from($updatedPreferences);
    }
}
```
