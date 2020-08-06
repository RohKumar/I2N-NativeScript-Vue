<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
<TabView id="tabViewContainer">
    <TabViewItem title="Map" >
                <Frame id="Category" ><Map/></Frame> 
    </TabViewItem>
    <TabViewItem title="Menu" >
            <Frame id="Menu" ><Menu/></Frame> 
    </TabViewItem>
</TabView>
  </page>
</template>
<script>
import Menu from "./Menu";
import Map from "./map";
export default {
  components: {
      Menu,
      Map,
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