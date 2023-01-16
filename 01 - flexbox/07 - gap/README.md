# gap
The gap property explicitly controls the space between flex items. It applies that spacing only between items not on the outer edges.

The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.

It is not exclusively for flexbox, gap works in grid and multi-column layout as well.

## flex-flow: row wrap;<br >justify-items: flex-start;<br >align-content: flex-start;
### gap: <unit>
When a single unit of measurement is passed then the gap would apply to both rows and columns.
```
.parent {
    gap: 1rem; /* gap for both rows and columns */
}
```

### gap: <unit> <unit>
When two units of measurement is passed then the first value would apply to the `row-gap` and the second to the `column-gap`.
```
.parent {
    gap: 1rem 2rem; /* row-gap column-gap */
}
```

### row-gap: <unit>
We can also specify which dimension would the gap affect such as `row-gap`
```
.parent {
    row-gap: 1rem;
}
```
### column-gap: <unit>
We can also specify which dimension would the gap affect such as `column-gap`
```
.parent {
    column-gap: 1rem;
}
```

- - -

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- - -

[order](./../08%20-%20order/)