<template> 
    <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
        <!-- @loaded="onLoaded" -->

        <StackLayout
            row="0"
            horizontalAlignment="center"
            width="100%"
            >
            <GridLayout
                row="0"
                backgroundColor="#bd2122"               
                verticalAlignment="top"
                height="35"
                width="100%"
                rows="auto,auto,auto"
                columns="*,auto,auto"
            >
            <Label col="0" row="0" text="ABOUT US"  horizontalAlignment="center" class="status-title"></Label>
                <Image
                    col="0"
                    row="0"
                    @tap="$navigateBack"
                    horizontalAlignment="left"
                    class="status-img"
                    src="~/assets/images/back.png"
                />
            </GridLayout>

            <Image
                    row="1"
                    col="1"
                    strech="none"  
                    horizontalAlignment="aspectFill"
                    class="logo-img"
                    src="~/assets/images/logo.png"
                />
        
            
            <Label textWrap="true" horizontalAlignment="center"
                text="Idea2network Pty Ltd is a Private company based out of Australia.we specialise in End to End software development, IT Strategy,Website Development, Marketing Platform, Phone App Development both on Android & Ios."
                class="small-text">
            </Label>  

            <Label textWrap="true" horizontalAlignment="center"
                text="Litti Chokha"
                class="head-text">
            </Label>

            <Label textWrap="true" horizontalAlignment="center"
                text="Litti Chokha app help the restaurants to get more loyal clients and also help the users to get special offers from their favourite restaurants ."
                class="small-text">
            </Label>

            <Label textWrap="true" horizontalAlignment="center"
                text="The application focus more on the customer - restaurant relation and hence enhancing the user experience and restaurant marketing ."
                class="small-text">
            </Label>

            <Label  textWrap="true" horizontalAlignment="center"
                text="Contact Us"
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
   
    methods: {
    backButton(){
    this.$navigateTo(UserPage,{});
    },
      }
  }
  
</script>
<style scoped>
.small-text{
margin-top: 15;
color: #000000;
margin-left: 20;
font-size: 16;
   }
.status-img {
 margin-top: 4;
  margin-right: 20;
  width: 25;
  height: 25;
}
.head-text{
 margin-top: 15;
margin-left: 20;
margin-right: 20;
color: #741700;
font-size: 18;
vertical-align: center;
}
.user-img1 {
 margin-top: 8;
  width: 50;
  height: 50;
 vertical-align: center;
}
.user-img {
 margin-top: 8;
  width: 40;
  height: 40;
 vertical-align: center;
}
.logo-img {
 margin-top: 4;
  width: 100;
  height: 60;
 vertical-align: center;
}
.ref-text{
 margin-top: 20;
margin-left: 20;
margin-right: 20;
font-size: 15;
vertical-align: center;
}
</style>