<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <!-- @loaded="onLoaded" -->

    <GridLayout rows="auto,auto,*,auto" columns="auto">
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
        <Label col="0" row="0" text="Home" class="status-title"></Label>
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
          @tap="offer"
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
          src="~/assets/images/me.jpg"
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
  </page>
</template>
<script>
// import { SwissArmyKnife } from "nativescript-swiss-army-knife";
import { isIOS, isAndroid } from "tns-core-modules/platform";
const appSettings = require("application-settings");
const geolocation = require("nativescript-geolocation");
import * as http from "tns-core-modules/http";
import navBottom from "./custom/navBottom";
import Item from "./custom/item";
import Category from "./custom/category";
import QrModal from "./custom/offerQrModal";
import Map from "./custom/map";
import ItemDetails from "./ItemDetails";
import Login from "../components/custom/login";
import QrScanner from "./custom/qrScanner";
const gestures = require("ui/gestures");
const app = require("application");

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
  mounted() {
    this.saveUserData();
    this.fetchLocation();
  },
  data() {
    return {
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
          price: "300.00",
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
          price: "230.00",
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
          price: "300.00",
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
  methods: {
    search() {
      console.log("search");
      this.$navigateTo(Map);
    },
    bell() {
      console.log("bell");
    },
    offer() {
      this.$showModal(QrModal);
    },
    goToLogin() {
      this.$navigateTo(Login, {});
	},
	goToQrScanner() {
		console.log("qrScanner");
      this.$navigateTo(QrScanner, {});
	},
    showItem(payload) {
      this.$navigateTo(ItemDetails, {
        props: {
          item: payload,
        },
        animated: true,
        transition: {
          name: "slideTop",
          duration: 380,
          curve: "easeIn",
        },
      });
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
    saveUserData() {
      const userData = {
        contactNumber: "12345",
        password: "fathullah",
        isGoogleAuth: false,
        status: 1,
        _id: "5f1a57e76ac96d0d1cf993f0",
        name: "Fathullah Mohammedi",
        email: "fathullah.mohammedi@rishabhsoft.com",
        role: 1,
        createdAt: "2020-07-24T03:39:19.535Z",
        updatedAt: "2020-07-24T03:40:52.461Z",
        reward: "5f19983503a2171a743d1d84",
      };
      this.$store.commit("save", userData);
    },
    fetchLocation() {
      let that = this;
      geolocation.isEnabled().then(
        function (isEnabled) {
          if (!isEnabled) {
            geolocation
              .enableLocationRequest(true, true)
              .then(
                () => {
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
                },
                (e) => {
                  console.log("Error: " + (e.message || e));
                }
              )
              .catch((ex) => {
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
        },
        function (e) {
          console.log("Error: " + (e.message || e));
        }
      );
    },
    updateUserLocation() {
      if (this.user && this.location) {
        const payload = {
          userId: this.user._id,
          latitude: this.location.latitude,
          longitude: this.location.longitude,
        };
        this.saveLocation(payload);
      }
	},
    saveLocation(payload) {
      http
        .request({
          url: "http://172.17.2.113:5000/api/geoLocation",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          content: JSON.stringify(payload),
        })
        .then(
          (response) => {
            const result = response.content.toJSON();
            console.log(result);
            // setTimeout(this.updateUserLocation, 5000);
          },
          (e) => {
            console.log("error", e);
          }
        );
    },
  },
};
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
</style>