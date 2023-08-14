# Branding
Branding is an essential part of any website.

“Broadly, a product is anything that can be offered to a market to satisfy a want or need, including physical goods, services, experiences, events, persons, places, properties, organizations, information, and ideas” (Kotler & Keller, 2015).

We are going to cover two different aspects of branding:
* Color Schemes
* Implementing the color scheme

## Color Schemes
For colors there's such a thing as the `60:30:10 Rule`. This rule defines that the primary color would be used in 60% of the website, the secondary color would be used 30% and the tertiary (accent color) would be used 10% of the website. We also have neutral colors and semantic colors. You can read more about color in this [Medium article](https://medium.com/@mansisanghani/ui-color-palette-knowing-the-terms-creating-them-146e568b1d10).

If you look inside the `style.css` file you can see that I already have added a set of colors on the `:root` selector.

```
:root {
    /* Grid */

    /* Branding */
    --primary: blue;
    --primary-hover: blue;
    --secondary: blue;
    --secondary-hover: blue;
    --tertiary: blue;
    --tertiary-hover: blue;
    --font-color: black;

    --gray-0: #222222;
    --gray-1: #666666;
    --gray-2: #999999;
    --gray-3: #dadada;

    --white: white;
}
```

I would encourage you to go to [color.adobe.com](https://color.adobe.com/create/color-wheel) to see how colors interact with each other. Please pick three colors for you to use. In my case I'm going to use:
* #EBA32A - primary
* #004C9E - secondary
* #2A87EB - tertiary

I'm now going to convert these colors to [hsl](https://htmlcolors.com/hex-to-hsl) and add an alpha channel for future use.
* hsla(38, 83%, 54%, 100%)
* hsla(211, 100%, 31%, 100%)
* hsla(211, 83%, 54%, 100%)

Now that we've made these conversions we can add them to our variables.
```
:root {
    /* Grid */

    /* Branding */
    --primary: hsla(38, 83%, 54%, 100%);
    --primary-hover: blue;
    --secondary: hsla(211, 100%, 31%, 100%);
    --secondary-hover: blue;
    --tertiary: hsla(211, 83%, 54%, 100%);
    --tertiary-hover: blue;
    --font-color: #1d1d1d;

    --gray-0: #222222;
    --gray-1: #666666;
    --gray-2: #999999;
    --gray-3: #dadada;

    --white: white;
}
```

Notice that we did not add the hover values. When we use `hsla` as our color of choice we can easily transform our colors so that they can be shades of the original color. Because HSL stands for (Hue, Saturation, Level), we can increase or decrease our Level values to keep it within the same color or even modify our Saturation if we want it to be brighter or darker.

This will be more experimentation on your behalf to see a color that you like. As long as your Hue does not change it will remain being the same color and keep congruence throughout the design.

In my case I've chosen the following:
```
:root {
    /* Grid */

    /* Branding */
    --primary: hsla(38, 83%, 54%, 100%);
    --primary-hover: hsla(38, 93%, 44%, 100%);
    --secondary: hsla(211, 100%, 31%, 100%);
    --secondary-hover: hsla(211, 90%, 21%, 100%);
    --tertiary: hsla(211, 83%, 54%, 100%);
    --tertiary-hover: hsla(211, 73%, 44%, 100%);
    --font-color: #1d1d1d;

    --gray-0: #222222;
    --gray-1: #666666;
    --gray-2: #999999;
    --gray-3: #dadada;

    --white: white;
}
```

## Implementation
Now that we have the color scheme in place, let's go ahead and start implementing it on our site.

### Buttons
One of the most obvious places where we see color used in in the elements we interact with inside our site. The most predominant is buttons.

Let's add the styles to make our buttons work.
```
/* Button Styles */
.btn {
    font-size: 1rem;
    line-height: var(--base-line-height);
    display: inline-block;
    overflow: hidden;
    padding: calc((1em / var(--base-scale)) / var(--base-scale)) calc(1em / var(--base-scale));
    background-color: var(--gray-1);
    text-decoration: none;
    color: var(--white);
    border: 0 none;
    cursor: pointer;
}

.btn:hover {
    background-color: var(--gray-0);
}
```

We can now see how our buttons are looking like with each other, they are no longer looking like links but actual buttons. We also added the `border: 0 none` declaration that will be useful when we actually use the `<button>` element.

In order to define a button as if it was a primary, secondary, tertiary, etc., we must give our buttons a class modifier.
* `.btn-primary`
* `.btn-secondary`
* `.btn-tertiary`

This way we can see that all the buttons have the same underlying style but only modified colors (or sizes if we wanted to).
```
.btn-primary {
    background-color: var(--primary);
}

.btn-primary:hover {
    background-color: var(--primary-hover);
}

.btn-secondary {
    background-color: var(--secondary);
}

.btn-secondary:hover {
    background-color: var(--secondary-hover);
}

.btn-tertiary {
    background-color: var(--tertiary);
}

.btn-tertiary:hover {
    background-color: var(--tertiary-hover);
}
```

Another thing that we can do to style our buttons is to change their sizes.
```
.btn-sm {
    font-size: calc(1em / var(--base-scale));
}

.btn-lg {
    font-size: var(--h3-font-size);
}
```
The reason why the above works and how the padding of the element changes alongside the button itself is because we defined in our `.btn` class that our padding uses `em` rather than `rem` as its reference. So, if the button changes in size, then the padding will be responsive as well.

Another thing we can do with our button is to make it span the full width its parent. This would require creating a new class and updating the current *display* value to `display: block;` and more than likely also making it center aligned. *I would encourage you to try this on your own*

#### Practice
With this information we can now in turn create buttons that have the same structure, different colors, and different sizes.

Try in your html the following HTML elements:
```
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <a href="#" class="btn btn-primary">Primary button regular size</a>
            <a href="#" class="btn btn-primary btn-sm">Primary button small size</a>
            <a href="#" class="btn btn-primary btn-lg">Primary button large size</a>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <a href="#" class="btn btn-secondary">Secondary button regular size</a>
            <a href="#" class="btn btn-secondary btn-sm">Secondary button small size</a>
            <a href="#" class="btn btn-secondary btn-lg">Secondary button large size</a>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <a href="#" class="btn btn-tertiary">Tertiary button regular size</a>
            <a href="#" class="btn btn-tertiary btn-sm">Tertiary button small size</a>
            <a href="#" class="btn btn-tertiary btn-lg">Tertiary button large size</a>
        </div>
    </div>
</div>
```

#### Final Solution for Buttons
```
:root {
    /* Grid */

    /* Branding */
    --primary: hsla(38, 83%, 54%, 100%);
    --primary-hover: hsla(38, 93%, 44%, 100%);
    --secondary: hsla(211, 100%, 31%, 100%);
    --secondary-hover: hsla(211, 90%, 21%, 100%);
    --tertiary: hsla(211, 83%, 54%, 100%);
    --tertiary-hover: hsla(211, 73%, 44%, 100%);
    --font-color: #1d1d1d;

    --gray-0: #222222;
    --gray-1: #666666;
    --gray-2: #999999;
    --gray-3: #dadada;

    --white: white;
}

/* Button Styles */
.btn {
    font-size: 1rem;
    line-height: var(--base-line-height);
    display: inline-block;
    overflow: hidden;
    padding: calc((1em / var(--base-scale)) / var(--base-scale)) calc(1em / var(--base-scale));
    background-color: var(--gray-1);
    text-decoration: none;
    color: var(--white);
    border: 0 none;
    cursor: pointer;
}

.btn:hover {
    background-color: var(--gray-0);
}

/* Button colors */
.btn-primary {
    background-color: var(--primary);
}

.btn-primary:hover {
    background-color: var(--primary-hover);
}

.btn-secondary {
    background-color: var(--secondary);
}

.btn-secondary:hover {
    background-color: var(--secondary-hover);
}

.btn-tertiary {
    background-color: var(--tertiary);
}

.btn-tertiary:hover {
    background-color: var(--tertiary-hover);
}

/* Button sizes */
.btn-sm {
    font-size: calc(1em / var(--base-scale));
}

.btn-lg {
    font-size: var(--h3-font-size);
}
```

### Typography
I would also encourage you to add some color to your typography. For example, you can make the Heading 1 to use the primary color, Heading 2 can use the secondary color. Don't forget to update also the default color font for the site to use `var(--font-color)` instead of black.

### Forms
Here is the final solution for form elements
```
:root {
    /* Branding */
    ...
    --secondary-blurred: hsla(211, 100%, 31%, 100%);
    ...
}

/* Forms */
fieldset {
    padding: var(--base-line-height);
    border: 1px solid var(--primary);
    margin-bottom: var(--base-line-height);
}

fieldset legend {
    color: var(--primary);
}

.form-group {
    margin-bottom: var(--base-line-height);
}

fieldset .form-group:last-of-type {
    margin-bottom: 0;
}

.form-group label {
    font-weight: bold;
}

.form-control,
.form-check-input {
    accent-color: var(--secondary);
}

input,
select,
textarea {
    font-family: inherit;
    font-size: 1rem;
    line-height: var(--base-line-height);
    padding: calc((1em / var(--base-scale)) / var(--base-scale) / var(--base-scale)) calc(1em / var(--base-scale) / var(--base-scale));
    border: 1px solid var(--gray-0);
    color: var(--font-color);
}

input.form-control {
    width: 100%;
    max-width: 100%;
}

textarea {
    width: 100%;
    max-width: 100%;
    min-height: calc(4 * var(--base-line-height));
}

/* Pseudo Selectors */
.form-control:focus {
    outline: var(--secondary-blurred) solid 2px;
    outline-offset: 2px;
}

.form-check-input:checked {
    box-shadow: 0 0 4px 4px var(--secondary-blurred);
}

.form-control:disabled,
.form-control:hover:disabled,
input:disabled,
input:hover:disabled {
    background-color: var(--gray-3);
    color: var(--gray-2);
    cursor: not-allowed;
}

input:invalid,
input:focus:invalid {
    border-color: red;
    box-shadow: 0 0 2px red;
    outline: red solid 2px;
    outline-offset: 2px;
}
```

#### Testing your branding with a sample form
```
<div class="container">
    <form method="post" action="registration.php" name="registration">
        <fieldset>
            <legend>Demographics</legend>
            <div class="form-group row">
                <label for="firstName" class="col-sm-4 col-form-label">First Name:</label>
                <div class="col-sm-8">
                    <input type="text" name="firstName" id="firstName" class="form-control" required />
                </div>
            </div>
            <div class="form-group row">
                <label for="lastName" class="col-sm-4 col-form-label">Last Name:</label>
                <div class="col-sm-8">
                    <input type="text" name="lastName" id="lastName" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-sm-4 col-form-label">Email:</label>
                <div class="col-sm-8">
                    <input type="email" name="email" id="email" class="form-control" placeholder="user@domain.com" />
                </div>
            </div>
        </fieldset>
        <input type="submit" name="submit" id="submit" value="Submit" class="btn btn-primary" />
        <input type="reset" name="reset" id="reset" value="Reset" class="btn btn-tertiary" disabled />
    </form>
</div>
```