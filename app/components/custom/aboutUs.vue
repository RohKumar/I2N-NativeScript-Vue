<template>
  <Page>
       <ActionBar title="About us"/>
    <!-- @loaded="onLoaded" -->
<FlexboxLayout class="page" >
 <StackLayout class="main" >
   <GridLayout rows=auto,auto columns=auto,auto>
     <Image  row=0 col=0 src="~/assets/images/LittiLogo.png" />
     <Label row=0 col=1 class="aboutLabel" text="Litti Chockha App"/>
   </GridLayout>
     <TextView class="intro" editable="false">
  <FormattedString>
    <Span text="
Litti Chokha is a mobile application designed for the convenience of the customer as well as the owners of restaurants.This is the universal custom application and can be utilised by most of the restaurants in the world.

Using this application:

Restaurant owners can update their menu items.

Restaurant owners can view the location of the person assigned for the delivery.

Customers can view the menu and can order online. " />
  </FormattedString>
</TextView>
<Button  class="aboutBtn" @tap="onClickMeTap" text="Want to Know More"/>
 </StackLayout>
</FlexboxLayout>
  </Page>
</template>
<script>

const link = require("tns-core-modules/utils/utils");
export default {
  components: {

  },
  computed: {

  },
  methods: {
    onClickMeTap(){
      link.openUrl("http://littichoka.org");
    }
    
  },

  mounted() {
    
  },
  data() {
    return {
  
    };
  },

};
</script>

<style>
.page {
  align-items: center;
  flex-direction: column;
  background-color: transparent;
}
.main {
    margin-top:10;
  margin-left: 30;
  margin-right: 30;
  
  vertical-align: middle;
}
.aboutLabel{
    color: #e84545;
    font-size: 30;
    font-family: Arial, Helvetica, sans-serif;
}
.intro{
    border-bottom-width: 1;
    border-bottom-color: transparent;
}
.aboutBtn
{
  height: 50;
  margin: 30 5 15 5;
  background-color: #d51a1a;
  color: white;
  border-radius: 5;
  font-size: 20;
  font-weight: 600;
}
</style>