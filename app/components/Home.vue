<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    
            <RadSideDrawer ref="drawer">
                <StackLayout ~drawerContent backgroundColor="white">
                    <StackLayout height="56" style="text-align: center; vertical-align: center;">
                        <Label :text="lText" />
                    </StackLayout>
                    <StackLayout class="drawer">
                        <Label text="Home" padding="10" />
                        <Label text="Featured" @tap="onFeaturedTap" padding="10" />
                        <StackLayout width="100%" marginTop="10" class="line" />
                        <Label text="Amazing food offers" padding="10" fontWeight="bold" color="white" backgroundColor="#bd2122"  @tap="showPromos"/>
                        <Label text="My Cart" padding="10" @tap="onCartTap" />
                        <Label text="Refer & Earn" @tap="onReferTap" padding="10" />
                        <Label text="search" padding="10" @tap="onSearchTap" />
                        <StackLayout width="100%" marginTop="10" class="line" />
                        <Label text="About Us" @tap="onAboutTap"  padding="10" />
                        <Label text="Terms & Conditions" padding="10" @tap="onTapTnc" />
                        <Label text="Help & Support" @tap="onHelpTap" padding="10" />
                        <Label text="Restaurant" @tap="onRestaurantTap" padding="10" />
                        <Label text="Geo-Tracker" @tap="onGeoTap" padding="10" />
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

      <GridLayout v-show="selectedTabview == 2" row="2" width="100%" backgroundColor="white">
         <GridLayout class="mainGrid" rows=auto,auto,auto,auto columns=*>
           <GridLayout 
                    row=0
                    columns=auto
                    rows=auto,auto,auto>
               <TextField row=0 class="promoTextField" hint="enter promo code" v-model="code" />
               <Button row=1 ref="codeButton" class="promoButton"  text="Apply Code" @tap="checkCode"/>
               <Label row=1 ref="codeDescription" visibility="hidden" class="descriptionLabel" :text="description"/>
           </GridLayout>

            <GridLayout 
                    row=1
                    columns=*
                    rows=auto,auto,auto,auto,auto>
               <Label row=0  class="claimedLabel" text="Available Promotions"  />
                <Button row=1  class="claimedButton" text="$20 off"/>
                <Button row=2  class="claimedButton" text="free delivery"/>
                <Button row=3  class="claimedButton" text="$10 off"/>
                <Button row=4 ref="newPromo"  class="claimedButton" visibility="hidden" :text="description"/>
           </GridLayout> 
           
             <GridLayout 
                    class="savingsGrid"
                    row=3
                    columns=auto,auto
                    rows=auto>
               <Button row=0 col=0  class="savingsButton" text="Total Savings"/>
                <Button row=0 col=1  class="totalButton" text="$60"/>
           </GridLayout>  

            
       </GridLayout>
      </GridLayout>

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
  import FeaturePage from "./custom/featuredList";
  import About from "./custom/aboutUs";
  import Help from "./custom/help";
  import Dashboard from "./custom/restaurantDashboard";
  import Tnc from "./custom/TermsandConditions";
  import search from "./custom/driverMap";
  import geo from "./custom/geo-tracker";
  import tracker from "./custom/locationTracking";
  import RefScreen from "./userProfile/refScreen";
  import Tabs from "./custom/tabs";
  import Mycart from "./custom/mycart";
  import CategoryItem from "./categories/categoryItem";
  import MenuService from "../services/menu.service";
  import PromoService from "../services/promo.service";
  import * as ApplicationSettings from "application-settings";
	const gestures = require("ui/gestures"); 
	const app = require("application");
  const geoLocationService = new GeoLocationService();
  const menuService = new MenuService();
  const promoService = new PromoService();

  import Vue from "nativescript-vue";
  import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    Vue.use(RadSideDrawer);

export default {
  components: {
    navBottom,
    Item,
    Category,
    CategoryItem
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
      code:"",
      description:"",
      
      items: [
        {
          name: "",
          cover: "",
          //images:{},
          category: "",
          categoryTag: "",
          price: 0,
          likes: 0,
          isLike: '',
          isFavorite:'',
          comments:'',
          rating: '',
          description: "",
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
    this.fetchPopularItems();
   
  },
	methods: {
    checkCode()
    {
        let enteredCode = this.code;
        console.log(enteredCode);
        promoService.getPromo().then((response) => {
                console.log(response.content.toJSON().message);
                const promosList=response.content.toJSON().payload;
                 let tempList = promosList;
              const uList=tempList.filter(promo =>promo.code==enteredCode);
              //console.log( uList[0].description);
              if(uList.length !=0)
              {
                this.description = uList[0].description;
                let newPromo = this.$refs.newPromo.nativeView;
                newPromo.visibility = "visible";
                /* this.description = uList[0].description;
                 let codeButton = this.$refs.codeButton.nativeView;
                 let codeDescription = this.$refs.codeDescription.nativeView;
                 codeButton.visibility = "collapsed";
                 codeDescription.visibility = "visible";  */

                 alert({
                    title: "Success",
                    message: "Code Applied Successfully",
                    okButtonText: "ok"
                    }).then(() => {
                    console.log("Alert dialog closed");
                    });
              }  
              else
              {
                alert({
                    title: "Error",
                    message: "Enter valid code",
                    okButtonText: "Ok"
                    }).then(() => {
                    console.log("Alert dialog closed");
                    });
              }        
                },
                (e) => {
                console.log("error", e);
                });
    },

    fetchPopularItems()
    {
      menuService.getMenu().then((response) => {
                console.log(response.content.toJSON().message);

                const menuItems=response.content.toJSON().payload;
                this.items=menuItems;
                },
                (e) => {
                console.log("error", e);
                });
    },

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
        else if(this.user.role == 2)
        {
          this.$navigateTo(Tabs);
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
  onFeaturedTap(){
   this.$navigateTo(FeaturePage,{});
  },
  onAboutTap(){
    this.$navigateTo(About,{});
  },
  onHelpTap(){
    this.$navigateTo(Help,{})
  },
  onRestaurantTap(){
    this.$navigateTo(Dashboard,{});
  },
  onTapTnc(){
    this.$navigateTo(Tnc,{});
  },
  onCartTap(){
    this.$navigateTo(Mycart)
  },
  onSearchTap(){
    this.$navigateTo(search,{})
  },
  onGeoTap(){

    this.$navigateTo(tracker,{});
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
.promoTextField
{
    font-size: 18;
    margin-top: 20;
    margin-left: 10;

}
  .promoButton
  {
      background-color: #bd2122;
      font-size: 18; 
      margin-left: 5;    
  }
.claimedButton
{
    text-align: left;
}
  .claimedLabel
  {
      font-size: 18;
    margin-top: 30;
    margin-left: 10;
  }
  .descriptionLabel
  {
    font-size: 15;
  }
  .savingsGrid
  {
      margin-top: 30;
  }
.mainGrid
{
    margin-left: 15;
    margin-right: 15;
}
</style>