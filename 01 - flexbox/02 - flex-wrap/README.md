# flex-wrap
By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

```
.parent {
    flex-wrap: nowrap;
}
```

```
.parent {
    flex-wrap: wrap;
}
```

```
.parent {
    flex-wrap: wrap-reverse;
}
```

* nowrap (default): all flex items will be on one line
* wrap: flex items will wrap onto multiple lines, from top to bottom.
* wrap-reverse: flex items will wrap onto multiple lines from bottom to top.

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)