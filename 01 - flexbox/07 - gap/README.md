# gap
The gap property explicitly controls the space between flex items. It applies that spacing only between items not on the outer edges.

The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.

It is not exclusively for flexbox, gap works in grid and multi-column layout as well.

```
    .parent {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: flex-start;
        gap: 1rem; /* gap for both rows and columns */
    }
```

```
    .parent {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: flex-start;
        gap: 1rem 2rem; /* row-gap column-gap */
    }
```

```
    .parent {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: flex-start;
        row-gap: 1rem;
    }
```

```
    .parent {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: stretch;
        align-content: flex-start;
        column-gap: 1rem;
    }
```

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)