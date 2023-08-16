# flex-grow
We are now moving to child element flexbox styles.

To be able to work on these better, we are going to add a few more css selectors.
```
.child.one { }
.child.two { }
.child.three { }
.child.four { }
```

Also to be sure that our exercises work correctly we must comment out the `width` of the `.child` element.

<p><br /><br /></p>

`flex-grow` defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.

It dictates what amount of the available space inside the flex container the item should take up.

If all items have `flex-grow: 1`, the remaining space in the container will be distributed equally to all children. If one of the children has a value `flex-grow: 2`, that child would take up twice as much of the space either one of the others (or it will try, at least).

```
.child.one {
    flex-grow: 1; /* default 0 */
}
```

<p><br /><br /></p>

### Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/QWzLNzR/a246eecb70df5772b480dbd9830e962b" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

[flex-shrink](./../10-flex-shrink/)