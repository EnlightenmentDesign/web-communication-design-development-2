# HTML Basics
Throughout this document we are going to create and go over the basics of what is required for an HTML page.

## Table of content
* [Folder system](#folder-system)
* [Index page](#index-page)
* [CSS](#css)
* [JavaScript](#css)

<p><br /><br /></p>

## Folder system
In order to keep our folder organized we are going to create a new folder with the following structure:

```
📁 template

    📁 css
        🗎 style.css

    📁 documents
        (this folder is for pdf, word, or wireframe docs)

    📁 images
        (all images used on the site go here)

    📁 js
        🗎 app.js

    🗎 index.html
```

The purpose of creating this folder structure is to organize the content of site. This would make it simpler when we have to create new pages and we need to make sure that everything is in the right place. Having the right site organization becomes more evident when we have to collaborate with other team members.

<p><br /><br /></p>

## Index page
The primary page on any website is the `index.html` page. If the page is named something different, most servers will not know how to find the content and display it on the page. Therefore, we must create a new file and call it `index.html`.
### Table of content
* [Doctype](#doctype)
* [HTML tag and language](#html-tag-and-language)
* [Head tag](#head-tag)
* [Body tag](#body-tag)
* [Important](#important)
* [HTML recommended reading](#html-recommended-reading)

<p><br /></p>

### Doctype
In HTML, the doctype is the required `<!doctype html>` preamble found at the top of all documents. Its sole purpose is to prevent a browser from switching into so-called "quirks mode" when rendering a document; that is, the `<!doctype html>` doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.

[Doctype - mdm web docs](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)

The first line in our `index.html` file will be:
```
<!doctype html>
```

<p><br /></p>

### HTML tag and language
The `<html>` tag represents the root of an HTML document. The `<html>` tag is the container for all other HTML elements (except for the `<!doctype>` tag). <br />[HTML <html> tag](https://www.w3schools.com/tags/tag_html.asp)

The lang global attribute helps define the language of an element: the language that non-editable elements are written in, or the language that the editable elements should be written in by the user. The attribute contains a single "language tag" in the format defined in [RFC 5646: Tags for Identifying Languages (also known as BCP 47)](https://datatracker.ietf.org/doc/html/rfc5646).<br />
[lang - mdm web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)

This is how our HTML file looks like after adding the `<html>` tag.
```
<!doctype html>
<html lang="en">
</html>
```

<p><br /></p>

### Head tag
The `<head>` HTML element contains machine-readable information ([metadata](https://developer.mozilla.org/en-US/docs/Glossary/Metadata)) about the document, like its [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title), [scripts](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script), and [style sheets](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style).<br />
[Head: The Document Metadata (Header) element - mdm web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)

#### Metadata
We are going to use the following tags in the creation of our document:
* **charset**<br />
This attribute declares the document's character encoding. If the attribute is present, its value must be an ASCII case-insensitive match for the string `"utf-8"`, because UTF-8 is the only valid encoding for HTML5 documents. `<meta>` elements which declare a character encoding must be located entirely within the first 1024 bytes of the document.<br />
`<meta charset="utf-8">`<br /><br />

* **viewport**<br />
The browser's viewport is the area of the window in which web content can be seen. This is often not the same size as the rendered page, in which case the browser provides scrollbars for the user to scroll around and access all the content.<br />
`<meta name="viewport" content="width=device-width, initial-scale=1">`<br /><br />
The basic properties of the "viewport" <meta> tag include:
    * `width` - controls the size of the viewport. It can be set to a specific number of pixels like `width=600` or to the special value `device-width`, which is `100vw`, or `100%` of the viewport width. Minimum: `1`. Maximum: `10000`. Negative values: ignored.
    * `initial-scale` - controls the zoom level when the page is first loaded. Minimum: `0.1`. Maximum: `10`. Default: `1`. Negative values: ignored<br /><br />

* **author** and **description**<br />
Specifying an author is beneficial in many ways: it is useful to be able to understand who wrote the page, if you have any questions about the content and you would like to contact them. Some content management systems have facilities to automatically extract page author information and make it available for such purposes.<br /><br />
Specifying a description that includes keywords relating to the content of your page is useful as it has the potential to make your page appear higher in relevant searches performed in search engines (such activities are termed Search Engine Optimization, or SEO.)<br />
`<meta name="description" content="Student Name - Student ID | HTML Template">`<br />
`<meta name="author" content="Student Name">`<br /><br />

* **title**<br />
The `<title>` HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored.<br />
There are more uses for the `<title>` tag. I would encourage you to [read this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title).<br />
`<title>Student Name - Student ID | Template</title>`<br /><br />

* **link**<br />
The `<link>` HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.<br /><br />
In our case we are going to link the stylesheet in the css folder we created earlier.<br />
`<link rel="stylesheet" href="css/style.css">`<br /><br />

This is how our HTML file looks like after adding the `<head>` tag and other related tags.
```
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Student Name - Student ID | HTML Template">
        <meta name="author" content="Student Name">

        <title>Student Name - Student ID | Template</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
</html>
```
<p><br /></p>

### Body tag
The `<body>` element. This contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, or whatever else.

This tag is included inside the `<html>` tag.

In our case we are also going to link the JavaScript file inside the `js` folder we created earlier.

I am also adding a `div` element inside of the page that will help us in the future know the page resolution, just to make it simpler to add styles to the site. ***This tag should be removed for your final project***

This is how our HTML file looks like after adding the `<body>` tag and other related tags.
```
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Student Name - Student ID | HTML Template">
        <meta name="author" content="Student Name">

        <title>Student Name - Student ID | Template</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>

        <div id="windowSize"></div>

        <script src="js/app.js"></script>
    </body>
</html>
```
<p><br /></p>

### Important
Please note that in the example above, as new tags are created we indent the page by tabbing once and kept the corresponding closing tag in the same line. In our class we are going to ensure that the organization of the code is correct, and also tabbing to avoid issues with missing a closing tag on the page. We will follow the same principles when working in our CSS and JavaScript files.
<p><br /></p>

### HTML recommended reading
* [HTML: HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

<p><br /><br /><br /></p>

## CSS
Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

CSS is among the core languages of the open web and is standardized across Web browsers according to [W3C specifications](https://www.w3.org/Style/CSS/#specs). Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now CSS without a version number.

<p><br /></p>

### Table of content
* [Document comments](#document-comments)
* [Document standardization](#document-standardization)
* [Extra CSS for our window sizer](#document-standardization)
* [Complete CSS](#complete-css)
* [CSS recommended reading](#css-recommended-reading)

<p><br /></p>

### Document comments
At the top of the document we are going to create a trail of comments that include:
* the name of the student
* the date the file was created
* the date when the file was last updated
* name of the project

This information will help us keep in mind when things are changing on the document.

It's your responsibility to keep this top section updated as assignments are turned in.

```
/*
    Created by: Student Name - Student ID
    Created on: Today's Date
    Updated on: Today's Date
    Project: Flexbox
*/
```

<p><br /></p>

### Document standardization
To ensure that our styles are applied the way we want them to be applied we are going to add a few lines of styles.

Please read the following documentation on:
* **`*`** - the *all* CSS selector - [read](https://www.w3schools.com/cssref/css_selectors.php)
* **box-sizing** - sets how the total width and height of an elementis calculated - [read](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
* **position** - sets how an element is position inside the document - [read](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
* **element selector** - how you select an actual HTML element in CSS - [read](https://www.w3schools.com/cssref/sel_element.php)
* **padding** - please make sure to read and understand what happens when providing one, two, three or four declarations inside that property - [read](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
* **margin** - please make sure to read and understand what happens when providing one, two, three or four declarations inside that property - [read](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
<br />

```
* {
    box-sizing: border-box;
    position: relative;
}

body {
    padding: 1rem;
    margin: 0;
}
```

<p><br /></p>

### Extra CSS for our window sizer
Please read the following documentation on:
* **background** - The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method. Component properties not set in the background shorthand property value declaration are set to their default values. - [read](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
* **color** - The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color. - [read](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
* **transform** - For the most part I wouldn't recommend using this, but if you'd like to learn more about it you can read it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).
* **user-select** - The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface, except in textboxes. - [read](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)
* **z-index** - The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one. - [read](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
<br />

```
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

<p><br /></p>

### Complete CSS
```
/*
    Created by: Student Name - Student ID
    Created on: Today's Date
    Updated on: Date the file was last updated
    Project: Project name
*/

* {
    box-sizing: border-box;
    position: relative;
}

body {
    padding: 1rem;
    margin: 0;
}

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

<p><br /></p>

### CSS recommended reading
* [CSS: Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Comments](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)

<p><br /><br /><br /></p>

## JavaScript
We will plug the following code inside the `app.js` file we created earlier. I'll explain what this code does towards the end of the semester.

I have added some comments that may help with your self-learning.
<br />
```
// Screen size snippet
const reportWindowSize = () => {
    // Get the width of the browser window
    const width = window.innerWidth;

    // Get the height of the browser window
    const height = window.innerHeight;

    // Write the values gathered above inside the div with an id of "windowSize"
    document.getElementById('windowSize').innerHTML = `${width}px by ${height}px`;
}

/* 
    * Ensure that the DOM is loaded before running
    * the functions inside
*/
document.addEventListener('DOMContentLoaded', () => {
    // Call the reportWindowSize upon page load
    reportWindowSize();

    // Call teh reportWindowSize if the browser window is resized
    window.onresize = reportWindowSize;
});
```