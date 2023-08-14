# flex-wrap
By default, flex items will all try to fit onto one `row` or `column`. You can change that and allow the items to wrap if the child elements do not have enough space in the area that was designated for it.

## Table of content
* [Before you begin](#before-you-begin)
* [flex-wrap: nowrap](#flex-wrap-nowrap)
* [flex-wrap: wrap](#flex-wrap-wrap)
* [flex-wrap: wrap-reverse](#flex-wrap-wrap-reverse)
* [Try it out for yourself](#try-it-out-for-yourself)

<p><br /><br /></p>

## Before you begin
Please make sure to add the following declarations to the `.parent` CSS styles.
```
.parent {
    ...
    max-height: calc(100vh - 2rem - 2px);
    ...
}
```

If you'd like to learn (highly suggested) more about `calc()` please read the documenation [here](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).

<p><br /><br /></p>

## flex-wrap: nowrap;
**nowrap (default):** all flex items will be on one row or column depending on what was set in `flex-direction`.
```
.parent {
    ...
    flex-wrap: nowrap;
}
```
![flex-wrap: nowrap;](./screenshots/01%20-%20flex-wrap_nowrap.png)

<p><br /><br /></p>

## flex-wrap: wrap;
**wrap:** flex items will wrap onto multiple lines and flow depending on what was setup in `flex-direction`.
```
.parent {
    ...
    flex-wrap: wrap;
}
```
![flex-wrap: wrap;](./screenshots/00%20-%20flex-wrap_wrap.png)

<p><br /><br /></p>

## flex-wrap: wrap-reverse;
**wrap-reverse:** flex items will wrap onto multiple lines and flow opposite to what was setup in `flex-direction`.
```
.parent {
    ...
    flex-wrap: wrap-reverse;
}
```
![flex-wrap: wrap-reverse;](./screenshots/02%20-%20flex-wrap_wrap-reverse.png)

<p><br /><br /></p>

## Try it out for yourself
I created this <a href="https://codepen.io/ccucalon/pen/bGQXBbj/3515b1ecb7625ba56d0a98f93bafcd9a" target="_blank">CodePen</a> file so that you can try it out in the browser if necessary.

<p><br /><br /></p>

- - -

[flex-flow](./../03-flex-flow/)