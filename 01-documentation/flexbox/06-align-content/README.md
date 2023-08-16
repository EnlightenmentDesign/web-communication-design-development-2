# align-content
This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

**stretch (default):** items are packed in their default position as if no value was set.

## Table of content
* [flex-flow row wrap; justify-content: flex-start; align-items: flex-start;](#flex-flow-row-wrapjustify-content-flex-startalign-items-flex-start)
    * [align-content: flex-start](#align-content-flex-start)
    * [align-content: flex-end](#align-content-flex-end)
    * [align-content: center](#align-content-center)
    * [align-content: space-between](#align-content-space-between)
    * [align-content: space-around](#align-content-space-around)
    * [align-content: space-evenly](#align-content-space-evenly)
    * [align-content: stretch](#align-content-stretch)
* [flex-flow column wrap; justify-content: flex-start; align-items: flex-start;](#flex-flow-column-wrapjustify-content-flex-startalign-items-flex-start)
    * [align-content: flex-start](#align-content-flex-start-1)
    * [align-content: flex-end](#align-content-flex-end-1)
    * [align-content: center](#align-content-center-1)
    * [align-content: space-between](#align-content-space-between-1)
    * [align-content: space-around](#align-content-space-around-1)
    * [align-content: space-evenly](#align-content-space-evenly-1)
    * [align-content: stretch](#align-content-stretch-1)
* [Try it out for yourself](#try-it-out-for-yourself)

<p><br /><br /></p>

## flex-flow row wrap;<br >justify-content: flex-start;<br >align-items: flex-start;
### align-content: flex-start;
**flex-start / start:** items packed to the start of the container. The (more supported) flex-start honors the flex-direction while start honors the writing-mode direction.
```
.parent {
    align-content: flex-start;
}
```
![align-content: flex-start;](./screenshots/00%20-%20align-content_flex-start_row.png)

<p><br /><br /></p>

### align-content: flex-end;
**flex-end / end:** items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the writing-mode direction.
```
.parent {
    align-content: flex-end;
}
```
![align-content: flex-end;](./screenshots/01%20-%20align-content_flex-end_row.png)

<p><br /><br /></p>

### align-content: center;
**center:** items centered in the container
```
.parent {
    align-content: center;
}
```
![align-content: center;](./screenshots/02%20-%20align-content_center_row.png)

<p><br /><br /></p>

### align-content: space-between;
**space-between:** items evenly distributed; the first line is at the start of the container while the last one is at the end
```
.parent {
    align-content: space-between;
}
```
![align-content: space-between](./screenshots/04%20-%20align-content_space-between_row.png)

<p><br /><br /></p>

### align-content: space-around;
**space-around:** items evenly distributed with equal space around each line
```
.parent {
    align-content: space-around;
}
```
![align-content: space-around;](./screenshots/05%20-%20align-content_space-around_row.png)

<p><br /><br /></p>

### align-content: space-evenly;
**space-evenly:** items are evenly distributed with equal space around them
```
.parent {
    align-content: space-evenly;
}
```
![align-content: space-evenly;](./screenshots/06%20-%20align-content_space-evenly_row.png)

<p><br /><br /></p>

### align-content: stretch;
**stretch:** lines stretch to take up the remaining space
```
.parent {
    align-content: stretch;
}
```
![align-content: stretch;](./screenshots/03%20-%20align-content_stretch_row.png)

<p><br /><br /></p>

## flex-flow column wrap;<br >justify-content: flex-start;<br >align-items: flex-start;
### align-content: flex-start;
![align-content: flex-start;](./screenshots/07%20-%20align-content_flex-start_column.png)

<p><br /><br /></p>

### align-content: flex-end;
![align-content: flex-end;](./screenshots/08%20-%20align-content_flex-end_column.png)

<p><br /><br /></p>

### align-content: center;
![align-content: center;](./screenshots/09%20-%20align-content_center_column.png)

<p><br /><br /></p>

### align-content: space-between;
![align-content: space-between;](./screenshots/11%20-%20align-content_space-between_column.png)

<p><br /><br /></p>

### align-content: space-around;
![align-content: space-around;](./screenshots/12%20-%20align-content_space-around_column.png)

<p><br /><br /></p>

### align-content: space-evenly;
![align-content: space-evenly;](./screenshots/13%20-%20align-content_space-evenly_column.png)

<p><br /><br /></p>

### align-content: stretch;
#### Question: how can we make this actually stretch the elements to fill the space?
![align-content: stretch;](./screenshots/10%20-%20align-content_stretch_column.png)

<p><br /><br /></p>

### Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/gOZYrzz/bcbbd47507e1a0fe0118006b08230451" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

[gap](./../07-gap/)