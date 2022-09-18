# Typography

Typography is one of the design elements that effects how the content of a website is perceived. In this lesson we are going to setup the type for our website.

I would encourage you to read on: [em v. rem](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/#:~:text=What%20Are%20rem%20Units%3F,a%20default%20value%20of%2016px.), [@import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import), [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) and pick a couple of fonts that you'd like to use from [Google Fonts](https://fonts.google.com/).

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