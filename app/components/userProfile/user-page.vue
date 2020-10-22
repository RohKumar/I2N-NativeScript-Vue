<template>
  <Page >
    <ActionBar>
    <StackLayout orientation="horizontal"
    ios:horizontalAlignment="center"
    android:horizontalAlignment="center">
    <Label text="User Profile" class="action-label"></Label>
  </StackLayout>
    </ActionBar>
          <FlexboxLayout class="page"> 
            <StackLayout v-bind:class="getClass()" >
    <GridLayout class="mainGrid"
    columns="*" 
    rows="auto,auto">
    
    <GridLayout class="firstGrid"
    row="0"
    columns="auto,*,auto,auto" 
    width="100%"
    rows="auto,auto">

    <Image
          stretch="aspectFill"
          col="0"
          row="0"
          class="user-img"
          src="~/assets/images/user-im.png"/>
    <label  row="0" 
        col="1"
        class="setting-txt"
        :text="mytext" 
        @tap="showNameInConsole"
       ></Label>    
    <Image
         horizontalAlignment="right"
          stretch="aspectFill"
          col="2"
          row="0"
          class="edit-img"
          src="~/assets/images/edit-icon.png"/> 
    <label  row="0" 
        col="3"
        class="edit-text"
        text="Edit" 
       @tap="showNameInConsole"
       ></Label>   

    </GridLayout>

    <GridLayout class="tabview"
    row="1"
    columns="*" 
    rows="auto, auto, auto, auto,auto,auto">

    <GridLayout class="first" 
    row="0" 
    backgroundColor="#ffffff"
    @tap="onPaymentTap"
    width="100%"
    rows="auto,auto"
    columns="*,auto">

      <label  row="0" 
      col="0"
      class="status-title"
       text="Payment cards" 
       ></Label>
       
       <Image
       horizontalAlignment="right"
          stretch="aspectFill"
          col="1"
          row="0"
          class="status-img"
          src="~/assets/images/right-arrow.png"/>

          <label
          class="small-text"
          row="1"
          col="0"
          text="Add credit or debit card"/>
      </GridLayout>
<GridLayout class="first" 
    row="1" 
    backgroundColor="#ffffff"    
    @tap="onAddressTap"
    width="100%"
    rows="auto,auto"
    columns="*,auto">

      <label  row="0" 
      col="0"
      class="status-title"
       text="Address" 
       
       ></Label>
       
       <Image
       horizontalAlignment="right"
          stretch="aspectFill"
          col="1"
          row="0"
          class="status-img"
          src="~/assets/images/right-arrow.png"/>

          <label
          class="small-text"
          row="1"
          col="0"
          text="Add or remove delivery address"/>
      </GridLayout>
<GridLayout class="first" 
    row="2" 
    backgroundColor="#ffffff"    
    width="100%"
    @tap="onOrderTap"
    rows="auto,auto"
    columns="*,auto">

      <label  row="0" 
      col="0"
      class="status-title"
       text="Orders" 
       @tap="onOrderTap"
       ></Label>
       
       <Image
       horizontalAlignment="right"
          stretch="aspectFill"
          col="1"
          row="0"
          class="status-img"
          src="~/assets/images/right-arrow.png"/>

          <label
          class="small-text"
          row="1"
          col="0"
          text="Check Your History"
          />
      </GridLayout>
<GridLayout class="first" 
    row="3" 
    backgroundColor="#ffffff"    
    @tap="onReferTap"
    width="100%"
    rows="auto,auto"
    columns="*,auto">

      <label  row="0" 
      col="0"
      class="status-title"
       text="Refer Friends" 
       ></Label>
       
       <Image
       horizontalAlignment="right"
          stretch="aspectFill"
          col="1"
          row="0"
          class="status-img"
          src="~/assets/images/right-arrow.png"/>

          <label
          class="small-text-red"
          row="1"
          col="0"
          text="Get $5.0 Free"/>
      </GridLayout>
<GridLayout class="first" 
    row="4" 
    backgroundColor="#ffffff"    
    
    width="100%"
    rows="auto,auto"
    columns="*,auto">

      <label  row="0" 
      col="0"
      class="status-title"
       text="Reviews" 
       @tap="showNameInConsole"
       ></Label>
       
       <Image
       horizontalAlignment="right"
          stretch="aspectFill"
          col="1"
          row="0"
          class="status-img"
          src="~/assets/images/right-arrow.png"/>

          <label
          class="small-text"
          row="1"
          col="0"
          text="Check your Reviews"/>
      </GridLayout>
      <GridLayout class="first" 
      row="5" @tap="onSettingTap"
      backgroundColor="#ffffff"    
      width="100%"
      rows="auto"
      columns="auto,*,auto">

        <Image
          stretch="aspectFill"
          col="0"
          row="0"
          class="setting-img"
          src="~/assets/images/settings-icon.png"/>
      <label  row="0" 
      col="1"
      class="setting-txt"
       text="Settings" 
       ></Label>
       <Image
       horizontalAlignment="right"
          stretch="aspectFill"
          col="2"
          row="0"
          class="status-img"
          src="~/assets/images/right-arrow.png"/>
      
      </GridLayout>
