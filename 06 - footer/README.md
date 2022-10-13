# Footer

## HTML Structure
In order to create a structure for our footer we are going to use the `footer` HTML element to define that section, but inside of it we are going to use our `Grid System` structure.

The initial structure is going to be focused on mobile first, and then we are going to start adding other classes to our columns to arrange them correctly for our tablet and desktop views.

We are also using other styles that we created earlier for example:
* `unstyled` in typography
* `inline` in typography
* Form structure and styles in Branding
* etc.

We are also adding extra class modifiers to our links on the footer to be able to style it in the future.

### Combined Mobile, Tablet and Desktop views
```
<footer>
    <div class="container company-details">
        <div class="row">
            <div class="col-md-9 col-lg-4">
                <h3>CTEC 3350-001</h3>
                <p>Suspendisse quis ullamcorper leo, efficitur tempor velit. Cras eleifend nisi sit amet ipsum lacinia, in condimentum augue laoreet. Suspendisse potenti. Donec hendrerit vestibulum diam sed tincidunt. Sed metus elit, efficitur eget pulvinar nec, mollis vel lectus. Phasellus quis velit a enim malesuada luctus congue et justo. Nullam eros turpis,rutrum ac augue eget, viverra efficitur lacus</p>
            </div>
            <div class="col-md-3 col-lg-2">
                <h4>Menu</h4>
                <ul class="unstyled footer-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Get In Touch</a></li>
                </ul>
            </div>
            <div class="col-md-12 col-lg-6">
                <h4>Join Our Mailing List</h4>
                <form>
                    <div class="form-group row">
                        <label for="subscribe" class="col-sm-12 col-form-label">Enter your email address:</label>
                        <div class="col-sm-12">
                            <input type="email" name="subscribe" id="subscribe" class="form-control" />
                        </div>
                    </div>
                    <input class="btn btn-secondary" type="submit" name="submit" id="submit" value="Submit" />
                </form>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <p>&copy; 1995 Mockup. All Rights Reserved. Student Name | Student ID</p>
                </div>
                <div class="col-md-4">
                    <ul class="inline social-media">
                        <li><a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#" target="_blank"><i class="fa-solid fa-phone"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
```

## Styles
Because most of our styles are built from what we have previously defined, we are going to start overriding specific elements inside our CSS to make them look a bit nicer for our footer.

Please notice that we are just overriding what we need to change, rather than re-declaring all our styles.

```
::root {
    ...
    --gray-4: #efefef;
    ...
}

/* Footer Styles */
footer {
    margin-top: 3rem;
    font-size: calc(1rem / var(--base-scale));
    background-color: var(--gray-3);
}

footer h3,
footer h4 {
    margin-bottom: calc(1rem / var(--base-scale));
}

footer .footer-nav {
    margin: 0;
}

footer .footer-nav a {
    display: block;
    overflow: hidden;
    padding: calc((1em / var(--base-scale)) / var(--base-scale) / var(--base-scale)) calc(1em / var(--base-scale) / var(--base-scale));
    color: var(--primary);
    text-decoration: none;
    border-bottom: 2px solid transparent;
}

footer .footer-nav a:hover {
    color: var(--primary-hover);
    border-bottom-color: var(--primary-hover);
}

footer .form-group label {
    margin-top: 0;
}

footer .copyright {
    background-color: var(--gray-4);
    text-align: center;
    padding-bottom: 1rem;
}

footer p,
footer .social-media {
    margin: 0;
    max-width: 100%;
    width: 100%;
}

footer .social-media {
    justify-content: center;
}

footer .social-media a {
    display: block;
    overflow: hidden;
    color: var(--primary);
}

@media screen and (min-width: 768px){
    footer .copyright {
        text-align: unset;
    }

    footer .social-media {
        justify-content: flex-end;
    }
}
/* End of Footer Styles */
```
