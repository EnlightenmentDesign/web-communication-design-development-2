# align-items
This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

```
    .parent {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: stretch;
    }
```

```
    .parent {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
    }
```

```
    .parent {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-end;
    }
```

```
    .parent {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
    }
```

```
    .parent {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: baseline;
    }
```

* stretch (default): stretch to fill the container (still respect min-width/max-width)
* flex-start / start / self-start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.
* flex-end / end / self-end: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.
* center: items are centered in the cross-axis
* baseline: items are aligned such as their baselines align

This section came from: [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)