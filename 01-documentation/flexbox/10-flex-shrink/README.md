# flex-shrink
This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`. In order for `flex-shrink` to work correctly, the `flex-wrap` must be setup as `nowrap`; else, the content will actually wrap to the next column or row instead of shrinking.

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
I created this <a href="https://codepen.io/ccucalon/pen/GRPKZeB/8cbd547bab58fcef387c0ab2d9739bc6" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

[flex-basis](./../11-flex-basis/)