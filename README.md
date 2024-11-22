# Location App

This app uses a [Mapbox](https://www.mapbox.com/) map. By clicking on the map the user can add locations to it, which will be indicated by different icons.

# Project Setup

Create a `.env.local` with the variable `VITE_MAPBOX_KEY`. Sign into Mapbox and create a free authorization key and add it as a value to this variable. 

# Project Structure

- /components: Stores all React components.
- /data: JSON with initial locations to be stored in the local storage after initial App load
- /helpers: Global helper methods for mapbox, permissions or access to the local storage
- /pages: Stores page components (in this case only the homepage)
- /provider: state management source. It will create all methods and hooks needed to enable map interaction as well as drawing of the markers

## Mapbox Provider
The MapboxProvider component sets up and manages the Mapbox map instance and handles location-related interactions, including displaying markers and filtering locations.

### Provider Structure
The MapboxProvider component provides state and context values to enable seamless interaction with the map across the application. It uses the Mapbox API to render the map, markers, and cluster data and handle events like map clicks and marker clicks.

### Key Functionalities
1. Marker Initialization and Click Handling:

Markers are dynamically created based on filtered locations and are updated with the map's state.
When a marker is clicked, the map centers on the clicked marker, and a temporary marker is created at that location. The clickedMarker state stores the selected marker's data, which can be utilized elsewhere in the app.

2. Filtering Locations:

Users can filter locations by type (e.g., restaurant, touristic, custom, public facility, event venue). Only locations matching the selected types are displayed on the map.
Dynamic Loading of Icons:

Custom icons are loaded for each location type when the map is initialized. This enhances the user experience by showing distinct icons based on location types.

3. Cluster and Non-clustered Marker Management:

The provider uses Mapbox's clustering capabilities to manage large sets of locations efficiently. It defines different cluster layers and dynamically creates HTML markers for non-clustered locations.
It updates markers continuously based on visible features within the map's viewport, ensuring optimal performance.
Mapbox Event Listeners:

A click event listener on the map fetches the address of the clicked coordinates and stores it in clickedLocation. This makes it easy to provide the user with detailed information about any location.

### Primary State and Variables
`mapRef` and `markerRef`: Refs to the Mapbox map and the temporary clicked marker.

`locations`: Stores all locations retrieved from local storage, filtered by active filters.

`activeFilters`: Tracks the selected filters to display only relevant locations.

`isLoading`: Indicates when the map or data is loading.

`clickedMarker` and `clickedLocation`: Store details of the marker or location the user clicked.

### Helper Functions
`setupMap()`: Main function to initialize the Mapbox map. It handles map loading, location fetching, and layer/marker setup.

`filterLocationsByActiveFilters()`: Filters all locations based on selected filters.

`initMarkers()`: Manages marker updates on the map as the viewport changes or filters are updated.

## Usage
The MapboxProvider is wrapped around the application in the main component, enabling access to map-related data and functions in any component that subscribes to the MapboxContext. The `useMapbox` hook can be used in a component to use the features of the provider.


# Dependencies

This project runs under Ionic with React 18 and mapbox 3.7.0. 


## Running this project

```bash
yarn install
npm run dev
```
