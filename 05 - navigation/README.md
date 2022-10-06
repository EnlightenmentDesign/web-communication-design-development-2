# Navigation

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

## Action styles
```
.navigation.collapse .navbar-nav {
    display: none;
}

.dropdown.collapse .dropdown-menu {
    display: none;
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