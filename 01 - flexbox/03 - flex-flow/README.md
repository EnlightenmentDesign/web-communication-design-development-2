# flex-flow
This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes. The default value is row nowrap.

```
.parent {
    flex-flow: <flex-direction> <flex-wrap>;
}
```

## flex-flow: row nowrap;
```
.parent {
    flex-flow: row nowrap;
}
```
![flex-flow: row nowrap](./screenshots/00%20-%20flex-flow_row_nowrap.png)

## flex-flow: row wrap;
```
.parent {
    flex-flow: row wrap;
}
```
![flex-flow: row wrap](./screenshots/01%20-%20flex-flow_row_wrap.png)

## flex-flow: row wrap-reverse;
```
.parent {
    flex-flow: row wrap-reverse;
}
```
![flex-flow: row wrap-reverse](./screenshots/02%20-%20flex-flow_row_wrap-reverse.png)

## flex-flow: row-reverse nowrap;
```
.parent {
    flex-flow: row-reverse nowrap;
}
```
![flex-flow: row-reverse nowrap](./screenshots/03%20-%20flex-flow_row-reverse_nowrap.png)

## flex-flow: row-reverse wrap;
```
.parent {
    flex-flow: row-reverse wrap;
}
```
![flex-flow: row-reverse wrap](./screenshots/04%20-%20flex-flow_row-reverse_wrap.png)

## flex-flow: row-reverse wrap-reverse;
```
.parent {
    flex-flow: row-reverse wrap-reverse;
}
```
![flex-flow: row-reverse wrap-reverse](./screenshots/05%20-%20flex-flow_row-reverse_wrap-reverse.png)

# Column Styles
Now that we are going to test the `flex-flow` with a direction of `column` we need to add the following css to our parent selector so that our examples can be a bit clearer.
```
.parent {
    ...
    height: 95vh;
}
```

## flex-flow: column nowrap;
```
.parent {
    flex-flow: column nowrap;
}
```
![flex-flow: column nowrap](./screenshots/06%20-%20flex-flow_column_nowrap.png)

## flex-flow: column wrap;
```
.parent {
    flex-flow: column wrap;
}
```
![flex-flow: column wrap](./screenshots/07%20-%20flex-flow_column_wrap.png)

## flex-flow: column wrap-reverse;
```
.parent {
    flex-flow: column wrap-reverse;
}
```
![flex-flow: column wrap-reverse](./screenshots/08%20-%20flex-flow_column_wrap-reverse.png)

## flex-flow: column-reverse nowrap;
```
.parent {
    flex-flow: column-reverse nowrap;
}
```
![flex-flow: column-reverse nowrap](./screenshots/09%20-%20flex-flow_column-reverse_nowrap.png)

## flex-flow: column-reverse wrap;
```
.parent {
    flex-flow: column-reverse wrap;
}
```
![flex-flow: column-reverse wrap](./screenshots/10%20-%20flex-flow_column-reverse_wrap.png)

## flex-flow: column-reverse wrap-reverse;
```
.parent {
    flex-flow: column-reverse wrap-reverse;
}
```
![flex-flow: column-reverse wrap-reverse](./screenshots/05%20-%20flex-flow_column-reverse_wrap-reverse.png)

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- - -

[justify-content](./../04%20-%20justify-content/)