</GridLayout>
    </GridLayout>
            </StackLayout>
      </FlexboxLayout> 
 </Page>
</template>

<script>
  var auth_service_1 = require("../../auth-service");
  import { isIOS, isAndroid } from 'tns-core-modules/platform';
  import * as Toast from 'nativescript-toast';
  import Login from "../custom/login";
  import PayCards from "./payCards";
  import AccSetting from "./accSettings";
  import { Label } from "tns-core-modules/ui/label";
  import * as ApplicationSettings from "application-settings";
  import RefScreen from "./refScreen";
  import UserAddress from "./userAddress";
  import MyCart from "../custom/mycart";
  
  export default {
    mounted() {
            
     },
   computed: {
    user() {
      return this.$store.getters.user;
    },
    
  },
    data() {
      let user=this.$store.getters.user;
      return {
       mytext:user.name,
      }
    },
    methods: {
  showNameInConsole(){
  console.log(this.user.name)
    },
  
  getClass() {
  return {
      "container-loading": this.isInitialized,
      "container-loaded": !this.isInitialized
   };
},   
onAddressTap(){
  this.$navigateTo(UserAddress,{});
  console.log("Hello from address page");
},
 onPaymentTap(){
   this.$navigateTo(PayCards, {});
 },
 onReferTap(){
   this.$navigateTo(RefScreen,{});
 },
 onOrderTap(){
   this.$navigateTo(MyCart);
 },
 onSettingTap(){
   this.$navigateTo(AccSetting,{});
 } ,
 onLogoutTap() {
    ApplicationSettings.clear();
    this.$navigateTo(Login);
     console.log(this.user.name);
 },
  
    }
  }
  
</script>

<style scoped>
  ActionBar {
    background-color: #bd2122;
    color: #ffffff;
  }
  .action-label {
    color:  #ffffff;
    font-weight: bold;
    vertical-align: center;
}
  .mainGrid{
     margin-left:15;
  }
  .first{ 
    margin-top: 10;
    height: 40;
   margin-left:15;
    margin-right: 15;
  }
  .firstGrid{ 
    margin-top: 10;
    height: 60;
   margin-left:15;
    margin-right: 15;
  }
 .small-text{
  color:gray;
  font-size: 10;
   margin-left: 20;
   }
   .small-text-red{
  color:red;
  font-size: 10;
   margin-left: 20;
   }
 .status-title {
  color: black;
  font-family: "Areial",sans-serif;
  font-size: 15;
  margin-left: 15;
  margin-top: 4;
  horizontal-align: left;
  vertical-align: center;
}
.edit-text {
  color:#bd2122;
  font-family: "Areial",sans-serif;
  font-size: 15;
  margin-right: 20;
  margin-top: 4;
  horizontal-align: left;
  vertical-align: center;
}
.status-img {
 margin-top: 4;
  margin-right: 20;
  width: 20;
  height: 20;
}
.user-img {
 margin-top: 4;
  margin-left: 15;
  width: 40;
  height: 40;
  horizontal-align: left;
  vertical-align: center;
}
.edit-img{
  margin-top: 4;
  width: 20;
  height: 20;
}
.setting-img{
  margin-top: 4;
  margin-left: 15;
  width: 20;
  height: 20;
  horizontal-align: left;
  vertical-align: center;
}
.setting-txt{
  color: black;
  font-size: 15;
  margin-top: 4;
  margin-left: 2;
  horizontal-align: left;
  vertical-align: center;
}
.container-loading {
  animation-name: loading;
  animation-fill-mode: forwards;
  animation-duration: 0.6;
  animation-iteration-count: 1;
}
@keyframes loading {
  0% {
    transform: translate(0, 200);
  }
  100% {
    transform: translate(0, 0);
  }
}
.container-loaded {
  animation-name: loaded;
  animation-fill-mode: forwards;
  animation-duration: 0.6;
  animation-iteration-count: 1;
}

@keyframes loaded {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 10);
  }
}
</style>