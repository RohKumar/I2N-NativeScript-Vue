<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false">
        <StackLayout height="100%" width="100%" >
            <MapView iosOverflowSafeArea="true" :latitude="latitude" :longitude="longitude" :zoom="zoom" :bearing="bearing" :tilt="tilt" height="100%" @mapReady="onMapReady" @markerSelect="onMarkerSelect" @markerInfoWindowTapped="onMarkerInfoWindowTapped"></MapView>
        </StackLayout>
    </Page>
</template>

<script>
import { isIOS, isAndroid } from 'tns-core-modules/platform'
const geolocation = require("nativescript-geolocation");
const mapsModule = require("nativescript-google-maps-sdk");
import * as http from "tns-core-modules/http";
export default {
    data() {
        return {
            latitude: '',
            longitude: '',
            zoom: '',
            bearing: '',
            tilt: '',
            mapView:null,
            markers: [],
            isMounted: false
        }
    },
    mounted() {
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
            this.fetchUsersLocation();
            const gMap = this.mapView.gMap;
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
        },
        fetchUsersLocation() {
            debugger
            http.request(
                {
                    url: "http://172.17.2.113:5000/api/geoLocation",
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }).then(
                    (response) => {
                        this.roleListByName = response.content
                            .toJSON()
                            .payload.map((e) => e.name);
                        this.formatMarkers(response.content.toJSON().payload);
                    },
                    (e) => {
                    console.log("error", e);
                }
            );
        },
        formatMarkers(payload) {
            console.log(payload)
            payload.forEach(userLocation => {
                let location = {
                    name: userLocation.name,
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude
                };
                this.markers.push({...location});
            });

            this.showUserLocations();
        },
        showUserLocations() {
            this.markers.forEach(element => {
                let marker = new mapsModule.Marker();
                marker.position = mapsModule.Position.positionFromLatLng(
                    element.latitude,
                    element.longitude
                );
                marker.title = element.name;
                this.mapView.addMarker(marker);
            })
        },
        onMarkerSelect() {},
        onMarkerInfoWindowTapped() {},
    },
}
</script>

<style scoped>
</style>