<template>
  <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <!-- @loaded="onLoaded" -->
    <ActionBar>
    <StackLayout orientation="horizontal"
    ios:horizontalAlignment="center"
    android:horizontalAlignment="left">
    <Label text="Customer Ratings"></Label>
  </StackLayout>
    </ActionBar>
 <GridLayout>
     <Label text="Ratings and Reviews"/>
 </GridLayout>

  </Page>
</template>
<script>


export default {
  components: {

  },
  computed: {

  },

  mounted() {
    // SwissArmyKnife.setAndroidStatusBarColor("#b51213");
  },
  data() {
    return {
  
    };
  },

};
</script>

<style>

</style>