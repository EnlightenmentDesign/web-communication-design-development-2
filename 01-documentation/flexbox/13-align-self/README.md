# align-self
This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Note that float, clear and vertical-align have no effect on a flex item.

Please see the [align-items](https://github.com/EnlightenmentDesign/web-communication-design-development-2/tree/main/01%20-%20flexbox/05%20-%20align-items) explanation to understand the available values.

Before starting this exercise please make sure that you have the following in your CSS:
```
.child.one { font-size: 1.618rem; }
```

## align-self
```
.item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

## Row
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


## Column
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

- - -

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- - -

[Assignment](./../14%20-%20Assignment/)