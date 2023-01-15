# flex-direction
This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

Before we try these out, don't forget to copy the styles from `display: flex` exercise files. We are also going to add a few extra styles for what we currently have in place:

```
.child {
    ...
    max-width: 30vw;
}
```

## flex-direction: row;
**row (default):** left to right in ltr; right to left in rtl
```
.parent {
    flex-direction: row;
}
```
![flex-direction: row;](./screenshots/00%20-%20flex-direction_row.png)

## flex-direction: row-reverse;
**row-reverse:** right to left in ltr; left to right in rtl
```
.parent {
    flex-direction: row-reverse;
}
```
![flex-direction: row-reverse;](./screenshots/01%20-%20flex-direction_row-reverse.png)

## flex-direction: column;
**column:** same as row but top to bottom
```
.parent {
    flex-direction: column;
}
```
![flex-direction: column;](./screenshots/02%20-%20flex-direction_column.png)

## flex-direction: column-reverse;
**column-reverse:** same as row-reverse but bottom to top
```
.parent {
    flex-direction: column-reverse;
}
```
![flex-direction: column-reverse;](./screenshots/04%20-%20flex-direction_column-reverse.png)

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- - -

[flex-wrap](https://github.com/EnlightenmentDesign/web-communication-design-development-2/tree/main/01%20-%20flexbox/01%20-%20flex-direction)