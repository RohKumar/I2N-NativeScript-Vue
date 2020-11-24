<template>
  <Page androidStatusBarBackground="#474747">
    <ActionBar title="Realtime  Location"/>
    <StackLayout>
      <WrapLayout  horizontalAlignment="center">
        <Button class="options" @tap="getDirections">Get Directions</Button>
        <Button class="options" @tap="clearRoute">Clear Route</Button>
        <Button class="options" @tap="startJourney">Start Journey</Button>
        <Button class="options" @tap="endJourney">End Journey</Button>
      </WrapLayout>

      
        <MapView
          width="100%"
          height="75%"
          dock="top"
          :zoom="zoom"
          :latitude="origin.latitude"
          :longitude="origin.longitude"
          v-if="allowExecution"
          @mapReady="mapReady"
          @coordinateLongPress="locationSelected"
        />
        <TextView class="details" dock="bottom" :text="journeyDetails" editable="false"/>
      
    </StackLayout>
  </Page>
</template>
<script>
/* necessary imports */
import * as permissions from 'nativescript-permissions';
import * as platform from 'platform';
import MapsHelper from "../MapsHelper";

export default {
  data() {
      /* returning data specific to the template part and permissions */
      return {
      origin: { latitude: 0, longitude: 0 },
      destination: { latitude: -37.81809309726681, longitude: 144.96706179833646 },
      journeyDetails: "Journey: Not started yet!",
      allowExecution: false,
      journeyStarted: false,
      mapView: null,
      zoom: 17,
      APIKEY: "AIzaSyD6OLAPMw3oymKhym1fDfdpxGLfrDNDjcs"
    }
  },
  created: function() {
    /* popping up location access dialog for android */
    if (platform.isIOS) {
    this.allowExecution = true;
    return;
  }
  /* list of permissions needed */
  let permissionsNeeded = [
    android.Manifest.permission.ACCESS_FINE_LOCATION,
    android.Manifest.permission.ACCESS_COARSE_LOCATION
  ];
  /* showing up permissions dialog */
  permissions
    .requestPermissions(permissionsNeeded, "Give it to me!")
    .then(() => this.allowExecution = true)
    .catch(() => this.allowExecution = false);
  },
  methods: {
    /* defining 6 methods used as event handlers in our template */
    mapReady(args) {
      /* get the mapView instance */
      this.mapView = args.object;

      /* ios map center bug fix 
      setTimeout(() => {
        this.mapView.height = {
          unit: this.mapView.height.unit,
          value: this.mapView.height.value + 0.0004
        };
      }, 100); */

      /* turn on my location button on map */
      this.enableMyLocationButton(true);
      /* add destination marker to map */
      this.addMarkerToMap(this.destinationMarker, true);
      /* add my location marker to map (which will point to our location when journey starts) - visibility hidden  */
      this.addMarkerToMap(this.myLocationMarker, false);
      /* set map origin coordinates to present device location */
      this.fetchMyLocation();
    },
    locationSelected(args) {
      /* get coordinates of the point where user long pressed */
      let lat = args.position.latitude;
      let lng = args.position.longitude;
      /* set the obtained coordinates as destination coordinates */
      this.destination.latitude = lat;
      this.destination.longitude = lng;
      /* move the destination marker to the same coordinates */
      this.setMarker(this.destinationMarker, lat, lng);
    },
    getDirections() {
       
      /* hit Directions API - as origin and destination coordinates are set */
      this.hitDirectionsAPI().then(response => {
        /* draw route from encoded polyline points */
        this.drawRoute(response.encodedPolylinePoints);
        
        /* if jouney started, don't adjust the camera */
        if (this.journeyStarted)
          return;

        /* adjust camera to bring route into view */
          this.getRouteInView(
            response.northEastBounds,
            response.southWestBounds
          );
      });
    },
    clearRoute() {
      /* remove route drawn between locations on map */
      this.mapView.removeAllPolylines();
    },
    startJourney() {
      /* hide my location indicator and button */
      this.enableMyLocationButton(false);
      /* un-hide my location marker */
      this.myLocationMarker.visible = true;
      /* update journey details */
      this.journeyStarted = true;
      this.journeyDetails = "Journey started...";
      /* start watching for location changes and update the map and journey details accordingly */
      this.watchLocationAndUpdateJourney();
    },
    endJourney() {
      /* stop watching for location changes */
      this.clearWatch();
      /* remove the route drawn on map */
      this.clearRoute();
      /* hide my location marker  */
      this.myLocationMarker.visible = false;
      /* bring back my location button on screen */
      this.enableMyLocationButton(true);
      /* update journey details */
      this.journeyStarted = false;
      this.journeyDetails = "Destination Reached.";
    }
  },
  mixins: [
    MapsHelper.MapsUIHelper, MapsHelper.DirectionsAPIHelper, MapsHelper.DistanceMatrixAPIHelper, MapsHelper.LocationHelper
  ]
};
</script>

<style>
.options {
  font-size: 9;
  background-color: #474747;
  color:white;
  width:25%;
}

.details {
  border-bottom-color: transparent;
  color:white;
  border-bottom-width: 1;
  padding: 15;
}
</style>