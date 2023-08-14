# align-items
This defines the default behavior for how flex items are laid out along the secondary axis on the current line. Think of it as the justify-content version for the secondary axis (perpendicular to the main axis).

To test these better we are going to add a new style. This will make the first child element to have a larger font size which we will use when we test `align-items: baseline;`
```
.child:nth-child(1) { font-size: 1.618rem; }
```

I would highly suggest that you learn about `nth-child(n)` selectors [here](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child).

## Table of content
* [flex-flow: row wrap; justify-content: flex-start](#flex-flow-row-wrapjustify-content-flex-start)
    * [align-items: stretch](#align-items-stretch)
    * [align-items: flex-start](#align-items-flex-start)
    * [align-items: flex-end](#align-items-flex-end)
    * [align-items: center](#align-items-center)
    * [align-items: baseline](#align-items-baseline)
* [flex-flow: column wrap; justify-content: flex-start](#flex-flow-column-wrapjustify-content-flex-start)
    * [align-items: stretch](#align-items-stretch-1)
    * [align-items: flex-start](#align-items-flex-start-1)
    * [align-items: flex-end](#align-items-flex-end-1)
    * [align-items: center](#align-items-center-1)
    * [align-items: baseline](#align-items-baseline-1)
* [Try it out for yourself](#try-it-out-for-yourself)

<p><br /><br /></p>

## flex-flow: row wrap;<br />justify-content-flex-start;
### align-items: stretch;
**stretch (default):** stretch to fill the container (still respect min-width/max-width)
```
.parent {
    align-items: stretch;
}
```
![align-items: stretch;](./screenshots/03%20-%20align-items_stretch_row.png)

<p><br /><br /></p>

### align-items: flex-start;
**flex-start / start / self-start:** items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.
```
.parent {
    align-items: flex-start;
}
```
![align-items: flex-start;](./screenshots/00%20-%20align-items_flex-start_row.png)

<p><br /><br /></p>

### align-items: flex-end;
**flex-end / end / self-end:** items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.
```
.parent {
    align-items: flex-end;
}
```
![align-items: flex-end;](./screenshots/01%20-%20align-items_flex-end_row.png)

<p><br /><br /></p>

### align-items: center;
**center:** items are centered in the cross-axis
```
.parent {
    align-items: center;
}
```
![align-items: center;](./screenshots/02%20-%20align-items_center_row.png)

<p><br /><br /></p>

### align-items: baseline;
**baseline:** items are aligned such as their baselines align
```
.parent {
    align-items: baseline;
}
```
![align-items: baseline;](./screenshots/04%20-%20align-items_baseline_row.png)

<p><br /><br /></p>

## flex-flow: column wrap;<br />justify-content-flex-start;
### align-items: stretch;
In order to test this properly, please remove the property of `width` within the `.child` selector.
![align-items: ](./screenshots/08%20-%20align-items_stretch_column.png)

<p><br /><br /></p>

### align-items: flex-start;
![align-items: ](./screenshots/05%20-%20align-items_flex-start_column.png)

<p><br /><br /></p>

### align-items: flex-end;
![align-items: ](./screenshots/06%20-%20align-items_flex-end_column.png)

<p><br /><br /></p>

### align-items: center;
![align-items: ](./screenshots/07%20-%20align-items_center_column.png)

### align-items: baseline;
#### Question: Why does this one not work when using the flex flow of column?

<p><br /><br /></p>

### Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/qBQeqqR/c995a2e0543b9985b25e05a07a219477" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

- - -

[align-content](./../06-align-content/)