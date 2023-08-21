# align-self
This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Note that float, clear and vertical-align have no effect on a flex item.

Please see the [align-items](./../05-align-items/) explanation to understand the available values.

## align-self
```
.item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

<p><br /><br /></p>

## Table of content
* [flex-flow: row wrap;](#flex-flow-row-wrap)
    * [align-self: flex-start;](#align-self-flex-start)
    * [align-self: flex-end;](#align-self-flex-end)
    * [align-self: center;](#align-self-center)
    * [align-self: baseline;](#align-self-baseline)
    * [align-self: stretch;](#align-self-stretch)
* [flex-flow: column wrap;](#flex-flow-column-wrap)
    * [align-self: flex-start;](#align-self-flex-start-1)
    * [align-self: flex-end;](#align-self-flex-end-1)
    * [align-self: center;](#align-self-center-1)
    * [align-self: stretch;](#align-self-stretch-1)
* [Try it out for yourself](#try-it-out-for-yourself)


<p><br /><br /></p>

## flex-flow: row wrap;
### align-self: flex-start;
```
.parent {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
}

.child.one {
    ...
    align-self: flex-start;
}
```
![align-self: flex-start;](./screenshots/00%20-%20align-self_flex-start_row.png)

<p><br /><br /></p>


### align-self: flex-end;
```
.parent {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
}

.child.one {
    ...
    align-self: flex-end;
}
```
![align-self: flex-end;](./screenshots/01%20-%20align-self_flex-end_row.png)

<p><br /><br /></p>


### align-self: center;
```
.parent {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
}

.child.one {
    ...
    align-self: center;
}
```
![align-self: center;](./screenshots/02%20-%20align-self_center_row.png)

<p><br /><br /></p>


### align-self: baseline;
```
.parent {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
}

.child.one {
    ...
    align-self: baseline;
}

.child.two {
    ...
    align-self: baseline;
}
```
![align-self: baseline;](./screenshots/03%20-%20align-self_baseline_row.png)

<p><br /><br /></p>


### align-self: stretch;
```
.parent {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: stretch;
}

.child.one {
    ...
    align-self: stretch;
}
```
![align-self: stretch;](./screenshots/04%20-%20align-self_stretch_row.png)

<p><br /><br /></p>


## flex-flow: column wrap;
### align-self: flex-start;
```
.parent {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
}

.child.one {
    ...
    align-self: flex-start;
}
```
![align-self: flex-start;](./screenshots/05%20-%20align-self_flex-start_column.png)

<p><br /><br /></p>


### align-self: flex-end;
```
.parent {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
}

.child.one {
    ...
    align-self: flex-end;
}
```
![align-self: flex-end;](./screenshots/06%20-%20align-self_flex-end_column.png)

<p><br /><br /></p>


### align-self: center;
```
.parent {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
}

.child.one {
    ...
    align-self: center;
}
```
![align-self: center;](./screenshots/07%20-%20align-self_center_column.png)

<p><br /><br /></p>


### align-self: stretch;
```
.parent {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: stretch;
}

.child.one {
    ...
    align-self: stretch;
}
```
![align-self: stretch;](./screenshots/08%20-%20align-self_stretch_column.png)

<p><br /><br /></p>

### Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/QWzwNQr/cd49e1d062b77dcaa031c4504563b210" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.Z