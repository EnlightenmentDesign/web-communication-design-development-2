# Navigation
All websites have a navigation. The purpose of the navigation is to help the user better find the content they are looking for in our website. There are two different ways to organize a navigation:
* function
* topic

The organization of your navigation would be based on the need for the website, end-user, etc.

To create our navigation we are going to start with our basic HTML structure.

## Markup
```
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-12">
            <nav class="navbar">
                <a class="navbar-brand" href="index.html">Navbar</a>
                <button class="navbar-toggler" type="button" data-target="#navigation">
                    <span class="fa-solid fa-bars"></span>
                </button>

                <div class="navigation collapse" id="navigation">
                    <ul class="navbar-nav">
                        <li class="active">
                            <a href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                        <li class="dropdown collapse">
                            <a class="dropdown-toggle" href="#">Dropdown</a>
                            <div class="dropdown-menu">
                                <a href="#">Action</a>
                                <a href="#">Another action</a>
                                <a href="#">Something else here</a>
                            </div>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
```

Please notice a few things on the HTML. We are using our `grid system` to create the wrapper around our navigationitself. We also have the following elements:
* `<nav>` [read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
* brand for our site
* `<button>` that allows us to open and close the mobile navigation
* the navigation itself inside of a `<div>` element and that inside a `<ul>` element
* a dropdown section as well
* a screen reader only element `sr-only` [read more](https://a11y-guidelines.orange.com/en/web/components-examples/accessible-hiding/)

You can see the elements represented below on the next section inside our CSS.

## Initial CSS Declarations
```
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css');

/* Navigation Styles */
.navbar {}
.navbar-brand {}
.navbar-toggler {}
.navigation {}
.navbar-nav {}
.navbar-nav li {}
.navbar-nav li.active {}
.dropdown-toggle {}
.dropdown-menu {}
.sr-only {}
/* End of Navigation Styles */
```

Please note that we are importing a new CSS library called [Font Awesome](https://fontawesome.com/icons) by using the `@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css');`. The purpose of this library is to take away the need to create `png`, `svg` or `jpeg` for icons that are commonly used on websites such as the hamburger menu, or social media icons. I would encourage you to look at [Font Awesome](https://fontawesome.com/icons) to learn more and prepare for the footer design classes.

Because we work from mobile to desktop, we are going to start adding styles to our mobile screensize.

## Styles for Navigation (Mobile)
```
/* Navigation Styles */
.navbar {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;
}

.navbar-brand {
    display: block;
    overflow: hidden;
    background: url(../images/logo.svg) no-repeat center/contain transparent;
    width: 10rem;
    height: 4rem;
    text-indent: -9999px;
    text-decoration: none;
}

.navbar-toggler {
    background-color: var(--primary);
    border: 0 none;
    color: white;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.navigation {
    flex: 0 0 100%;
}

.navbar-nav {
    list-style-type: none;
    padding: 0;
}

.navbar-nav li > a {
    color: var(--primary);
    display: block;
    overflow: hidden;
    padding: calc((1em / var(--base-scale)) / var(--base-scale)) calc(1em / var(--base-scale));
    text-decoration: none;
    border-bottom: 2px solid transparent;
}

.navbar-nav li.active > a {
    border-bottom-color: var(--primary);
}

.navbar-nav li > a:hover {
    background-color: var(--primary);
    color: var(--white);
}

.dropdown-toggle::after {
    content: "\f0d8";
    font-family: "FontAwesome";
    font-weight: 400;
    margin-left: var(--base-line-height);
}

.collapse .dropdown-toggle::after {
    content: "\f0d7";
}

.dropdown-menu {
    background-color: var(--gray-2);
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    /* This fixes the issue with the menu not being clickable when you expand it on desktop */
    z-index: 1;
}

.dropdown-menu > a {
    flex: 1 0 100%;
    color: var(--white);
    padding: calc((1em / var(--base-scale)) / var(--base-scale)) calc(1em / var(--base-scale));
    text-decoration: none;
}

.dropdown-menu > a:hover {
    background-color: var(--gray-1);
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
}
/* End of Navigation Styles */
```

Then we are going to move to our Desktop styles by using the media breakpoint of `min-width: 768px`.

## Styles for Navigation (Destkop)
```
@media screen and (min-width: 768px){
    .navbar-toggler {
        display: none;
    }

    .navigation {
        flex: 0 0 auto;
    }

    .navbar-nav {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        align-items: baseline;
        align-content: center;
    }

    .dropdown-menu {
        position: absolute;
    }
}
```

With this in place we can see that now the mobile menu and the dropdown menu are still remaining open.

The best way to solve this is to add JavaScript that would then allow us to click on a specific button such as the `navbar-toggler` or the `dropdown-toggler` to open their corresponding elements.

Please add the following script to the top of the `app.js` file.

## JavaScript
```
/*
 * Navigation Interactions
 * Toggle the mobile icon to show and hide the main navigation
 * Toggle the dropdown button to show and hide the dropdown content
*/
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggler = document.querySelector('.navbar-toggler');
    const navigation = document.querySelector(mobileToggler.getAttribute('data-target'));

    let dropdownToggle = document.querySelectorAll('.dropdown-toggle');
    
    mobileToggler.addEventListener('click', () => navigation.classList.toggle('collapse'))

    dropdownToggle.forEach((dropdown) => {
        dropdown.addEventListener('click', (toggler) => {
            let dropdownElement = dropdown.parentElement;
            dropdownElement.classList.toggle('collapse');
        })
    })
});
```

During the JavaScripts classes I will be explaining more in-depth what I did to make this navigation work. For right now we can use the the script as it stands.

Please be aware that for the `navbar-toggler` there's a property called `data-target` and that has a value of `#navigation` which makes a reference to the `id` of the navigation itself.

If you were to inspect the navigation HTML you will notice that by clicking on the toggles a class of `collapse` is added or removed automatically.

Let's add some styles to make then the navigation behave as intended.

## Action styles
```
.navigation.collapse .navbar-nav {
    display: none;
}

.dropdown.collapse .dropdown-menu {
    display: none;
}
```

If you try to click on the elements it should be working as intended now. However, we need to make one more update.

Click on the `navbar-toggler` until the mobile navigation is hidden. Then switch to a desktop view or your browser be greater than 768px. You will notice that the navigation is now gone. We need to fix by adding an extra selector in our media query. We are going to modify the `.navbar-nav` selector and add a secondary selector for `.navigation.collapse .navbar-nav`, it will end up looking like this:

## Fix desktop nav
```
.navigation.collapse .navbar-nav,
.navbar-nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: baseline;
    align-content: center;
}
```


## Full CSS
```
/* Navigation Styles */
.navbar {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;
}

.navbar-brand {
    display: block;
    overflow: hidden;
    background: url(../images/logo.svg) no-repeat center/contain transparent;
    width: 10rem;
    height: 4rem;
    text-indent: -9999px;
    text-decoration: none;
}

.navbar-toggler {
    background-color: var(--primary);
    border: 0 none;
    color: white;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.navigation {
    flex: 0 0 100%;
}

.navigation.collapse .navbar-nav {
    display: none;
}

.navbar-nav {
    list-style-type: none;
    padding: 0;
}

.navbar-nav li > a {
    color: var(--primary);
    display: block;
    overflow: hidden;
    padding: calc((1em / var(--base-scale)) / var(--base-scale)) calc(1em / var(--base-scale));
    text-decoration: none;
    border-bottom: 2px solid transparent;
}

.navbar-nav li.active > a {
    border-bottom-color: var(--primary);
}

.navbar-nav li > a:hover {
    background-color: var(--primary);
    color: var(--white);
}

.dropdown-toggle::after {
    content: "\f0d8";
    font-family: "FontAwesome";
    font-weight: 400;
    margin-left: var(--base-line-height);
}

.collapse .dropdown-toggle::after {
    content: "\f0d7";
}

.dropdown.collapse .dropdown-menu {
    display: none;
}

.dropdown-menu {
    background-color: var(--gray-2);
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    z-index: 1;
}

.dropdown-menu > a {
    flex: 1 0 100%;
    color: var(--white);
    padding: calc((1em / var(--base-scale)) / var(--base-scale)) calc(1em / var(--base-scale));
    text-decoration: none;
}

.dropdown-menu > a:hover {
    background-color: var(--gray-1);
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
}

@media screen and (min-width: 768px){
    .navbar-toggler {
        display: none;
    }

    .navigation {
        flex: 0 0 auto;
    }

    .navigation.collapse .navbar-nav,
    .navbar-nav {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        align-items: baseline;
        align-content: center;
    }

    .dropdown-menu {
        position: absolute;
    }
}
/* End of Navigation Styles */
```
