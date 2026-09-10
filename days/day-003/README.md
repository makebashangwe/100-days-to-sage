# Day 003 — JavaScript State and Rendering

## Goal

Learn how variables, arrays, and objects can hold application state and how the page can be rendered from that data.

## What I Built

I expanded the Keba Builder Console by adding a milestone tracker.

The application stores milestones in a JavaScript array instead of hardcoding them into the HTML. Each milestone is represented by an object containing:

- `name` — the milestone title
- `completed` — whether the milestone is complete

The page renders the milestones from the array and displays:

- `✓` for completed milestones
- `○` for incomplete milestones

Users can also add a new milestone, select its completion status, and remove an existing milestone by entering its title.

## What I Learned

- How to store related information in JavaScript objects
- How to store multiple objects inside an array
- How application data represents the current state
- How to loop through an array with `forEach()`
- How to create HTML elements with JavaScript
- How to update the DOM from application state
- How `push()` adds an array item
- How `findIndex()` locates an array item
- How `splice()` removes an array item
- How to validate input before changing state
- Why the interface must be rendered again after state changes

## State and Rendering Flow

1. The `milestones` array stores the current milestone data.
2. `renderMilestones()` clears the displayed list.
3. The function loops through the array.
4. A new `<li>` element is created for each milestone.
5. Adding or removing a milestone changes the array.
6. Calling `renderMilestones()` updates the interface.

## Testing

I verified that:

- The original milestones render when the page loads.
- A completed milestone can be added and displays a check mark.
- An incomplete milestone can be added and displays an empty circle.
- A milestone can be removed by its exact title.
- Adding an empty milestone is prevented.
- Removing a nonexistent milestone does not crash the application.
- The Start, Idle, and Count buttons still work.
- The page runs without console errors.

## Proof
![alt text](<Screenshot 2026-09-10 024404.png>)
![alt text](<Screenshot 2026-09-10 024441.png>)
![alt text](<Screenshot 2026-09-10 024426.png>)
![alt text](<Screenshot 2026-09-10 024448.png>)
![alt text](<Screenshot 2026-09-10 024508.png>)

## Reflection

The most important lesson from Day 003 was understanding that the displayed milestone list and the JavaScript array are different things. The array holds the application state, while `renderMilestones()` translates that state into elements that the user can see.

The add and remove features change the array first and then render the updated array. This helped me understand the basic state-to-interface pattern used by larger frontend applications.