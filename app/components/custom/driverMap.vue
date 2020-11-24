
<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false">
        <StackLayout height="100%" width="100%">
            <SearchBar hint="What are you looking for?" v-model="searchPhrase" @submit="onSubmit" textFieldHintColor="gray" marginTop="20" />
            <MapView iosOverflowSafeArea="true" :latitude="latitude" :longitude="longitude" :zoom="zoom" :bearing="bearing" :tilt="tilt" height="100%" @mapReady="onMapReady" @markerSelect="onMarkerSelect()" @markerInfoWindowTapped="onMarkerInfoWindowTapped()"></MapView>
        </StackLayout>
    </Page>
</template>

<script>
import { isIOS, isAndroid } from "tns-core-modules/platform";
const geolocation = require("nativescript-geolocation");
const Directions = require("nativescript-directions").Directions;
import { Accuracy } from "tns-core-modules/ui/enums";
const mapsModule = require("nativescript-google-maps-sdk");
import { ImageSource } from "tns-core-modules/image-source";
import { Image } from "tns-core-modules/ui/image";
import * as http from "http";
export default {
    data() {
        return {
            latitude: '',
            longitude: '',
            zoom: '',
            bearing: '',
            tilt: '',
            mapView: null,
            isMounted: false,
            searchPhrase: '',
            markers: [{
                name: 'Baharat Traders',
                address: '580 Barkly Street',
                city: 'west footscray',
                state:'VIC',
                postcode:'3012',
                latitude:'-37.797114',
                longitude:'144.877142',
            },
            {
                name: 'Dosa Hut',
                address: '604 Barkly Street',
                city: 'west footscray',
                state:'VIC',
                postcode:'3012',
                latitude:'-37.796122',
                longitude:'144.875170',
            },
            {
                name: 'Ottoman Pizza',
                address: '67 Ashley Street',
                city: 'Braybrook',
                state:'VIC',
                postcode:'3019',
                latitude:'-37.793561',
                longitude:'144.862698',
            },
            {
                name: 'Paolo Cupcakes',
                address: '28C ashley Street',
                city: 'west footscray',
                state:'VIC',
                postcode:'3012',
                latitude:'-37.796101',
                longitude:'144.862883',
            },
            ]
        }
    },
    mounted(){
       
    let that = this
        geolocation.isEnabled().then(function(isEnabled) {
            if (!isEnabled) {
                geolocation.enableLocationRequest(true, true).then(() => {
                    that.isMounted = true
                    if (isAndroid && that.mapView) {
                        let uiSettings = that.mapView.gMap.getUiSettings();
                        uiSettings.setMyLocationButtonEnabled(true);
                        that.mapView.gMap.setMyLocationEnabled(true);
                    }
                    geolocation
                        .getCurrentLocation({ desiredAccuracy: Accuracy.high,
                            timeout: 20000
                        })
                        .then(location => {
                            if (!location) {
                                console.log("Failed to get location!");
                            } else {
                                that.updateMap(location); 
                            that.mapView.addMarker(that.marker);
                            }

                        });
                }, (e) => {
                    console.log("Error: " + (e.message || e));
                }).catch(ex => {
                    console.log("Unable to Enable Location", ex);
                });
            } else {
                that.isMounted = true
                if (isAndroid && that.mapView) {
                    let uiSettings = that.mapView.gMap.getUiSettings();
                    uiSettings.setMyLocationButtonEnabled(true);
                    that.mapView.gMap.setMyLocationEnabled(true);
                }
                geolocation
                    .getCurrentLocation({
                        timeout: 20000
                    })
                    .then(location => {
                        if (!location) {
                            console.log("Failed to get location!");
                        } else {
                            that.latitude = location.latitude
                            that.longitude = location.longitude
                            that.zoom = 14
                            that.bearing = 0
                            that.altitude = 0
                        }

                    });

            }
        }, function(e) {
            console.log("Error: " + (e.message || e));
        });

    },
    
    methods: {
       onMapReady(args) {
            this.mapView = args.object;
            var gMap = this.mapView.gMap;
            this.mapView.settings.myLocationEnabled = true;
            this.mapView.settings.myLocationButtonEnabled = true
            this.mapView.settings.compassEnabled = true
            this.mapView.settings.zoomGesturesEnabled = true;
            if (isAndroid && this.isMounted && geolocation.isEnabled()) {
                let uiSettings = gMap.getUiSettings();
                uiSettings.setMyLocationButtonEnabled(true);
                gMap.setMyLocationEnabled(true);
            }
            if (isIOS) {
                gMap.myLocationEnabled = true;
                gMap.settings.myLocationButton = true;
                this.mapView.on("myLocationTapped", event => {
                    geolocation.isEnabled().then(enabled => {
                        if (enabled) {
                            geolocation.getCurrentLocation({
                                maximumAge: 5000,
                                timeout: 20000
                            }).then(location => {
                                gMap.animateToLocation(location);
                            });
                        }
                    });
                });
            }
            this.markers.forEach(element => {
                var marker = new mapsModule.Marker();
                marker.position = mapsModule.Position.positionFromLatLng(
                    element.latitude,
                    element.longitude
                );
                marker.title = element.name;
                this.mapView.addMarker(marker);
            })
        },
        onMarkerSelect() {},
        onSubmit(args){
            const search = args.object;
             const directions = new Directions();
        directions.available().then(avail => {
            console.log(avail ? "Yes from Directions" : "No from Directions");
        });
        directions.navigate({
            to: {
                address: search.text
            },
            type: "driving"

        }).then (
            function(){
                console.log("navigating to destination");
            },
            function(e){
                console.log("Error: " + (e.message || e));
            }
        );


        },
        onMarkerInfoWindowTapped() {},
        updateMap(loc) {
           
            this.latitude = loc.latitude;
            this.longitude = loc.longitude;
            this.marker.position = Position.positionFromLatLng(
                loc.latitude,
                loc.longitude
            );
        },

    },
        
      
}

</script>

<style scoped>
</style>
