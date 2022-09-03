# Underground timetable for Great Portland Street

## Stack
- React and Typescript
- React Testing Library

## Strategy

1. Fetch the id for Great Portland Street on page mount
- This could be hardcoded into the app as it only needs to work for this station, but I want to make it dynamic.

2. Use the id to fetch all arrival times for Great Portland Street
- This should fetch an array from the api which we can stylise and display.
- Should make this work for both mobile and desktop.

3. Add a refresh button to fetch the latest times.
- This would be easiest method though not the best in terms of user experience.
