# gap
The gap property explicitly controls the space between flex items. It applies that spacing only between items not on the outer edges.

The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.

It is not exclusively for flexbox, gap works in grid and multi-column layout as well.

## Table of content
* [gap: <unit>](#gap-unit)
* [gap: <unit> <unit>](#gap-unit-unit)
* [row-gap: <unit>](#row-gap-unit)
* [column-gap: <unit>](#column-gap-unit)

<p><br /><br /></p>

### gap: &lt;unit&gt;
When a single unit of measurement is passed then the gap would apply to both rows and columns.
```
.parent {
    gap: 1rem; /* gap for both rows and columns */
}
```

<p><br /><br /></p>

### gap: &lt;unit&gt; &lt;unit&gt;
When two units of measurement is passed then the first value would apply to the `row-gap` and the second to the `column-gap`.
```
.parent {
    gap: 1rem 2rem; /* row-gap column-gap */
}
```

<p><br /><br /></p>

### row-gap: &lt;unit&gt;
We can also specify which dimension would the gap affect such as `row-gap`
```
.parent {
    row-gap: 1rem;
}
```

<p><br /><br /></p>

### column-gap: &lt;unit&gt;
We can also specify which dimension would the gap affect such as `column-gap`
```
.parent {
    column-gap: 1rem;
}
```

<p><br /><br /></p>

### Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/qBLWZyr/eb9dee71ceea5ac7d230b59a6d81d483" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

[order](./../08-order/)