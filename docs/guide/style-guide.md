# Style Guide

## Functions/methods naming

### No-namespace way

- good option when there are few functions
- looks familiar and natural

#### Examples

- `getUserById`
- `createUser`
- `updateUserEmail`

### With-namespace way

- best option when there are more than 50 functions defined
- easy to create nested namespaces

#### Examples

- `users.getById`
- `users.create`
- `user.update`
- `user.settings.update`
- `menu.categories.create`
- `menu.category.delete`
