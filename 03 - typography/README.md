# Typography

Typography is one of the design elements that effects how the content of a website is perceived. In this lesson we are going to setup the type for our website.

I would encourage you to read on: [em v. rem](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/#:~:text=What%20Are%20rem%20Units%3F,a%20default%20value%20of%2016px.), [@import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import), [styling lists](https://www.w3schools.com/css/css_list.asp), [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), [::before / ::after](https://css-tricks.com/almanac/selectors/a/after-and-before/), [content](https://developer.mozilla.org/en-US/docs/Web/CSS/content) and pick a couple of fonts that you'd like to use from [Google Fonts](https://fonts.google.com/).

## Pick fonts
I would suggest for this exercise to pick one type for your heading and one for your main body that you think would play nice with each other. You can change this as you move forward in designing your personal portfolio.

To pick your fonts you can go to [Google Fonts](https://fonts.google.com/).

I am picking:
* Lato - Regular 400, Regular 400 Italic, Bold 700 and Bold 700 Italic.
* Libre Baskerville - Bold 700

On the right hand side of the screen you can see that there are two options under "Use on the web," please select the `@import` option.

```
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Libre+Baskerville:wght@700&display=swap');
```

Please notice on the code above that I just copied the `@import` part of the code block, not including the `<style></style>` tags since we are going to import it in our current style.css file.

Below, you can see how we can implement the fonts on our CSS

```
font-family: 'Lato', sans-serif;
font-family: 'Libre Baskerville', serif;
```

## Create selectors for our styles
```
html {}

body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.25em;
}

/* Typography */
h1, h2, h3 ,h4 ,h5, h6 {
    ...
}

h1 { }
h2 { }
h3 { }
h4 { }

/* End of Typography */
```

## Select your font sizes
To make this task easier there's a website called [Modularscale](https://www.modularscale.com/) that allows us to use `rem` and `em` to make our font sizes larger or smaller in a logical manner.

On the left hand side select under "Ratio" "4:5 - major third" or "1.25".

Using that scale we are going to start assigning the following CSS variables.

```
:root {
    /* Typography */
    --base-font-size: 20px;
    --base-scale: 1.25;
    --base-line-height: calc(1em * var(--base-scale));
    --h4-font-size: 1rem;
    --h3-font-size: calc(1rem * var(--base-scale));
    --h2-font-size: calc(1rem * var(--base-scale) * var(--base-scale));
    --h1-font-size: calc(1rem * var(--base-scale) * var(--base-scale) * var(--base-scale));
}
```

## Update styles
With the variables we defined above, let's fill in the blanks for our typography styles.

```
html {
    font-size: var(--base-font-size);
}

body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: var(--base-line-height);
    font-family: 'Lato', 'Arial', 'Helvetica', sans-serif;
    font-weight: 400;
}

/* Typography */
h1, h2, h3 ,h4 ,h5, h6 {
    font-family: 'Libre Baskerville', 'Georgia', 'Times New Roman', serif;
    line-height: var(--base-line-height);
    font-weight: 700;
}

h1 {
    font-size: var(--h1-font-size);
}

h2 {
    font-size: var(--h2-font-size);
}

h3 {
    font-size: var(--h3-font-size);
}

h4 {
    font-size: var(--h4-font-size);
}
```

If you refresh the `index.html` file inside the Typography folder you will see the styles are updated and how it looks with the new styles.

We have a section called **"Heading styled paragraphs"**, here we are going to add a few more styles to style the paragraphs if we ever want to add a heading looking sentence that does not have the same importance as for example a proper heading element.

```
h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
    ...
    margin-bottom: var(--base-line-height);
}

h1, .h1 {
    ...
}

h2, .h2 {
    ...
}

h3, .h3 {
    ...
}

h4, .h4 {
    ...
}
```

## Other Styles
### Inline element styles
Review `Table 1.3 - Paragraph elements` to see all the elements we have available for inline-styles.

### Paragraphs
We are going to add a bit of margin at the bottom of each paragraph to create separation from one element and the next.
```
/* Paragraph */
p {
    margin-bottom: var(--base-line-height);
}
```

### Blockquotes
One of the elements that we see in multiple ecommerce websites are customer testimonials or quotes about the services provided from their customers. We are going to style a blockquote component that can be used to display testimonials on our personal portfolio or website redesign project.

Let's create the styles for the component.

```
/* Blockquotes */
blockquote {}
blockquote footer {}
/* End of Blockquotes */
```

To style our quotes we are going to:
* Add quotation marks when opening and closing the quote
* Add a [long dash](https://www.compart.com/en/unicode/U+2014) to separate the footer of the quote from the quote itself
* Make the text for the quote larger than the citation
* Add class modifiers if we would like to style the quote to be left, right and center aligned

```
/* Blockquotes */
blockquote {
    font-size: calc(1rem * var(--base-scale));
}

blockquote p:first-of-type::before {
    content: open-quote;
}

blockquote p:last-of-type::after {
    content: close-quote;
}

blockquote.text-center { text-align: center; }

blockquote.text-right { text-align: right; }

blockquote footer {
    font-size: 1rem;
}

blockquote footer::before {
    content: "\2014";
    margin-right: calc(.25rem * var(--base-scale));
}
/* End of Blockquotes */
```

### Unordered and Ordered Lists
Having the right html structure for lists is important to denote parent/child relationship.

Please notice that the nested `ul` are placed inside the corresponding `li`.
```
<ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
    <li>Unordered list item 3
        <ul>
            <li>Nested list item 1</li>
            <li>Nested list item 2</li>
            <li>Nested list item 3</li>
            <li>Nested list item 4
                <ul>
                    <li>Third level list item 1</li>
                    <li>Third level list item 2</li>
                    <li>Third level list item 3</li>
                    <li>Third level list item 4</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Unordered list item 4</li>
</ul>
```

A good exercise to understand how list are styled is to remove the default browser styles from a list style. In our case we are going to do it with the `ul class="unstyled"` element.

```
ul.unstyled {
    list-style-type: none;
    padding-left: 0;
}
```

We can also affect how elements inside of a list is laid out. We can use both `flexbox` or even `float` to make that happen. Let's style our `ul class="inline"` to have all the list items inside of it to be aligned in the baseline.

*`float`*
```
ul.inline {
    list-style-type: none;
    padding: 0;
}

ul.inline > li {
    display: inline-block;
    margin-right: calc(1rem * var(--base-scale));
}

ul.inline > li:last-of-type {
    margin-right: 0;
}
```

*`flexbox`*
```
ul.inline {
    list-style-type: none;
    padding: 0;
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: baseline;
    align-content: flex-start;
}


ul.inline > li {
    margin-right: calc(1rem * var(--base-scale));
}

ul.inline > li:last-of-type {
    margin-right: 0;
}
```

We also have unconventional types of lists such as the `definition list`, `definition term` and `definition description`.

```
<dl><dt></dt><dd></dd></dl>
```

The purpose of the above is to create a list of definitions that may be used on the site. Think of common terms.

We can keep the style minimalistic by doing something like this.

```
dl {
    border-left: 4px solid black;
    padding: var(--base-line-height);
    padding-right: 0;
}

dt {
    font-weight: bold;
}

dd {
    font-style: italic;
    margin-bottom:  var(--base-line-height);
}

dd:last-of-type {
    margin-bottom: 0;
}
```

## Final Solution
```
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Libre+Baskerville:wght@700&display=swap');

:root {
    /* Typography */
    --base-font-size: 20px;
    --base-scale: 1.25;
    --base-line-height: calc(1em * var(--base-scale));
    --h4-font-size: 1rem;
    --h3-font-size: calc(1rem * var(--base-scale));
    --h2-font-size: calc(1rem * var(--base-scale) * var(--base-scale));
    --h1-font-size: calc(1rem * var(--base-scale) * var(--base-scale) * var(--base-scale));
}

html {
    font-size: var(--base-font-size);
}

body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: var(--base-line-height);
    font-family: 'Lato', 'Arial', 'Helvetica', sans-serif;
    font-weight: 400;
}

/* Typography */
h1, h2, h3 ,h4 ,h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: 'Libre Baskerville', 'Georgia', 'Times New Roman', serif;
    line-height: var(--base-line-height);
    font-weight: 700;
    margin-bottom: var(--base-line-height);
}

h1, .h1 {
    font-size: var(--h1-font-size);
}

h2, .h2 {
    font-size: var(--h2-font-size);
}

h3, .h3 {
    font-size: var(--h3-font-size);
}

h4, .h4 {
    font-size: var(--h4-font-size);
}

/* Paragraph */
p {
    margin-bottom: var(--base-line-height);
}

/* Blockquotes */
blockquote {
    font-size: calc(1rem * var(--base-scale));
}

blockquote p:first-of-type::before {
    content: open-quote;
}

blockquote p:last-of-type::after {
    content: close-quote;
}

blockquote.text-center { text-align: center; }

blockquote.text-right { text-align: right; }

blockquote footer {
    font-size: 1rem;
}

blockquote footer::before {
    content: "\2014";
    margin-right: calc(.25rem * var(--base-scale));
}
/* End of Blockquotes */

/* Lists */
ul.unstyled {
    list-style-type: none;
    padding-left: 0;
}

ul.inline {
    list-style-type: none;
    padding: 0;
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: baseline;
    align-content: flex-start;
}

ul.inline > li {
    margin-right: var(--base-line-height);
}

ul.inline > li:last-of-type {
    margin-right: 0;
}

/* Description lists */
dl {
    border-left: 4px solid black;
    padding: var(--base-line-height);
    padding-right: 0;
}

dt {
    font-weight: bold;
}

dd {
    font-style: italic;
    margin-bottom:  var(--base-line-height);
}

dd:last-of-type {
    margin-bottom: 0;
}
/* End of Lists */
/* End of Typography */
```