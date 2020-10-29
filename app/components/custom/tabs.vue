<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
     <RadSideDrawer ref="drawer">
                <StackLayout ~drawerContent backgroundColor="white">
                    <StackLayout height="56" style="text-align: center; vertical-align: center;">
                        <Label :text="lText" />
                    </StackLayout>
                    <StackLayout class="drawer">
                        <Label text="Home" padding="10" />
                        <Label text="My Menu" @tap="onFeaturedTap" padding="10" />
                        <StackLayout width="100%" marginTop="10" class="line" />
                        <Label text="My Orders" padding="10" fontWeight="bold" color="white" backgroundColor="#bd2122"  @tap="showPromos"/>
                        <Label text="Add Items" padding="10" @tap="onAddItemTap" />
                        <Label text="Preparation Times" @tap="onReferTap" padding="10" />
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
     <GridLayout rows="auto,*" columns="auto,auto" ~mainContent @swipe="onOpenDrawerTap">
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
        <Label col="0" row="0" text="Home"   class="status-title" @tap="onOpenDrawerTap" ></Label>
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

    <TabView row="1" width="100%">
          <TabViewItem title="Items">
                  <!-- <Frame id="showItems" ><Items/></Frame> -->
                  <StackLayout class="content">
            
            <GridLayout rows="auto,600,auto" row="2" width="100%" backgroundColor="white" class="mainGrid">
              <Label row ="0" text="Daily Menu" class="heading" @tap="onOpenDrawerTap"/>
            
              <GridLayout  row="1" width="100%" backgroundColor="white">
              <ListView ref="listview" separatorColor="transparent" for="item in items" :key="index">
              <v-template>
            <StackLayout class="main">

              <StackLayout >
              <GridLayout  columns="auto,*,*" rows="auto" verticalAlignment="center">
                  
                  <Image row="0" col="0"  stretch="aspectFill" class="card-img"
                      :src="item.cover" />
                  
                  <GridLayout row="0" col="1" columns="auto," rows="auto,auto,auto" class="details">
                      <Label row="0" col="0"  class="item-name" textwrap="true" 
                          horizontalAlignment="left"
                          :text="item.name" />
                          
                          <Label row="1" col="0" class="item-category" horizontalAlignment="left"
                              :text="item.category" />
                          
                  </GridLayout>

                      <Button row="0" col="2"  class="price" @tap="onDeleteButton(item)"
                          horizontalAlignment="right" verticalAlignment="top"
                          :text="item.price+' $'" />

              </GridLayout>
                  <StackLayout width="100%" marginTop="5" class="line" />

                  <!-- Here the problem in scroll transistion -->
              
              </StackLayout>

              <StackLayout width="100%" class="lineBreak" />


          </StackLayout>
          </v-template>
          </ListView>
            </GridLayout>
            </GridLayout>
          </StackLayout>
          </TabViewItem>
    <TabViewItem title="Categories" >
            <Frame id="Menu" ><Menu/></Frame> 
    </TabViewItem>
    <TabViewItem title="Map" >
                <Frame id="Category" ><Map/></Frame> 
    </TabViewItem>
</TabView>
     </GridLayout>
     </RadSideDrawer>
  </page>
</template>
<script>
import Menu from "./Menu";
import Map from "./map";
import Login from "./login";
import * as ApplicationSettings from "application-settings";
import Additem from "./addItems";
import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    Vue.use(RadSideDrawer);
import MenuService from "../../services/menu.service";

const menuService  = new MenuService();
export default {
  components: {
      Menu,
      Map,
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },

  mounted() {
   this.fetchData();
  },
  data() {
    let user=this.$store.getters.user;
    return {
     lText:"",
     items:[{
         name:"",
         cover:"",
         price:"",
         category:"",
         //restID:"",
       }] 
    };
  },
  methods: {
    fetchData(){
      let uiD=this.user._id;
       console.log(uiD)
       menuService.getMenu().then(
      (response) => {
        const itemList = response.content.toJSON().payload
        let tempList = itemList;
        const uList=tempList.filter(items =>items.res_id==uiD);
        this.items= uList;
      },
      (e) => {
        console.log("error", e);
          }
     );
    },
    onOpenDrawerTap() {
                this.$refs.drawer.nativeView.showDrawer();
                this.lText=this.user.name;
  },
    onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
  },
  onAddItemTap(){
    this.$navigateTo(Additem);
  },
  logout(){
   ApplicationSettings.clear();
    this.$navigateTo(Login);
    },
  }
};

</script>

<style scoped>


.mainGrid{
        color: black;
        font-size: 26;
        margin-left: 10;
        margin-right: 10;
    }
    .item-name {
      margin-top:5;
        color: black;
        font-size: 16;
    }
    .item-category {
        color: #828282;
        font-size: 14;
    }
    .price {
        margin-top:5;
        font-size: 16;
        color:white;
        background-color: #bd2122;
        font-weight: bold;
    }
    .details{
        margin-left: 14;   
    }
    .content {
        margin-left: 16;
        margin-right: 16;
        margin-bottom: 3;
        margin-top: 16;
    }
    .card-img {
        width: 240;
        height: 140;
        margin-bottom: 5;
    }
</style>