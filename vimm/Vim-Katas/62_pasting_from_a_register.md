### Pasting from a register

Use the yank register to fix this:

```javascript
collection = getCollection();
process(collection, target);
```

k
`yiw` - yank the word into the yank register  
`jww` - move down 1 line to 'somethingInTheWay'  
r0
`ciw<C-r>0` - insert the text from the yank register  

Duplicate the `<tr>` tag content

```html
<table>

  <tr>
    <td>keystrokes</td>
    <td>buffer contents</td>
  </tr>

</table>
```

`yap` - yanks the paragraph  
`5j` - move down 5 lines  
`gP` - insert above  
