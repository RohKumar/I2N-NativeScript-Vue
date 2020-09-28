<template>
    <page >
        <ActionBar title="My Orders">

        </ActionBar>
    

    <GridLayout class="page" rows="auto,*,auto" columns="*,auto">


        <StackLayout row="0">
               
            <StackLayout orientation="horizontal">
                <Label text="Running Order" width="50%" height="40" class="form1" horizontalAlignment="center"/>
                <Label text="History Order" width="50%" height="40" class="form1" horizontalAlignment="left"/>
            </StackLayout>
            

                <StackLayout orientation="horizontal" height="30" columns="*,auto">
                     <Image
                        stretch="aspectFill"
                        class="user1-img"
                        src="~/assets/images/search1.png"/> 
  
                    <label class="form1"
                    text="Order Number"
                    horizontalAlignment="center"/>

                </StackLayout>

               
        </StackLayout>

         <StackLayout row="1" class="form">
            <label class="topLabel"
            text="No Orders Found"
            horizontalAlignment="center"/>
        </StackLayout>


    <GridLayout row="2"
        width="100%"
        rows="auto,auto"
        horizontalAlignment="center"
        columns="auto,auto,auto,auto,auto">
            <Image
                stretch="aspectFill"
                col="0"
                row="0"
                class="user-img"
                src="~/assets/images/navhomem.png"/>  
            <Image
                stretch="aspectFill"
                col="1"
                row="0"
                class="user-img"
                src="~/assets/images/addCard.png"/> 
            <Image
                stretch="aspectFill"
                col="2"
                row="0"
                class="user-img"
                src="~/assets/images/offer.png"/> 
            <Image
                stretch="aspectFill"
                col="3"
                row="0"
                class="user-img"
                src="~/assets/images/user-im.png"/> 
             <Image
                stretch="aspectFill"
                col="4"
                row="0"
                class="user-img"
                src="~/assets/images/navordersm.png"/> 
            <Label col="0" row="1" textWrap="true" horizontalAlignment="center"
                text="Home" class="ref-text">
            </Label>
            <Label col="1" row="1" textWrap="true" horizontalAlignment="center"
                text="Rewards" class="ref-text">
            </Label>
            <Label col="2" row="1" textWrap="true" horizontalAlignment="center"
                text="Offers" class="ref-text">
            </Label>
            <Label col="3" row="1" textWrap="true" horizontalAlignment="center"
                text="Account" class="ref-text">
            </Label>
            <Label col="4" row="1" textWrap="true" horizontalAlignment="center"
                text="Offers" class="ref-text">
            </Label>

    </GridLayout>

    
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
    
  }
  
</script>

<style scoped>

ActionBar {
background-color: #bd2122;
color: #ffffff;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 1;
  vertical-align: middle;
}
.form1 {
  margin-top: 5;
  margin-left: 27;
  margin-right: 27S;
  vertical-align: middle;
}
.topLabel{
    color:gray;
}
.bottomGrid{
   position: fixed;
   bottom: 0;
   left: 50%;
   margin-bottom: 0;
   height: 40;
}
.centerLabel{
   width: 60;
  height: 60;
}
.small-text{
  color:gray;
  font-size: 10;
   }

.small-points{
color: #ffffff;
margin-left: 5;
font-size: 14;
}
.status-img {
 margin-top: 4;
  margin-right: 20;
  width: 20;
  height: 20;
}
.ref-text{
margin-top: 5;
margin-left: 15;
margin-right: 20;
font-size: 13;
vertical-align: center;
}
.user-img {
 margin-top: 0;
  width: 25;
  height: 30;
 vertical-align: center;
}
.user1-img {
 margin-left: 85;
 margin-right: 10;
 margin-top: 0;
 width: 25;
 height: 30;
 vertical-align: center;
}
</style>