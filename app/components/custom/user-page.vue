<template>
  <Page >
    <ActionBar title="User profile">
    
    </ActionBar>
<GridLayout class="tabview" separatorColor="black" columns="*" rows="auto, auto, auto, auto,auto,auto">

<GridLayout class="first" row="1" backgroundColor="#ffffff"
        verticalAlignment="top"
        height="40"
        width="100%"
        rows="auto"
        columns="*,auto">
      <label  row="1" 
      col="0"
      class="status-title"
       text="Payment cards" 
       @tap="showNameInConsole"
       ></Label>
       
       <Image
       horizontalAlignment="right"
          stretch="aspectFill"
          col="1"
          row="1"
          class="status-img"
          src="~/assets/images/user-im.jpg"/>
</GridLayout>
<GridLayout class="first" row="2" rows="*" width="100%">
      <label  row="1" class="textGrid"
       text="Address" 
       @tap="showNameInConsole"
       ></Label>
</GridLayout>
<GridLayout class="first" row="3" rows="*" width="100%">
      <label  row="1" class="textGrid"
       text="Orders" 
       @tap="showNameInConsole"
       ></Label>
</GridLayout>
<GridLayout class="first" row="4" rows="*" width="100%">
      <label  row="1" class="textGrid"
       text="Refer Friends" 
       @tap="showNameInConsole"
       ></Label>
</GridLayout>
<GridLayout class="first" row="5" rows="*" width="100%">
      <label  row="1" class="textGrid"
       text="Reviews" 
       @tap="showNameInConsole"
       ></Label>
</GridLayout>

</GridLayout>
   
  
  </Page>
</template>

<script>
  var auth_service_1 = require("../../auth-service");
  import { isIOS, isAndroid } from 'tns-core-modules/platform'
  import * as Toast from 'nativescript-toast';
  import Login from "./login";
  import { Label } from "tns-core-modules/ui/label";
  import * as ApplicationSettings from "application-settings";
  import RewardsService from '../../services/rewardsService';
 
  
  export default {
    
     mounted() {
            
     },
   computed: {
    user() {
      return this.$store.getters.user;
    },
  },
    data() {
    
      return {
       
       mytext:"Syed",
      }
    },

    methods: {
showNameInConsole(){
  
    console.log(this.user.points)
    
      },
     
   
  
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
  .first{
    border-width: 1;
  border-color: gray;
    
    margin-right: 15;
  }
 .textGrid{
   margin-left: 20;
   margin-top: 20;
   padding: 20px;
 }
 .smallText{
   margin-left: 20;
   margin-top: 20;
 }
 .status-title {
  color: black;
  font-size: 18;
  margin-left: 15;
  margin-top: 8;
  horizontal-align: left;
  vertical-align: center;
}
.status-img {
  margin-top: 4;
  margin-right: 20;
  width: 30;
  height: 30;
}
  
</style>