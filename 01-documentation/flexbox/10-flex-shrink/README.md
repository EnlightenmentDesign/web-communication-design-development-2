# flex-shrink
This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

This works best when it is in combination with other declarations such as `flex-grow` and `flex-basis`

```
.child {
    ...
    flex-basis: 100%; /* I know we haven't covered this yet */
    ...
}

.child.two {
    flex-shrink: 3; /* default 1 */
}
```

<p><br /><br /></p>

### Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/QWzLNzR/a246eecb70df5772b480dbd9830e962b" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

[flex-basis](./../11-flex-basis/)