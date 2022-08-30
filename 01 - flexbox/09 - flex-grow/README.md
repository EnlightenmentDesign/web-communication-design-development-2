# flex-grow
This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others (or it will try, at least).

```
.item {
    flex-grow: 4; /* default 0 */
}
```

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)