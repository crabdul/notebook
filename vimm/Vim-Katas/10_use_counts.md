
Change this text:


to this:

```css
.blog, .news { background-image: url(/sprite.png); }
.blog, .news { background-image: url(/sprite.png); }
.news { background-position: -180px 0px }
```

```css
.blog, .news { background-image: url(/sprite.png); }
.blog { background-position: -1260px 0px }
```
Moves:

1. `yyp` to duplicate the last line  
2. `cW.news<Esc>` to replace the word 'blog' with 'news'  
3. `180<C-x>`  
