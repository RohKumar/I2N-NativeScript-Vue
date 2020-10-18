<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <!-- @loaded="onLoaded" -->

    <GridLayout rows="auto,auto,auto" columns="auto">
      <GridLayout
        row="0"
        backgroundColor="#e7933b"
        verticalAlignment="top"
        height="100"
        width="100%"
        rows="auto,auto,auto"
        columns="*,auto,auto"
      >
        <Image
          col="0"
          row="0"
          @tap="$navigateBack"
          horizontalAlignment="left"
            class="status-img"
          src="~/assets/images/back.png"
        />

        <Label col="0" row="0" text="Refer and Earn"  horizontalAlignment="center" class="status-title"></Label>
    
        <Image
          col="1"
          row="0"
          color="white"
          horizontalAlignment="right"
          class="status-img"
          src="~/assets/images/navcart.png"
        />
        
        <Label col="0" row="1"
        text="You've Earned"
        horizontalAlignment="left"  class="small-text"></Label>
        <Label col="0" row="2"
        :text="points" fontWeight="bold"
        horizontalAlignment="left"  class="small-points"></Label>
      </GridLayout>
    <StackLayout
        row="1"
        horizontalAlignment="center"
        width="100%"
        >
    <Label textWrap="true" horizontalAlignment="center"
    text="Hooray!!"
    class="ref-text">
       </Label>
       <Label textWrap="true" horizontalAlignment="center"
    text="Refer a friend  we'll give you and your buddy 5 loyality points which is equal to $5.Use these poiunts in your next order."
    class="ref-text">
       </Label>
       <Label textWrap="true" horizontalAlignment="center"
    text="100 Point=$1.00" color="grey"
    class="ref-text">
       </Label>
        <Label textWrap="true" horizontalAlignment="center"
    text="Earning rewards is easy,simple and fun! Earn points on every purchase made through the Idea2Network app."
    color="#a4aba3" class="ref-text">
       </Label>
        <Label  textWrap="true" horizontalAlignment="center"
    text="Terms and Conditions" color="red"
    class="ref-text">
       </Label>
        <Label  textWrap="true" horizontalAlignment="center"
    text="EL-CHANNMMY" color="red"  fontWeight="bold"
    class="ref-text">
       </Label>
       <Label  textWrap="true" horizontalAlignment="center"
    text="COPY CODE" color="red"
    class="ref-text">
       </Label>
       <Label  textWrap="true" horizontalAlignment="center"
    text="-OR-"
    class="ref-text">
       </Label>
       <Label textWrap="true" horizontalAlignment="center"
    text="Share on with your network" 
    class="ref-text">
       </Label>
       <Label  textWrap="true" horizontalAlignment="center"
    text="Share Via"
    class="ref-text">
       </Label>
    <GridLayout row="2"
        width="100%"
        rows="auto,auto"
        horizontalAlignment="center"
        columns="*,auto,auto,*">
      <Image
          stretch="aspectFill"
          col="0"
          row="0"
          class="user-img"
          src="~/assets/images/msg.png"/>  
            <Image
          stretch="aspectFill"
          col="1"
          row="0"
          class="user-img1"
          src="~/assets/images/whatsapp.png"/> 
            <Image
          stretch="aspectFill"
          col="2"
          row="0"
          class="user-img1"
          src="~/assets/images/fb.png"/> 
            <Image
          stretch="aspectFill"
          col="3"
          row="0"
          class="user-img"
          src="~/assets/images/share.png"/> 
          <Label col="0" row="1" textWrap="true" horizontalAlignment="center"
    text="SMS" class="ref-text">
       </Label>
       <Label col="1" row="1" textWrap="true" horizontalAlignment="center"
    text="Whatsapp" class="ref-text">
       </Label>
       <Label col="2" row="1" textWrap="true" horizontalAlignment="center"
    text="Facebook"
    class="ref-text">
       </Label>
       <Label col="3" row="1" textWrap="true" horizontalAlignment="center"
    text="Other"
    class="ref-text">
       </Label>

    </GridLayout>
    </StackLayout>
    </GridLayout>
    </page>
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
      return{
        points:user.points
      }      
     },
   computed: {
    user() {
      return this.$store.getters.user;
    },
    
  },
      methods: {
backButton(){
  this.$navigateTo(UserPage,{});
    },
      }
  }
  
</script>

<style scoped>
.small-text{
margin-top: 20;
color: #ffffff;
margin-left: 5;
font-size: 12;
   }
.small-points{
color: #ffffff;
margin-left: 5;
font-size: 14;
}
.status-img {
 margin-top: 4;
  margin-right: 20;
  width: 25;
  height: 25;
}
.ref-text{
 margin-top: 15;
margin-left: 20;
margin-right: 20;
font-size: 13;
vertical-align: center;
}
.user-img {
 margin-top: 8;
  width: 40;
  height: 40;
 vertical-align: center;
}
.user-img1 {
 margin-top: 8;
  width: 50;
  height: 50;
 vertical-align: center;
}
</style>