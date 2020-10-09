<template>
  <Page >
    <ActionBar title="Account Settings">
    
    </ActionBar>
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
    rows="auto, auto">

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
       text="Change Password" 
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
          text="Change your password"/>
      </GridLayout>
<GridLayout class="first" 
    row="1" 
    backgroundColor="#ffffff"    
    
    width="100%"
    rows="auto,auto"
    columns="*,auto">

      <label  row="0" 
      col="0"
      class="status-title"
       text="Deactivate Account" 
       
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
          text="Delete your Account"/>
      </GridLayout>
        </GridLayout>
</GridLayout>
    
   
  
  </Page>
</template>

<script>
import Login from "../custom/login";
import UserPage from "./user-page";
var auth_service_1 = require("../../auth-service");
import { isIOS, isAndroid } from 'tns-core-modules/platform';
import * as Toast from 'nativescript-toast';
import { Label } from "tns-core-modules/ui/label";
import * as ApplicationSettings from "application-settings";


export default {
  data() {
      let user=this.$store.getters.user;
      return {
       mytext: user.name,
      };
    },
   computed: {
    user() {
      return this.$store.getters.user;
    },
   },
    mounted(){
    },
    methods: {
      }
    
  }

</script>
<style scoped>
  ActionBar {
    background-color: #bd2122;
    color: #ffffff;
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
.setting-txt{
  color: black;
  font-size: 15;
  margin-top: 4;
  margin-left: 2;
  horizontal-align: left;
  vertical-align: center;
}
</style>