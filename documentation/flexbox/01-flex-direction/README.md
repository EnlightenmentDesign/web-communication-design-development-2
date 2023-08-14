# flex-direction
This establishes the **main-axis**, thus defining the direction flex items are placed in the flex container.

Flexbox is (aside from optional wrapping) a single-direction layout concept.

Think of flex items as primarily laying out either in horizontal rows or vertical columns.

## Table of content
* [Before you begin](#before-you-begin)
* [flex-direction: row](#flex-direction-row)
* [flex-direction: row-reverse](#flex-direction-row-reverse)
* [flex-direction: column](#flex-direction-column)
* [flex-direction: column-reverse](#flex-direction-column-reverse)
* [Try it out for yourself](#try-it-out-for-yourself)

<p><br /><br /></p>

## Before you begin
Before we try these out, don't forget to copy the styles from `display: flex` exercise files.

<p><br /><br /></p>

## flex-direction: row;
**row (default):** left to right in ltr; right to left in rtl
```
.parent {
    ...
    flex-direction: row;
}
```
![flex-direction: row;](./screenshots/00%20-%20flex-direction_row.png)

<p><br /><br /></p>

## flex-direction: row-reverse;
**row-reverse:** right to left in ltr; left to right in rtl
```
.parent {
    ...
    flex-direction: row-reverse;
}
```
![flex-direction: row-reverse;](./screenshots/01%20-%20flex-direction_row-reverse.png)

<p><br /><br /></p>

## flex-direction: column;
**column:** same as row but top to bottom
```
.parent {
    ...
    flex-direction: column;
}
```
![flex-direction: column;](./screenshots/02%20-%20flex-direction_column.png)

<p><br /><br /></p>

## flex-direction: column-reverse;
**column-reverse:** same as row-reverse but bottom to top
```
.parent {
    ...
    flex-direction: column-reverse;
}
```
![flex-direction: column-reverse;](./screenshots/04%20-%20flex-direction_column-reverse.png)

<p><br /><br /></p>

## Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/xxQvENw" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

- - -

[flex-wrap](./../02-flex-wrap/)