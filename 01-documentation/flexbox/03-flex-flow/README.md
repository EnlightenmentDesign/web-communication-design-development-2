# flex-flow
This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes. The default value is row nowrap.

```
.parent {
    flex-flow: <flex-direction> <flex-wrap>;
}
```

## Table of content
* [flex-wrap: nowrap](#flex-wrap-nowrap)
* [Row Styles](#row-styles)
    * [flex-flow: row nowrap](#flex-flow-row-nowrap)
    * [flex-flow: row wrap](#flex-flow-row-wrap)
    * [flex-flow: row wrap-reverse](#flex-flow-row-wrap-reverse)
    * [flex-flow: row-reverse nowrap](#flex-flow-row-reverse-nowrap)
    * [flex-flow: row-reverse wrap](#flex-flow-row-reverse-wrap)
    * [flex-flow: row-reverse wrap-reverse](#flex-flow-row-reverse-wrap-reverse)
* [Column Styles](#column-styles)
    * [flex-flow: column nowrap](#flex-flow-column-nowrap)
    * [flex-flow: column wrap](#flex-flow-column-wrap)
    * [flex-flow: column wrap-reverse](#flex-flow-column-wrap-reverse)
    * [flex-flow: column-reverse nowrap](#flex-flow-column-reverse-nowrap)
    * [flex-flow: column-reverse wrap](#flex-flow-column-reverse-wrap)
    * [flex-flow: column-reverse wrap-reverse](#flex-flow-column-reverse-wrap-reverse)
* [Try it out for yourself](#try-it-out-for-yourself)

<p><br /><br /></p>

## Row Styles
### flex-flow: row nowrap;
```
.parent {
    flex-flow: row nowrap;
}
```
![flex-flow: row nowrap](./screenshots/00%20-%20flex-flow_row_nowrap.png)

<p><br /><br /></p>

### flex-flow: row wrap;
```
.parent {
    flex-flow: row wrap;
}
```
![flex-flow: row wrap](./screenshots/01%20-%20flex-flow_row_wrap.png)

<p><br /><br /></p>

### flex-flow: row wrap-reverse;
```
.parent {
    flex-flow: row wrap-reverse;
}
```
![flex-flow: row wrap-reverse](./screenshots/02%20-%20flex-flow_row_wrap-reverse.png)

<p><br /><br /></p>

### flex-flow: row-reverse nowrap;
```
.parent {
    flex-flow: row-reverse nowrap;
}
```
![flex-flow: row-reverse nowrap](./screenshots/03%20-%20flex-flow_row-reverse_nowrap.png)

<p><br /><br /></p>

### flex-flow: row-reverse wrap;
```
.parent {
    flex-flow: row-reverse wrap;
}
```
![flex-flow: row-reverse wrap](./screenshots/04%20-%20flex-flow_row-reverse_wrap.png)

<p><br /><br /></p>

### flex-flow: row-reverse wrap-reverse;
```
.parent {
    flex-flow: row-reverse wrap-reverse;
}
```
![flex-flow: row-reverse wrap-reverse](./screenshots/05%20-%20flex-flow_row-reverse_wrap-reverse.png)

<p><br /><br /></p>

# Column Styles
Now that we are going to test the `flex-flow` with a direction of `column` we need to add the following css to our parent selector so that our examples can be a bit clearer.
```
.parent {
    ...
    height: 95vh;
}
```

### flex-flow: column nowrap;
```
.parent {
    flex-flow: column nowrap;
}
```
![flex-flow: column nowrap](./screenshots/06%20-%20flex-flow_column_nowrap.png)

<p><br /><br /></p>

### flex-flow: column wrap;
```
.parent {
    flex-flow: column wrap;
}
```
![flex-flow: column wrap](./screenshots/07%20-%20flex-flow_column_wrap.png)

<p><br /><br /></p>

### flex-flow: column wrap-reverse;
```
.parent {
    flex-flow: column wrap-reverse;
}
```
![flex-flow: column wrap-reverse](./screenshots/08%20-%20flex-flow_column_wrap-reverse.png)

<p><br /><br /></p>

### flex-flow: column-reverse nowrap;
```
.parent {
    flex-flow: column-reverse nowrap;
}
```
![flex-flow: column-reverse nowrap](./screenshots/09%20-%20flex-flow_column-reverse_nowrap.png)

<p><br /><br /></p>

### flex-flow: column-reverse wrap;
```
.parent {
    flex-flow: column-reverse wrap;
}
```
![flex-flow: column-reverse wrap](./screenshots/10%20-%20flex-flow_column-reverse_wrap.png)

<p><br /><br /></p>

### flex-flow: column-reverse wrap-reverse;
```
.parent {
    flex-flow: column-reverse wrap-reverse;
}
```
![flex-flow: column-reverse wrap-reverse](./screenshots/05%20-%20flex-flow_column-reverse_wrap-reverse.png)

<p><br /><br /></p>

### Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/LYXwbpb/59a7b87d0be385919a74e168eff43967" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

- - -

[justify-content](./../04-justify-content/)