# Style Guide

## Functions/methods naming

### No-namespace way

- good option if you have few functions
- looks familiar and natural

#### Examples

- `getUserById`
- `createUser`
- `updateUserEmail`

### With-namespace way

- best option when there are many functions and resources
- easy to create nested resources

#### Examples

- `users.getById`
- `users.create`
- `user.update`
- `user.updatePreferences`
- `menu.categories.create`
- `menu.category.delete`
