### Record and Execute a Macro

Given this text:

```javascript
var foo = 1;
var bar = 'a';
var foobar = foo + bar;
```

Start on the first line  
`qa` - start recording your macro in the "a" register  
`A;` - append semicolon at the end of the line  
`Ivar<Space><Esc>` - add "var" to the beginning of the line  
`q` - quit recording the macro  

Inspect what's in register a with `:reg a`

`@{register}` - will replay the macro

`j` - go to next line  
`@a` - replay it on second line  
`j@@` - replay it on the next line  
