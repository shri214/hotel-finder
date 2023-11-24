## Built with React Typescript
## State management library [Legend State](https://legendapp.com/open-source/)

To run the app use 
### npm start

## File Structure details
    network/
    ---- endpoints.ts -> will have the endpoint management
    ---- request.ts -> will manage the network request
    global-state /
    ---- global-state1.ts -> this will hold the global state management of project
    scss/
    ----- colors.scss -> will have the colors of the application 
    constants.ts -> all global constants
    src/
    ---- feature1/
    ---------components /  -> all dumb components related to feature1 only
    ---------------dumbComponent1.tsx -> name every component with camelcase notation
    ---------------dumb-component1.scss -> name all the scss files seperated with `-` between the words.
    ---------legend-component /
    ---------------legendComponent1.tsx --> components which are registered with `observer` method.
    ---- constants.ts -> all constants related `feature1` should go in this file.
    ---- subfeature-types.ts -> this will hold the custom type declarations of `feature1`
    ---- subfeature-state.ts -> this will have all state management and business logic of a particular sub-feature

