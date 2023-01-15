# align-content
This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

**normal (default):** items are packed in their default position as if no value was set.

## flex-flow row wrap;<br >justify-content: flex-start;<br >align-items: flex-start;
### align-content: flex-start;
**flex-start / start:** items packed to the start of the container. The (more supported) flex-start honors the flex-direction while start honors the writing-mode direction.
```
.parent {
    align-content: flex-start;
}
```
![align-content: ](./screenshots/00%20-%20align-content_flex-start_row.png)

### align-content: flex-end;
**flex-end / end:** items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the writing-mode direction.
```
.parent {
    align-content: flex-end;
}
```
![align-content: ](./screenshots/01%20-%20align-content_flex-end_row.png)

### align-content: center;
**center:** items centered in the container
```
.parent {
    align-content: center;
}
```
![align-content: ](./screenshots/02%20-%20align-content_center_row.png)

### align-content: space-between;
**space-between:** items evenly distributed; the first line is at the start of the container while the last one is at the end
```
.parent {
    align-content: space-between;
}
```
![align-content: ](./screenshots/04%20-%20align-content_space-between_row.png)

### align-content: space-around;
**space-around:** items evenly distributed with equal space around each line
```
.parent {
    align-content: space-around;
}
```
![align-content: ](./screenshots/05%20-%20align-content_space-around_row.png)

### align-content: space-evenly;
**space-evenly:** items are evenly distributed with equal space around them
```
.parent {
    align-content: space-evenly;
}
```
![align-content: ](./screenshots/06%20-%20align-content_space-evenly_row.png)

### align-content: stretch;
**stretch:** lines stretch to take up the remaining space
```
.parent {
    align-content: stretch;
}
```
![align-content: ](./screenshots/03%20-%20align-content_stretch_row.png)

- - -

## flex-flow column wrap;<br >justify-content: flex-start;<br >align-items: flex-start;
### align-content: flex-start;
![align-content: ](./screenshots/07%20-%20align-content_flex-start_column.png)

### align-content: flex-end;
![align-content: ](./screenshots/08%20-%20align-content_flex-end_column.png)

### align-content: center;
![align-content: ](./screenshots/09%20-%20align-content_center_column.png)

### align-content: space-between;
![align-content: ](./screenshots/11%20-%20align-content_space-between_column.png)

### align-content: space-around;
![align-content: ](./screenshots/12%20-%20align-content_space-around_column.png)

### align-content: space-evenly;
![align-content: ](./screenshots/13%20-%20align-content_space-evenly_column.png)

### align-content: stretch;
#### Question: how can we make this actually stretch the elements to fill the space?
![align-content: ](./screenshots/10%20-%20align-content_stretch_column.png)

- - -

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- - -

[gap](./../07%20-%20gap/)