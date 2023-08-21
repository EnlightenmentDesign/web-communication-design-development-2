# flex-basis
This defines the default size of an element before the remaining space is distributed.

It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The `auto` keyword means “***look at my width or height property.***”

If set to 0, the extra space around content isn’t factored in. If set to auto, the extra space is distributed based on its flex-grow value. [See this graphic](http://www.w3.org/TR/css3-flexbox/images/rel-vs-abs-flex.svg)

```
.child {
    flex-basis: length | auto; /* default auto */
}
```

<p><br /><br /></p>

### Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/qBLEZxE/a48b18f45f1603bfe29e13da26066870" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

[flex](./../12-flex/)