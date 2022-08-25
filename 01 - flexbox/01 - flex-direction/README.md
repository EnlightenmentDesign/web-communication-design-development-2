# flex-direction
This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

```
.parent {
    flex-direction: row;
}
```

```
.parent {
    flex-direction: row-reverse;
}
```

```
.parent {
    flex-direction: column;
}
```

```
.parent {
    flex-direction: column-reverse;
}
```


* row (default): left to right in ltr; right to left in rtl
* row-reverse: right to left in ltr; left to right in rtl
* column: same as row but top to bottom
* column-reverse: same as row-reverse but bottom to top

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)