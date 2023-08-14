# flex-grow
We are now moving to child element flexbox styles.

To be able to work on these better, we are going to add a few more css selectors.
```
.child.one { }
.child.two { }
.child.three { }
.child.four { }
```

`flex-grow` defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have `flex-grow: 1`, the remaining space in the container will be distributed equally to all children. If one of the children has a value `flex-grow: 2`, that child would take up twice as much of the space either one of the others (or it will try, at least).

```
.child.one {
    flex-grow: 1; /* default 0 */
}
```

- - -

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- - -

[flex-shrink](./../10%20-%20flex-shrink/)