# flex-shrink
This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

This works best when it is in combination with other declarations such as `flex-grow` and `flex-basis`

```
.child.two {
    flex-shrink: 3; /* default 1 */
}
```

- - - 

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- - -

[flex-basis](./../flex-basis)