# Grid System
To create our Grid system we are going to use [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), [calc()](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) and [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

## Starting out
Notice that in our CSS file we have a [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) selector. This matches the root element of a tree representing the document. Again, this would in turn mean that we are selecting the `html` tag.

```
:root {
    /* Grid */

    /* Colors */
    --blue-1: #ebf1ff;
    --blue-2: #d4e1ff;
    --blue-3: #becffe;
    --blue-4: #a8bdfd;
    --blue-5: #93a9fd;
    --blue-6: #6c82fb;
}
```

Please see that I have already provided a few values in the root selector.

These values represent comments `/* */` as well as CSS variables (i.e.: `--blue-1`). These variables are created to make it easier to update as well as for reusability. The purpose of a variable is to serve as a container for a value that can later be used as an attribute to a CSS property.

The structure of a CSS variable can be seen in the example: `--blue-1: #ebf1ff`. However, when we are ready to use that variable we would do something like this: `background-color: var(--blue-1)`.

## Let's build the grid system
### Determine the number of columns
to have a structure, we have to decide on the number of columns we will be using for our grid. In our case we are going to use **6 columns**. This would help us make them even and allocate the right space between elements and easily divisible.

This will look something like this:
```
:root {
    /* Grid */
    --number-of-columns: 6;
    --grid-width: calc(100% / --number-of-columns);
    ...
}
```

What we are doing in the above code is taking the full width of an element (`100%`) and dividing it by the `--number-of-columns` variable we created. By doing this we have determined that each `--grid-width` value is going to be the product of that division. In other words, if we had one element, that element can be divided into **6 columns** which in turn can then be split up to hold a value that would span the number of columns.

So if we were to do this mathematically we can take a **row** which has a width of **100%** and that row has the potential to hold:
* 6 elements that have a width of **1 column width**
* 3 elements that have a width of **2 column width**
* 2 elements that have a width of **3 column width**
* 1 element that has a width of **4 column width** and another element that has a width of **2 column width**; and
* 1 element that has a width of **5 column width** and another element that has a width of **1 column width**

*Notice that the above all add up to a total of 6 columns*

With this knowledge we can now create our own column widths.
```
:root {
    /* Grid */
    --number-of-columns: 6;
    --grid-width: calc(100% / --number-of-columns);
    --col-1: calc(var(--grid-width) * 1);
    --col-2: calc(var(--grid-width) * 2);
    --col-3: calc(var(--grid-width) * 3);
    --col-4: calc(var(--grid-width) * 4);
    --col-5: calc(var(--grid-width) * 5);
    --col-6: calc(var(--grid-width) * 6);
    ...
}
```


### Setup the grid structure ###
After creating the column declarations inside `:root` we are now ready to create our grid structure.

If you look at the [00-index.html](https://github.com/EnlightenmentDesign/web-communication-design-development-2/blob/main/02%20-%20grid/01%20-%20grid%20system/00-index.html) file, you will see that we created a set of columns in place.

```
<div class="container">
    <div class="row">
        <div class="col">1</div>
        <div class="col">2</div>
        <div class="col">3</div>
        <div class="col">4</div>
        <div class="col">5</div>
        <div class="col">6</div>
    </div>
</div>
```

The structure for our grid system is going to consist in a nested set of divs that start with a `<div class='container'></div>`, and then `<div class='row'></div>`, and lastly the `<div class='col'></div>` that is going to hold the information.

These three elements create the separation between content and structure that we are going to use to create our grid system.

Let's style our CSS.

#### Initial CSS & HTML
In the CSS we already have a class selector for `container`, `row` and we will create one for `col` (which we will update as we move forward).

```
/* Grid System */
.container {
}

.row {
}

[class^="col-"] {
    width: 100%;
}

.col {
}
```

##### Container

Let's edit the `.container` to look like this:
```
.container {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
}
```

The reason why we are setting up the container in this matter is to make sure that the default width of the container is 100% when on a mobile device. Our goal is to design our grid to be built from mobile-desktop. 

We are also giving a `padding-left` and `padding-right` of `1rem` to create some separation and structure to the content.

By setting up our `margin-left: auto;` and `margin-right: auto;` we are letting the browser know that if the width of the `.container` is smaller than the browser width then it should take the space to the left and the right of the element and space it evenly between those two sides, this will effectively make the `<div>` horizontally centered on the page.

And we are setting up the `margin-bottom: 1.25rem;` to give a separation for when we have multiple containers one after another like the example below:
```
<div class="container">...</div >
<div class="container">...</div >
<div class="container">...</div >
```

##### Row
Now, let's edit the `.row` selector to look like this:
```
.row {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    margin-left: -1rem;
    margin-right: -1rem;
}
```

What we are doing here with the `.row` selector is making it into a *flexbox* element. 

By setting the `margin-left: -1rem;` and `margin-right: -1rem` is taking the space that the padding from the container to make sure that the columns inside the row fit correctly.

##### Column
```
.col {
    flex: 0 0 var(--grid-width);
    max-width: var(--grid-width);
}
```
In our column what we are doing is using the `--grid-width` variable to make sure that all our columns we created in the HTML document have the same width.

However, as you can see, we need to provide more to make it more useful for our layout.

So let's go ahead and update our HTML and CSS to create different columns. I'm also going to add some background-colors to the columns to make it easier to see as you are visualizing your changes.

*00-index.html*
```
<div class="container">
    <div class="row">
        <div class="col-1">1</div>
        <div class="col-1">2</div>
        <div class="col-1">3</div>
        <div class="col-1">4</div>
        <div class="col-1">5</div>
        <div class="col-1">6</div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-2">1</div>
        <div class="col-2">2</div>
        <div class="col-2">3</div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-3">1</div>
        <div class="col-3">2</div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-4">1</div>
        <div class="col-2">2</div>
    </div>
</div>'
<div class="container">
    <div class="row">
        <div class="col-5">1</div>
        <div class="col-1">2</div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-6">1</div>
    </div>
</div>
```

*style.css*
```
.col-1 {
    flex: 0 0 var(--col-1);
    max-width: var(--col-1);
    background-color: var(--blue-1);
}

.col-2 {
    flex: 0 0 var(--col-2);
    max-width: var(--col-2);
    background-color: var(--blue-2);
}

.col-3 {
    flex: 0 0 var(--col-3);
    max-width: var(--col-3);
    background-color: var(--blue-3);
}

.col-4 {
    flex: 0 0 var(--col-4);
    max-width: var(--col-4);
    background-color: var(--blue-4);
}

.col-5 {
    flex: 0 0 var(--col-5);
    max-width: var(--col-5);
    background-color: var(--blue-5);
}

.col-6 {
    flex: 0 0 var(--col-6);
    max-width: var(--col-6);
    background-color: var(--blue-6);
}
```

If you refresh the page you should be able to see that all the columns are now present and holding the right number of columns available for that column to exist. Please refer to **Determine the number of column** if you have any doubts on how we came up with the way these columns are laid out.

### Media Queries

This is a great start to our grid system, but you will notice that now that the columns are in place, if you make your browser window wider and smaller the grid expands from one edge of the browser to the other and does not change. to create a layout that will be able to adjust based on how you would like to style the site we will need to start adding some `media queries`. These media queries will help us create breakpoints for how our system will work.

The media queries we are going to use follow t-shirt size standards:
* **xs**: (default, no media queries necessary)
* **sm**: `min-width: 576px`
* **md**: `min-width: 768px`
* **lg**: `min-width: 992px`
* **xl**: `min-width: 1200px`

#### Container
```
.container { ... } /* Default value we had previously setup */

@media screen and (min-width: 576px){ .container { max-width: 576px; }} /* sm */

@media screen and (min-width: 768px){ .container { max-width: 768px; }} /* md */

@media screen and (min-width: 992px){ .container { max-width: 992px; }} /* lg */

@media screen and (min-width: 1200px){ .container { max-width: 1200px; }} /* xl */
```

What we did with the container effectively is setup our breakpoints so that at each breakpoint the container width will not exceed the breakpoint size. This will help keep the container centered on the page and not expanding from one edge of the browser to the next.

We are also going to add a new class called `.container-fluid` that will allow us to in some cases make the content go from one side of the browser to the other. This will make it simpler to combine full width layouts and framed layouts using our grid system.
```
.container-fluid,
.container {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
}
```

#### Columns
```
.col-xs-1 {
    flex: 0 0 var(--col-1);
    max-width: var(--col-1);
    background-color: var(--blue-1);
}

.col-xs-2 {
    flex: 0 0 var(--col-2);
    max-width: var(--col-2);
    background-color: var(--blue-2);
}

.col-xs-3 {
    flex: 0 0 var(--col-3);
    max-width: var(--col-3);
    background-color: var(--blue-3);
}

.col-xs-4 {
    flex: 0 0 var(--col-4);
    max-width: var(--col-4);
    background-color: var(--blue-4);
}

.col-xs-5 {
    flex: 0 0 var(--col-5);
    max-width: var(--col-5);
    background-color: var(--blue-5);
}

.col-xs-6 {
    flex: 0 0 var(--col-6);
    max-width: var(--col-6);
    background-color: var(--blue-6);
}
```

By adding the differentiator of `xs` to the class we are now able to select which breakpoint class selector we would like to target when we are at a specific breakpoint. This will determine on how the content will be laid out on the page.

We are going to do the same with our other breakpoints `sm`, `md`, `lg`, and `xl`.
```
/* Styles for 'col-sm-...' grid */
@media screen and (min-width: 576px){
    .col-sm-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-sm-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-sm-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-sm-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-sm-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-sm-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}

/* Styles for 'col-md-...' grid */
@media screen and (min-width: 768px){
    .col-md-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-md-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-md-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-md-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-md-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-md-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}

/* Styles for 'col-lg-...' grid */
@media screen and (min-width: 992px){
    .col-lg-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-lg-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-lg-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-lg-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-lg-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-lg-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}

/* Styles for 'col-xl-...' grid */
@media screen and (min-width: 1200px){
    .col-xl-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-xl-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-xl-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-xl-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-xl-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-xl-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}
```

In your local repository you should check out how the following pages look like when you add those styles:
* 01 - grid-xs.html
* 02 - grid-sm.html
* 03 - grid-md.html
* 04 - grid-lg.html
* 05 - grid-xl.html

Notice that the columns are butted up against each other, so we need to create a gutter between the elements. Let's add them as follows:
```
[class^="col-"] {
    padding: 0 1rem;
    width: 100%;
    max-width: 100%;
}
```

By doing the above we are now able to select all the classes that start with `col-` and provide them a padding to the left and right of 1rem which will create a separation between the columns themselves.

We also added a `width: 100%;` and `max-width: 100%`, this ensures that for example if you setup a div to be `col-md-6` which will only be called when the browser is at least `768px` and the browser size falls below that amount, any divs inside of that row will occupy at that point `100%` the width of the row.

Try commenting the code above and make the browser smaller on the `04 - grid-lg.html` file and see what happens before and after you comment that line.

This brings us to the end of the grid creation!

## Bonus information
If you copy the following styles which we created during our In Class Flexbox Practice you should be able to view the `06 - story.html` and `07 - quick-layout.html` files and see how much easier it is to use the grid system to align elements next to each other.

```
/* Story styles */
.story {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    gap: 1.618rem;
}

.story:nth-child(even) {
    flex-direction: row-reverse;
}

.story .image {
    aspect-ratio: 1;
    background-color: #dadada;
    flex: 0 0 calc(50% - 1.618rem); 
}

.story .description {
    flex: 1 0 50%;
}

@media screen and (min-width: 576px){
    .story .image {
        flex-basis: 30%;
    }
}

@media screen and (min-width: 992px){
    .story,
    .story:nth-child(even) {
        flex-flow: column wrap;
    }

    .story .image {
        aspect-ratio: 16/9;
        flex: 0 0 100%;
        width: 100%;
    }
}
/* End of Story styles */
```

# Final Solution

```
/*
    Created by: Student Name - Student ID
    Created on: Today's Date
    Updated on: Today's Date
    Project: Flexbox
*/

:root {
    /* Grid */
    --number-of-columns: 6;
    --grid-width: calc(100% / --number-of-columns);
    --col-1: calc(var(--grid-width) * 1);
    --col-2: calc(var(--grid-width) * 2);
    --col-3: calc(var(--grid-width) * 3);
    --col-4: calc(var(--grid-width) * 4);
    --col-5: calc(var(--grid-width) * 5);
    --col-6: calc(var(--grid-width) * 6);

    /* Colors */
    --blue-1: #ebf1ff;
    --blue-2: #d4e1ff;
    --blue-3: #becffe;
    --blue-4: #a8bdfd;
    --blue-5: #93a9fd;
    --blue-6: #6c82fb;
}

* {
    box-sizing: border-box;
    position: relative;
}

body {
    padding: 0;
    margin: 0;
}

/* Images */
img {
    max-width: 100%;
}

.round-image {
    border-radius: 50%;
    overflow: hidden;
    aspect-ratio: 1;
}

.round-image img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
/* End of Images */

/* Grid System */
.container-fluid,
.container {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
}

@media screen and (min-width: 576px){ .container { max-width: 576px; }} /* sm */
@media screen and (min-width: 768px){ .container { max-width: 768px; }} /* md */
@media screen and (min-width: 992px){ .container { max-width: 992px; }} /* lg */
@media screen and (min-width: 1200px){ .container { max-width: 1200px; }} /* xl */

.row {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    margin-left: -1rem;
    margin-right: -1rem;
}

[class^="col-"] {
    padding: 0 1rem;
    width: 100%;
    max-width: 100%;
    border: 1px solid green;
}

.col-xs-1 {
    flex: 0 0 var(--col-1);
    max-width: var(--col-1);
    background-color: var(--blue-1);
}

.col-xs-2 {
    flex: 0 0 var(--col-2);
    max-width: var(--col-2);
    background-color: var(--blue-2);
}

.col-xs-3 {
    flex: 0 0 var(--col-3);
    max-width: var(--col-3);
    background-color: var(--blue-3);
}

.col-xs-4 {
    flex: 0 0 var(--col-4);
    max-width: var(--col-4);
    background-color: var(--blue-4);
}

.col-xs-5 {
    flex: 0 0 var(--col-5);
    max-width: var(--col-5);
    background-color: var(--blue-5);
}

.col-xs-6 {
    flex: 0 0 var(--col-6);
    max-width: var(--col-6);
    background-color: var(--blue-6);
}

/* Styles for 'col-sm-...' grid */
@media screen and (min-width: 576px){
    .col-sm-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-sm-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-sm-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-sm-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-sm-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-sm-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}

/* Styles for 'col-md-...' grid */
@media screen and (min-width: 768px){
    .col-md-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-md-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-md-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-md-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-md-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-md-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}

/* Styles for 'col-lg-...' grid */
@media screen and (min-width: 992px){
    .col-lg-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-lg-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-lg-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-lg-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-lg-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-lg-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}

/* Styles for 'col-xl-...' grid */
@media screen and (min-width: 1200px){
    .col-xl-1 {
        flex: 0 0 var(--col-1);
        max-width: var(--col-1);
        background-color: var(--blue-1);
    }
    
    .col-xl-2 {
        flex: 0 0 var(--col-2);
        max-width: var(--col-2);
        background-color: var(--blue-2);
    }
    
    .col-xl-3 {
        flex: 0 0 var(--col-3);
        max-width: var(--col-3);
        background-color: var(--blue-3);
    }
    
    .col-xl-4 {
        flex: 0 0 var(--col-4);
        max-width: var(--col-4);
        background-color: var(--blue-4);
    }
    
    .col-xl-5 {
        flex: 0 0 var(--col-5);
        max-width: var(--col-5);
        background-color: var(--blue-5);
    }
    
    .col-xl-6 {
        flex: 0 0 var(--col-6);
        max-width: var(--col-6);
        background-color: var(--blue-6);
    }
}

/* End of Grid System */

/* Story styles */
.story {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    gap: 1.618rem;
}

.story .image {
    aspect-ratio: 1;
    background-color: #dadada;
    flex: 0 0 calc(50% - 1.618rem); 
}

.story .description {
    flex: 1 0 50%;
}

@media screen and (min-width: 576px){
    .story .image {
        flex-basis: 30%;
    }
}

@media screen and (min-width: 992px){
    .story {
        flex-flow: column wrap;
    }

    .story .image {
        aspect-ratio: 16/9;
        flex: 0 0 100%;
        width: 100%;
    }
}
/* End of Story styles */


/*
    * Window size styles
    * Do not edit or delete this from examples
*/
#windowSize {
    padding: 0.25rem 0.5rem;
    background-color: rgba(0,0,0,0.3);
    color: white;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    user-select: none;
    z-index: 10;
}
/* End of Window size styles */
```
