invocation
==========

JavaScriptjQueryPatternFramework_2013_1User/modern/invocation.htm

```
IMPORTANT:
function invocation pattern - “this” is bound to the global object
method invocation pattern - “this” is bound to the current object instance
constructor invocation pattern - “this” is bound to a newly created object
apply invocation pattern - “this” is bound to anything we choose
```

```
We need to distinguish functions from methods. 
A standalone function that is not part of an object is called a function or 
a global function because it resides on the global object. 
A function that is defined as part of an object is called a method. 
The this value in a (global) function is bound to the global object.

If you are coming from .NET you will recognize the Apply Invocation pattern as .NET's extension methods. 
Extension methods have a slightly different syntax, but the effects are the same: you get full control over 
what object this is bound to. The name extension method is very appropriate as you are temporarily extending 
objects with these methods. Another name you may see in JavaScript for the Apply Invocation pattern is the 
borrow method pattern which also describes the pattern well. Finally, delegation has also been used as 
a name for apply/call method invocation.

The common thread in the Invocation methods is the binding of this. The 4 patterns demonstrate that it can be bound 
to the global object, the current object instance, a newly created object, or anything we choose.

In object-oriented programming the hidden this parameter is an important concept; it is the context (i.e. object) 
in which the function executes. The value of this is bound just before the function begins execution. 
This is called late binding, because it takes place at runtime at such a late stage. It makes these functions 
highly reusable as it allows them to do their work in many different contexts.
```

## Running / Development

> open 01-function-invocation-pattern.html

> `node 03-constructor-invocation-pattern.js`
