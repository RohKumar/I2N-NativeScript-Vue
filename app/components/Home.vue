<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    
            <RadSideDrawer ref="drawer">
                <StackLayout ~drawerContent backgroundColor="white">
                    <StackLayout height="56" style="text-align: center; vertical-align: center;">
                        <Label :text="lText" />
                    </StackLayout>
                    <StackLayout class="drawer">
                        <Label text="Home" padding="10" />
                        <Label text="Featured" padding="10" />
                        <StackLayout width="100%" marginTop="10" class="line" />
                        <Label text="Family Packs / Catering" padding="10" />
                        <Label text="Amazing food offers" padding="10" fontWeight="bold" color="white" backgroundColor="#bd2122" />
                        <Label text="My Cart" padding="10" />
                        <Label text="Refer & Earn" @tap="onReferTap" padding="10" />
                        <StackLayout width="100%" marginTop="10" class="line" />
                        <Label text="About Us"  padding="10" />
                        <Label text="Terms & Conditions" padding="10" />
                        <Label text="Privacy Policy" padding="10" />
                        <Label text="Help & Support" padding="10" />
                        <Label text="Logout" @tap="logout" padding="10" />
                    </StackLayout>
                    <Label text="Close" color="lightgray" padding="10" style="horizontal-align: center"
                        @tap="onCloseDrawerTap" />
                </StackLayout>
    <GridLayout rows="auto,auto,*,auto" columns="auto" ~mainContent @swipe="onOpenDrawerTap">
      <GridLayout
        row="0"
        ref="navStatusBar"
        class="navStatusBar"
        backgroundColor="#bd2122"
        verticalAlignment="top"
        height="40"
        width="100%"
        rows="auto"
        columns="*,auto,auto,auto"
      >
        <Label col="0" row="0" text="Home" @tap="onOpenDrawerTap"  class="status-title"></Label>
        <Image
          col="0"
          row="0"
          @tap="search"
          horizontalAlignment="right"
          class="status-img"
          src="~/assets/images/search.png"
        />
        <Image
          col="1"
          row="0"
		  
           @tap="goToQrScanner"
          horizontalAlignment="right"
          class="status-img"
          src="~/assets/images/bell.png"
        />
        <Image
          col="2"
          row="0"
          @tap="goToTest"
          horizontalAlignment="right"
          class="status-img"
          src="~/assets/images/offer.png"
        />
        <Image
          @tap="goToLogin"
          horizontalAlignment="right"
          stretch="aspectFill"
          col="3"
          row="0"
          class="status-profile"
          src="~/assets/images/user-im.png"
        />
      </GridLayout>

      <GridLayout
        row="1"
        ref="navTab"
        class="navTab"
        verticalAlignment="top"
        height="50"
        width="100%"
        rows="auto"
        columns="auto,auto,auto"
      >
        <GridLayout
          class="tabview"
          :class="selectedTabview==0?'active':''"
          @tap="popular"
          rows="*,auto"
          cols="auto"
          col="0"
          row="0"
          width="33%"
        >
          <Image
            v-show="selectedTabview==0"
            row="0"
            class="navIcon"
            :src="selectedTabview==0?'~/assets/images/popular.png':''"
          />
          <Label :class="selectedTabview==0?'active':''" row="1" text="POPULAR" class="tabviewText"></Label>
        </GridLayout>
        <GridLayout
          class="tabview"
          :class="selectedTabview==1?'active':''"
          @tap="showCategory"
          rows="*,auto"
          cols="auto"
          col="1"
          row="0"
          width="34%"
        >
          <Image
            v-show="selectedTabview == 1"
            row="0"
            class="navIcon"
            :src="selectedTabview==1?'~/assets/images/category.png':''"
          />
          <Label
            :class="selectedTabview==1?'active':''"
            row="1"
            text="CATEGORY"
            class="tabviewText"
          ></Label>
        </GridLayout>
        <GridLayout
          class="tabview"
          :class="selectedTabview==2?'active':''"
          @tap="showPromos"
          rows="*,auto"
          cols="auto"
          col="2"
          row="0"
          width="33%"
        >
          <Image
            v-show="selectedTabview == 2"
            row="0"
            class="navIcon"
            :src="selectedTabview==2?'~/assets/images/category.png':''"
          />
          <Label :class="selectedTabview==2?'active':''" row="1" text="PROMOS" class="tabviewText"></Label>
        </GridLayout>
      </GridLayout>

      <GridLayout v-show="selectedTabview == 0" row="2" width="100%" backgroundColor="white">
        <ListView ref="listview" separatorColor="transparent" for="item in items" :key="index">
          <v-template>
            <item :item="item" @clicked="showItem(item)" />
          </v-template>
        </ListView>
      </GridLayout>

      <GridLayout v-show="selectedTabview == 1" row="2" width="100%" backgroundColor="white">
        <ListView
          ref="listview"
          separatorColor="transparent"
          for="item in itemsCategory"
          :key="index"
        >
          <v-template>
            <Category :item="item"></Category>
          </v-template>
        </ListView>
      </GridLayout>

      <GridLayout v-show="selectedTabview == 2" row="2" width="100%" backgroundColor="white"></GridLayout>

      <navBottom row="3" />
     </GridLayout>   
            </RadSideDrawer>
    
  </page>
