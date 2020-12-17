<template>
  <Page>
    <!-- @loaded="onLoaded" -->
    <ActionBar>
    <StackLayout orientation="horizontal"
    ios:horizontalAlignment="center"
    android:horizontalAlignment="center">
    <Label text="Restaurant "></Label>
  </StackLayout>
    </ActionBar>
 <GridLayout rows="*" height="1500px">
  <RadSideDrawer ref="drawer">
    <StackLayout ~drawerContent backgroundColor="white">
      <StackLayout height="56"  style="text-align: center; vertical-align: center;">
        <Label text="Restaurant Home" />
      </StackLayout>
      <StackLayout >
        <Label text="Dashboard" padding="10" />
        <Label text="Deliveries" padding="10" />
        <Label text="Menu" padding="10" />
        <Label text="Payments" padding="10"  />
        <Label text="Promotions" padding="10" />
        <Label text="Support" padding="10" />
        <Label text="Feedback" padding="10" @tap="onFeedbackTap"/>
        <Label text="Grievances" padding="10" />
      </StackLayout>
      <Label text="Close" color="lightgray" padding="10" style="horizontal-align: center" @tap="onCloseDrawerTap" />
    </StackLayout>
    <StackLayout ~mainContent>
      <Label :text="greetings" textWrap="true" fontSize="20" padding="10" />
      <Button text="Restaurant Home" @tap="onOpenDrawerTap" margin="10" style="horizontal-align: left" />
      <Button text="Restaurant Drivers"  margin="10" style="horizontal-align: left" />
      <Button text="Our Patnership" margin="10" style="horizontal-align: left" />
      <Button text="Litti Chokha Image Guidelines " margin="10" style="horizontal-align: left" />
    </StackLayout>
  </RadSideDrawer>
</GridLayout> 

  </Page>
</template>
<script>
import Feedback from "./restaurantFeedback";
import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);

export default {
methods: {
  onOpenDrawerTap() {
  this.$refs.drawer.nativeView.showDrawer();
},
onCloseDrawerTap() {
  this.$refs.drawer.nativeView.closeDrawer();
},
onFeedbackTap(){
    this.$navigateTo(Feedback,{});
},
},

    data () {
        return {
greetings: "Thanks for choosing Litti chokha. Together, we will serve more people and achieve our shared visions.",

        };
    },
}
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>