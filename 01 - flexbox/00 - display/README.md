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

<hr>

[Go to flex-direction](https://github.com/EnlightenmentDesign/web-communication-design-development-2/tree/main/01%20-%20flexbox/01%20-%20flex-direction)