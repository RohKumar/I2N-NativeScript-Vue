<template>
  <Page >
    <ActionBar title="My Cards">
    
    </ActionBar>

    <GridLayout class="page"
    rows="*,auto">
        <StackLayout row="0" class="form">
            <label class="topLabel"
            :text="lText"
            horizontalAlignment="center"/>
        </StackLayout>

        <GridLayout row="1" class="bottomGrid"
        rows="auto,auto,auto">
           <Image
            verticalAlignment="bottom"
            stretch="aspectFill"
            row="0"
            class="centerLabel"
            src="~/assets/images/addCard.png"
            @tap="onClickI"/>
            <label class="textLabel"
            row="1"
            horizontalAlignment="center"
            text="ADD NEW CARD"/>
            <label class="small-text"
            row="2"
            horizontalAlignment="center"
            text="Please enter Credit Card Information"/>
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
import ItemService from "../../services/item.service";

const itemService = new ItemService();

export default {
   data() {
    return {
      lText:"",
      itemList:[],
    }
   }, 
   mounted(){
     itemService.getItems().then(
      (response) => {
        this.itemList = response.content.toJSON().payload
        this.itemId = this.itemList.map(items => {
          return items.item_id+items.item_name;

        })
      },
      (e) => {
        console.log("error", e);
      }
    );
   },
   methods:{
     onClickI(){
       console.log(this.itemList[1].item_name);
       this.lText=this.itemId;
       
     },
   },

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
  flex-grow: 2;
  vertical-align: middle;
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
.centerLabel{
   width: 60;
  height: 60;
}
.small-text{
  color:gray;
  font-size: 10;
   }
</style>