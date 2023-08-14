# display
This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

## Table of content
* [Before you begin](#before-you-begin)
* [display: flex](#display-flex)
* [display: inline-flex](#display-inline-flex)
* [Try it out for yourself](#try-it-out-for-yourself)

<p><br /><br /></p>

## Before you Begin

However, to start testing these properties, we must set up basic styles for our parent and children elements (***already in the created template***).

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

<p><br /><br /></p>

## display: flex;

```
.parent {
    display: flex;
}
```

![display: flex; with multiple elements](./screenshots/02-display_flex.png)

<p><br /><br /></p>

## display: inline-flex;

```
.parent {
    display: inline-flex;
}
```

![display: inline-flex; with multiple elements](./screenshots/03%20-%20display_inline-flex.png)

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

<p><br /><br /></p>

## Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/KKrOgvR/7fd835393c5184af664707e28e0aa2ff" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

- - -

[flex-direction](./../01%20-%20flex-direction/)