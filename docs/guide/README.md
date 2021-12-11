# Introduction

Invoke is a fast and modern PHP library for building web APIs. It is different from the REST approach. Instead of having
single endpoint for creating or updating whole resource, you create different methods (
functions) to change certain properties of the resource.

It gives you flexibility and reduces server load as you don't need to make update for whole resource when you want to
update only single property of it.

The coolest part of it, that you can call different functions in a single request if it is needed.

Invoke is framework-agnostic, so you can use it in empty project or integrate with any framework you like. There are few
integrations available that officially supported: Laravel, Symfony. 
