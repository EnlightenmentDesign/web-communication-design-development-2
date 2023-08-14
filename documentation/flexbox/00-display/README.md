# display
This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

However, to start testing these properties, we must set up basic styles for our parent and children elements.

```
.parent {
    border: 1px dashed #cccccc;
    padding: 1rem;
}

.child {
    border: 1px dotted #cccccc;
    padding: 1rem;
    aspect-ratio: 16/9;
    min-width: 10rem;
    width: 20rem;
    color: #02026b;
}

.child:nth-child(odd) { background-color: #becffe; }
.child:nth-child(even) { background-color: #93a9fd; }
```

Learn more about:
* [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
* [nth-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)


After setting up these element styles, we can start testing our display property. 

## display: flex;

```
.parent {
    display: flex;
}
```
![display: flex; with two elements](./screenshots/00%20-%20display_flex.png)
![display: flex; with multiple elements](./screenshots/02-display_flex.png)

## display: inline-flex;

```
.parent {
    display: inline-flex;
}
```

![display: inline-flex; with two elements](./screenshots/01%20-%20display_inline-flex.png)
![display: inline-flex; with multiple elements](./screenshots/03%20-%20display_inline-flex.png)

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


<iframe height="300" style="width: 100%;" scrolling="no" title="flexbox-display" src="https://codepen.io/ccucalon/embed/KKrOgvR/7fd835393c5184af664707e28e0aa2ff?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ccucalon/pen/KKrOgvR/7fd835393c5184af664707e28e0aa2ff">
  flexbox-display</a> by Carlos A Cucalon (<a href="https://codepen.io/ccucalon">@ccucalon</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- - -

[flex-direction](./../01%20-%20flex-direction/)