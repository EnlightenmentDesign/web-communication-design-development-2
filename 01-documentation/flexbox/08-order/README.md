# order
By default, flex items are laid out in the order in which the elements are written on the HTML file.

However, the order property controls the order in which they appear in the flex container.

Think about the elements all falling inside the same number line with zero as the base position.

If we use the current elements from our exercise file the divs are rendered as: `.child.one`, `.child.two`, `.child.three`, `.child.four`, and `.child.five`.

```
           .five
           .four
          .three
           .two
           .one
 |-----|-----|-----|-----|
-2    -1     0     1     2
```

<p><br /><br /></p>

When we update the order of the elements.

```
.child.one {
    order: 2; /* default is 0 */
}

.child.three {
    order: -1;
}
```

<p><br /><br /></p>

This is how the elements would look on a number line.

```
           .five
           .four
    .three
           .two
                       .one
 |-----|-----|-----|-----|
-2    -1     0     1     2
```

<p><br /><br /></p>

The new order of the elements will be `.child.three`, `.child.two`, `.child.four`, `.child.five`, and `.child.one`.

<p><br /><br /></p>

### Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/qBLWZyr/eb9dee71ceea5ac7d230b59a6d81d483" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

[flex-grow](./../09-flex-grow/)