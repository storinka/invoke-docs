# Data

`Data` is a way to define strictly typed structure that is transmitted between client and server.

Example:

```php
use Invoke\Data;

class UserPreferences extends Data
{
    public bool $darkMode;
    
    public bool $receiveEmails;
    
    // etc..
}
```

Inside method:

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
