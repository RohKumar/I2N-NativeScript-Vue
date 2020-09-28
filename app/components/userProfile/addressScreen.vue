<template>
    <page >
    <ActionBar title="My Addresses">

        </ActionBar>
    
    <GridLayout class="page"
    rows="*,auto">
        <GridLayout>
           
            <StackLayout>

            <Label text="Gyan" height="30" class="form"/>
                    <StackLayout orientation="horizontal" height="30" columns="*,auto,auto">
                        <Label text="+93 13314120109" width="60%" class="ref-text"/>

                        <Image
                            stretch="aspectFill"
                            class="user-img"
                            src="~/assets/images/edit-icon.png"/> 
                        <Image
                            stretch="aspectFill"
                            class="user-img"
                            src="~/assets/images/cancel.png"/>

                    </StackLayout>
            <Label class="ref-text" text="817 Venice Blv,Los Angeles, CA 132453412, USA" height="30"/>
        </StackLayout>

        </GridLayout>

        <GridLayout row="1" class="bottomGrid">
           
            <label class="textLabel"
            row="1"
            horizontalAlignment="center"
            text="ADD NEW ARADDRESS"/>
            
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
margin-top: 10;
margin-left: 15;
margin-right: 20;
font-size: 13;
vertical-align: center;
}
.ref-text{
margin-left: 15;
margin-right: 20;
font-size: 13;
vertical-align: center;
}
.user-img {
 margin-top: 0;
 margin-left: 10;
 margin-right: 10;
 width: 25;
 height: 30;
 vertical-align: right;
}
.topLabel{
    color:gray;
}
.bottomGrid{
   position: fixed;
   bottom: 0;
   left: 50%;
   margin-bottom: 20;
}
.textLabel{
    margin-top: 4;
}
</style>