</template>
<script>
	// import { SwissArmyKnife } from "nativescript-swiss-army-knife";
	import { isIOS, isAndroid } from 'tns-core-modules/platform'
	const appSettings = require("application-settings");
	const geolocation = require("nativescript-geolocation");
	import * as http from "tns-core-modules/http";
	import navBottom from "./custom/navBottom";
	import Item from "./custom/item";
	import Category from "./custom/category";
	import QrModal from "./custom/offerQrModal";
	import Map from "./custom/map";
	import ItemDetails from "./ItemDetails";
	import Login from "./custom/login";
  import GeoLocationService from '../services/geoLocationService';
  import QrScanner from "./custom/qrScanner";
  import UserPage from "./userProfile/user-page";
  import RefScreen from "./userProfile/refScreen";
	const gestures = require("ui/gestures"); 
	const app = require("application");
  const geoLocationService = new GeoLocationService();

  import Vue from "nativescript-vue";
  import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    Vue.use(RadSideDrawer);

export default {
  components: {
    navBottom,
    Item,
    Category,
  },
  computed: {
    
    itemsCategory() {
      return this.category ? this.category.slice().reverse() : [];
    },
    user() {
      return this.$store.getters.user;
    },
  },
  data() {
    
    return {
      lText:"",
      lastDelY: 0,
      headerCollapsed: false,
      selectedTab: 0,
      selectedTabview: 0,
      location: {},
      
      items: [
        {
          name: "Manila Ultimate Tombstone Burger",
          cover: "~/assets/images/food/burger640.jpg",
          images: [
            { src: "~/assets/images/food/burger/burger1.jpg" },
            { src: "~/assets/images/food/burger/burger2.jpg" },
            { src: "~/assets/images/food/burger/burger3.jpg" },
            { src: "~/assets/images/food/burger/burger4.jpg" },
            { src: "~/assets/images/food/burger/burger5.jpg" },
            { src: "~/assets/images/food/burger/burger6.jpg" },
          ],
          category: "Burger",
          categoryTag: "#2D9CDB",
          price: "$300.00",
          likes: 987,
          isLike: false,
          isFavorite: true,
          comments: 13,
          rating: "4.5",
          description: "a",
        },
        {
          name: "Quezon Chocolate Marble Pancake",
          cover: "~/assets/images/food/pancake640.jpg",
          images: [
            { src: "~/assets/images/food/pancake/pancake1.jpg" },
            { src: "~/assets/images/food/pancake/pancake2.jpg" },
            { src: "~/assets/images/food/pancake/pancake3.jpg" },
            { src: "~/assets/images/food/pancake/pancake4.jpg" },
            { src: "~/assets/images/food/pancake/pancake5.jpg" },
            { src: "~/assets/images/food/pancake/pancake6.jpg" },
          ],
          category: "Pancake",
          categoryTag: "#e4ce0d",
          price: "$230.00",
          likes: 891,
          isLike: true,
          isFavorite: true,
          comments: 7,
          rating: "4.0",
          description: "a",
        },
        {
          name: "Binondo Black Forest Cake",
          cover: "~/assets/images/food/cake640.jpg",
          images: [
            { src: "~/assets/images/food/cake/cake1.jpg" },
            { src: "~/assets/images/food/cake/cake2.jpg" },
            { src: "~/assets/images/food/cake/cake3.jpg" },
            { src: "~/assets/images/food/cake/cake4.jpg" },
          ],
          category: "Cake",
          categoryTag: "#27AE60",
          price: "$300.00",
          likes: 730,
          isLike: true,
          isFavorite: true,
          comments: 11,
          rating: "4.0",
          description: "a",
        },
      ],
      category: [
        {
          cover: "~/assets/images/food/burger640.jpg",
          category: "BURGER",
          count: "13",
        },
        {
          cover: "~/assets/images/food/pancake640.jpg",
          category: "PANCAKE",
          count: "5",
        },
        {
          cover: "~/assets/images/food/cake640.jpg",
          category: "CAKE",
          count: "9",
        },
        {
          cover: "~/assets/images/food/beer640.jpg",
          category: "BEER",
          count: "7",
        },
      ],
    };
  },
  mounted() {
    this.validateUser();
    this.fetchLocation();
   
  },
	methods: {
		search(){
			this.$navigateTo(Map);
		},
		bell(){
		},
		offer() {
			this.$showModal(QrModal)
		},
	
		showItem(payload) {
			this.$navigateTo(ItemDetails,{
				props: {
					item: payload
				},
				animated: true,
				transition: {
					name: "slideTop",
					duration: 380,
					curve: "easeIn"
				}
			})
		},
		
		popular() {
			this.selectedTabview = 0;
		},
		showCategory() {
			this.selectedTabview = 1;
		},
		showPromos() {
			this.selectedTabview = 2;
		},
		home() {
      this.selectedTab = 0; 
		},
		cart() {
			this.selectedTab = 1;
		},
		history() {
			this.selectedTab = 2;
		},
		about() {
			this.selectedTab = 3;
		},
		fetchLocation() {
			let that = this;
			geolocation.isEnabled().then(function(isEnabled) {
            if (!isEnabled) {
                geolocation.enableLocationRequest(true, true).then(() => {
                    geolocation
                        .getCurrentLocation({
                            timeout: 20000
                        })
                        .then(location => {
                            if (!location) {
                                console.log("Failed to get location!");
                            } else {
                                that.location.latitude = location.latitude
								that.location.longitude = location.longitude
								that.updateUserLocation();
                            }
                        });
                }, (e) => {
                    console.log("Error: " + (e.message || e));
                }).catch(ex => {
                    console.log("Unable to Enable Location", ex);
                });
            } else {
                geolocation
                    .getCurrentLocation({
                      timeout: 20000,
                    })
                    .then((location) => {
                      if (!location) {
                        console.log("Failed to get location!");
                      } else {
                        that.location.latitude = location.latitude;
                        that.location.longitude = location.longitude;
                        that.updateUserLocation();
                      }
                    });

            }
        }, function(e) {
            console.log("Error: " + (e.message || e));
        });
		},
		updateUserLocation() {
			if (this.user && this.user._id && this.location) {
				const payload = {
					userId: this.user._id,
					latitude: this.location.latitude,
					longitude: this.location.longitude
				};
				this.saveLocation(payload);
			}
		},
		saveLocation(payload) {
			geoLocationService.addLocation(payload).then((res) => {
				const result = res.content.toJSON();
				// setTimeout(this.updateUserLocation, 5000);
			}, (e) => {
				console.log("error", e);
			})
		},
		validateUser() {
      setTimeout(() => {
        if(this.user === null) {
          this.goToLogin()
			  }
      }, 0)
			
    },
    	goToLogin() {
        if(this.user === null){
      this.$navigateTo(Login); 
        }else{
          this.$navigateTo(UserPage, {});
          console.log("Home goToLogin");
        }
		},
    	goToQrScanner() {
      this.$navigateTo(QrScanner, {});
  },
     
   onOpenDrawerTap() {
                this.$refs.drawer.nativeView.showDrawer();
                this.lText=this.user.name;
  },
    onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
  },
  onReferTap(){
   this.$navigateTo(RefScreen,{});
    
  },
  
  logout(){
   ApplicationSettings.clear();
    this.$navigateTo(Login);
    }
  
  }
}
</script>

<style>
.tabview.active {
  border-bottom-color: white;
  border-bottom-width: 3;
  margin: 0;
  height: 50;
}
.tabviewText {
  margin-top: 15;
  margin-bottom: 5;
  font-size: 13;
  color: #d8d2d2;
  horizontal-align: center;
}
.tabviewText.active {
  margin-top: 0;
  margin-bottom: 5;
  font-weight: bold;
  color: white;
  vertical-align: center;
}
.navTab {
  background-color: #bd2122;
}
.navTabview {
  background-color: blue;
}
.status-img {
  margin-top: 4;
  margin-right: 20;
  width: 30;
  height: 30;
}
.status-profile {
  border-width: 1;
  border-color: #ffffff;
  background-color: #f1ebeb;
  border-radius: 50%;
  margin-top: 4;
  margin-right: 15;
  width: 30;
  height: 30;
}
.status-title {
  color: white;
  font-size: 18;
  margin-left: 15;
  margin-top: 8;
  horizontal-align: left;
  vertical-align: center;
}
.drawer{
  font-size: 14;
}
.line {
        height: 0.5;
        border: none;
        color: #e0e0e0;
        background-color: #e0e0e0;
}
</style>