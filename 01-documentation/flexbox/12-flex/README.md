# flex
This is the shorthand for `flex-grow`, `flex-shrink` and `flex-basis` combined.

The second and third parameters (flex-shrink and flex-basis) are optional.

The default is `flex: 0 1 auto`, but if you set it with a single number value, like `flex: 5`; that changes the flex-basis to 0%, so it’s like setting `flex-grow: 5`; `flex-shrink: 1`; `flex-basis: 0%`;

```
.item {
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

***It is recommended that you use this shorthand property rather than set the individual properties. The shorthand sets the other values intelligently.***

<p><br /><br /></p>

### Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/QWzwNQr/cd49e1d062b77dcaa031c4504563b210" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

[align-self](./../13-self/)