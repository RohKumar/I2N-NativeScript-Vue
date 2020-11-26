<template>
  <Page androidStatusBarBackground="#474747">
    <ActionBar title="Realtime  Location"/>
    <StackLayout>
      <SearchBar hint="What are you looking for?" v-model="searchPhrase" @submit="onSubmit" textFieldHintColor="gray" marginTop="20" />
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
import RestaurantDetailsService from "../../services/restaurantDetails.service";
const ResDetailService = new RestaurantDetailsService();

export default {
  data() {
      /* returning data specific to the template part and permissions */
      return {
      origin: { latitude: 0, longitude: 0 },
      destination: { latitude: -37.797114, longitude: 144.877142 },
      journeyDetails: "Journey: Not started yet!",
      allowExecution: false,
      journeyStarted: false,
      mapView: null,
      zoom: 17,
      APIKEY: "AIzaSyD6OLAPMw3oymKhym1fDfdpxGLfrDNDjcs",
      searchPhrase: '',
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
    getRestaurantAddress(){

      
      ResDetailService.getAllRestaurantDetails().then((response) => {
                console.log(response.content.toJSON().message);

                const restaurantAddresses=response.content.toJSON().payload;
                let tempList = restaurantAddresses;
               /* if(tempList.length !=0)
                {
                  console.log(tempList[0].latitude);
                  console.log(tempList[0].longitude);
                }*/
              const uList=tempList.filter(match =>match.name==search.text);
               if(uList.length !=0)
                {
                  console.log(uList[0].latitude);
                  console.log(uList[0].longitude);
                  
                }
             // this.addresses=uList;
             // console.log(this.addresses);
                },
                (e) => {
                console.log("error", e);
                });

    },
    onSubmit(args){
      const search = args.object;
     
      console.log(search.text);
       ResDetailService.getAllRestaurantDetails().then((response) => {
                console.log(response.content.toJSON().message);

                const restaurantAddresses=response.content.toJSON().payload;
                let tempList = restaurantAddresses;
               /* if(tempList.length !=0)
                {
                  console.log(tempList[0].latitude);
                  console.log(tempList[0].longitude);
                }*/
                let temp=search.text.toLowerCase();
              const uList=tempList.filter(match =>match.name.toLowerCase()==temp);
             

               if(uList.length !=0)
                {
                this.destination.latitude=uList[0].latitude;
                this.destination.longitude=uList[0].longitude;
                }
                else{
                  console.log("Please check the spelling or try someother restauarants");
                  alert({
                    title: "Error",
                    message: "Please check the spelling or try someother restauarants",
                    okButtonText: "Ok"
                    }).then(() => {
                    console.log("Alert dialog closed");
                    });
                     this.destination.latitude=0;
                this.destination.longitude=0;
                }
             // this.addresses=uList;
             // console.log(this.addresses);
                },
                (e) => {
                console.log("error", e);
                });

      

    },
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
       
       this.getRestaurantAddress();
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
       this.destination.latitude=0;
                this.destination.longitude=0;
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