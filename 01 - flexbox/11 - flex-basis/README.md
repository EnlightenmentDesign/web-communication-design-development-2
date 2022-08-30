# flex-grow
This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which was temporarily done by the main-size keyword until deprecated). The content keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren max-content, min-content, and fit-content do.

If set to 0, the extra space around content isn’t factored in. If set to auto, the extra space is distributed based on its flex-grow value. [See this graphic](http://www.w3.org/TR/css3-flexbox/images/rel-vs-abs-flex.svg)

```
.item {
    flex-basis:  | auto; /* default auto */
}
```

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)