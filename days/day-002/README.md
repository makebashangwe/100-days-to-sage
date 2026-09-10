# Day 002 — Tue Sep 8 — Make a Tiny Interactive Page

## Objective

Build a one-page Keba Builder Console that uses HTML, CSS, and JavaScript to respond to user interactions and visibly update the interface.

## Learn

* How HTML provides the structure of a webpage.
* How CSS classes control visual states.
* How JavaScript selects HTML elements using `document.getElementById()`.
* How `addEventListener()` responds to button clicks.
* How `textContent` updates visible information in the DOM.
* How `classList.add()` and `classList.remove()` switch between mutually exclusive interface states.
* How `parseInt()` converts displayed text into a number before performing arithmetic.

## Build

Created a functional Keba Builder Console with three buttons:

### Start

* Changes the displayed status from `Idle...` to `Building...`.
* Removes the idle-mode class.
* Adds the start-mode class.
* Changes the page background to green.

### Idle

* Changes the displayed status to `Idle...`.
* Removes the start-mode class.
* Adds the idle-mode class.
* Changes the page background to red.

### Count

* Reads the current completed-build count.
* Converts the displayed text into an integer.
* Adds one to the count.
* Updates the displayed result.

## Test

Reloaded the page from scratch and tested the following sequence:

1. Clicked Start and confirmed the status changed to `Building...`.
2. Confirmed the page entered the green start mode.
3. Clicked Idle and confirmed the status changed to `Idle...`.
4. Confirmed the page entered the red idle mode.
5. Clicked Count repeatedly and confirmed the number increased by one each time.
6. Switched between Start and Idle multiple times to confirm that the CSS classes did not conflict.
7. Checked the browser console for errors.

## Debugging Notes

I initially used `classList.toggle()` independently for both modes. This allowed `start-mode` and `idle-mode` to exist on the body simultaneously, causing the CSS rules to compete.

I fixed this by explicitly removing the previous state before adding the new state:

* Start removes `idle-mode` before adding `start-mode`.
* Idle removes `start-mode` before adding `idle-mode`.

I also accidentally wrote `document.body.remove("idle-mode")` while debugging. This removed the entire body element—and therefore the whole visible page—from the DOM.

The corrected method was `document.body.classList.remove("idle-mode")`. This taught me that:

* `element.remove()` removes an HTML element from the DOM.
* `element.classList.remove()` removes only a named CSS class from that element.

## Proof

* Working HTML, CSS, and JavaScript files.
* Screenshots showing the console in different states.
* Successful Git commit and GitHub upload.
* Repository: [100 Days to Sage](https://github.com/makebashangwe/100-days-to-sage)

## Reflection

The hardest part was translating the general instruction “make an interactive page” into specific interface elements and behaviors. Once the page was divided into a status display, buttons, and a build counter, the implementation became easier to understand.

I learned that the element receiving a CSS class determines which part of the interface changes. I also learned that named application states are more predictable when I explicitly add and remove classes instead of toggling multiple competing classes.

The page is intentionally simple and visually rough, but it is functional, testable, and explainable.

*Cleaned Up with ChatGPT, Written by Keeb...*