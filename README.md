# Underground timetable for Great Portland Street

## Installation
- Git clone the repo
- Install the dependencies via `yarn install`
- Start the repo via `yarn start`

## Stack
- React and Typescript
- React Testing Library (TODO)

## Strategy

1. Fetch the id for Great Portland Street on page mount
- This could be hardcoded into the app as it only needs to work for this station, but I want to make it dynamic.

2. Use the id to fetch all arrival times for Great Portland Street
- This should fetch an array from the api which we can stylise and display.
- Should make this work for both mobile and desktop. (TODO)

3. Add a refresh button to fetch the latest times. (TODO)
- This would be easiest method though not the best in terms of user experience.

4. Have the site auto refresh using sockets (TODO)

## Resources
- https://api-portal.tfl.gov.uk/apis
- https://blog.tfl.gov.uk/2015/10/01/tfl-unified-api-part-1-introduction/
- https://blog.tfl.gov.uk/2015/12/07/unified-api-part-5-aot-arrivals-of-things/
