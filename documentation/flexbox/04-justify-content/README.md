# justify-content
This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

## flex-flow: row wrap;
### justify-content: flex-start;
**flex-start (default):** items are packed toward the start of the flex-direction.
```
.parent {
    justify-content: flex-start;
}
```
![justify-content: flex-start;](./screenshots/00%20-%20justify-content_flex-start_row.png)

### justify-content: flex-end;
**flex-end:** items are packed toward the end of the flex-direction.
```
.parent {
    justify-content: flex-end;
}
```
![justify-content: flex-end;](./screenshots/01%20-%20justify-content_flex-end_row.png)

### justify-content: center;
**center:** items are centered along the line
```
.parent {
    justify-content: center;
}
```
![justify-content: center;](./screenshots/02%20-%20justify-content_center_row.png)

### justify-content: space-between;
**space-between:** items are evenly distributed in the line; first item is on the start line, last item on the end line

***Notice:*** *that the space only applies between elements.*
```
.parent {
    justify-content: space-between;
}
```
![justify-content: space-between;](./screenshots/03%20-%20justify-content_space-between_row.png)

### justify-content: space-around;
**space-around:** items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.

***Notice:*** *this can be easily represented by the following formula:*<br>
***(available space) / (2 * number of elements)***<br >
*In other words if we had an available space of 600px and three elments, we would use: <strong>(600px) / (2 * 3) = 100px</strong>.<br >
This means that each side would have an available space of 100px per side. If you look at the example you will notice that the space between elements is greater than the space from an element to its closest margin.*
```
.parent {
    justify-content: space-around;
}
```
![justify-content: space-around;](./screenshots/04%20-%20justify-content_space-around_row.png)

### justify-content: space-evenly;
**space-evenly:** items are distributed so that the spacing between any two items (and the space to the edges) is equal.
***Notice:*** *this can be easily represented by the following formula:*<br>
***(available space) / ((2 * number of elements) - 2)***<br >
*In other words if we had an available space of 600px and three elments, we would use: <strong>(600px) / ((2 * 3) - 2) = 150px</strong>.<br >
This means that the space available between all elements and the space of an element to its closest margin is going to be the same.*

```
.parent {
    justify-content: space-evenly;
}
```
![justify-content: space-evenly;](./screenshots/05%20-%20justify-content_space-evenly_row.png)

- - -

## flex-flow: row-reverse wrap;
### justify-content: flex-start;
![justify-content: flex-start;](./screenshots/06%20-%20justify-content_flex-start_row-reverse.png)

### justify-content: flex-end;
![justify-content: flex-end;](./screenshots/07%20-%20justify-content_flex-end_row-reverse.png)

### justify-content: center;
![justify-content: center;](./screenshots/08%20-%20justify-content_center_row-reverse.png)

### justify-content: space-between;
![justify-content: space-between;](./screenshots/09%20-%20justify-content_space-between_row-reverse.png)

### justify-content: space-around;
![justify-content: space-around;](./screenshots/10%20-%20justify-content_space-around_row-reverse.png)

### justify-content: space-evenly;
![justify-content: space-evenly;](./screenshots/11%20-%20justify-content_space-evenly_row-reverse.png)

- - -

## flex-flow: column wrap;
### justify-content: flex-start;
![justify-content: flex-start;](./screenshots/12%20-%20justify-content_flex-start_column.png)

### justify-content: flex-end;
![justify-content: flex-end;](./screenshots/13%20-%20justify-content_flex-end_column.png)

### justify-content: center;
![justify-content: center;](./screenshots/14%20-%20justify-content_center_column.png)

### justify-content: space-between;
![justify-content: space-between;](./screenshots/15%20-%20justify-content_space-between_column.png)

### justify-content: space-around;
![justify-content: space-around;](./screenshots/16%20-%20justify-content_space-around_column.png)

### justify-content: space-evenly;
![justify-content: space-evenly;](./screenshots/17%20-%20justify-content_space-evenly_column.png)

- - -

## flex-flow: column-reverse wrap;
### justify-content: flex-start;
![justify-content: flex-start;](./screenshots/18%20-%20justify-content_flex-start_column-reverse.png)

### justify-content: flex-end;
![justify-content: flex-end;](./screenshots/19%20-%20justify-content_flex-end_column-reverse.png)

### justify-content: center;
![justify-content: center;](./screenshots/20%20-%20justify-content_center_column-reverse.png)

### justify-content: space-between;
![justify-content: space-between;](./screenshots/21%20-%20justify-content_space-between_column-reverse.png)

### justify-content: space-around;
![justify-content: space-around;](./screenshots/22%20-%20justify-content_space-around_column-reverse.png)

### justify-content: space-evenly;
![justify-content: space-evenly;](./screenshots/23%20-%20justify-content_space-evenly_column-reverse.png)


This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- - -

[align-items](./../05%20-%20align-items/)