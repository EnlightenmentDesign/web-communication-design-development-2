# flex-wrap
By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

## flex-wrap: nowrap;
**nowrap (default):** all flex items will be on one line
```
.parent {
    flex-wrap: nowrap;
}
```
![flex-wrap: nowrap;](./screenshots/01%20-%20flex-wrap_nowrap.png)

## flex-wrap: wrap;
**wrap:** flex items will wrap onto multiple lines, from top to bottom.
```
.parent {
    flex-wrap: wrap;
}
```
![flex-wrap: wrap;](./screenshots/00%20-%20flex-wrap_wrap.png)

## flex-wrap: wrap-reverse;
**wrap-reverse:** flex items will wrap onto multiple lines from bottom to top.
```
.parent {
    flex-wrap: wrap-reverse;
}
```
![flex-wrap: wrap-reverse;](./screenshots/02%20-%20flex-wrap_wrap-reverse.png)

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

<hr>

[flex-flow](https://github.com/EnlightenmentDesign/web-communication-design-development-2/tree/main/01%20-%20flexbox/03%20-%20flex-flow)