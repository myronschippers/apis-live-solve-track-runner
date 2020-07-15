# React Track Runner

As a long-distance runner trains for the olympics, she wants to track her best run.

You are welcome to fork and clone this repository (don't forget to `npm install`) or start fresh with `create-react-app`.

## Base Requirements

Create an application that allow her to enter her most recent run. It should always update the most recent section, but if it's her longest run, it should also update that section as well.

![Base Requirements](images/base-requirements.gif)

A deployed version of this application in action can be found at: react-track-runner.netlify.com

## Stretch Goals

As the long-distance runner trains, she realizes that she would also like to know how fast she is going. Add another section for her fastest run that displays the fastest run based on miles per hour.

![Stretch Goals](images/stretch-goals.gif)

A deployed version of the application with stretch goals can be found at: react-runner-stretch.netlify.com

### Additional Stretch Goals

- Add styling to the application so that the three sections show up side-by-side instead of one under the other
- Move the Header into a component
- Don't allow submissions with empty text in one of the fields (throw an alert instead)
- Show an alert if distance or time is not greater than 0
- Show a congratulatory message to the runner above the inputs if they ran longer or faster than ever before
- Use props to merge all of the three running sections into a single, reusable component