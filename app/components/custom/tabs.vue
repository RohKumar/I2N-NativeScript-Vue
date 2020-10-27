<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
<TabView id="tabViewContainer">
    <TabViewItem title="Categories" >
            <Frame id="Menu" ><Menu/></Frame> 
    </TabViewItem>
    <TabViewItem title="Items">
            <Frame id="showItems" ><Items/></Frame>
    </TabViewItem>
    <TabViewItem title="Map" >
                <Frame id="Category" ><Map/></Frame> 
    </TabViewItem>
</TabView>
  </page>
</template>
<script>
import Menu from "./Menu";
import Map from "./map";
import Items from "./showItems";
export default {
  components: {
      Menu,
      Map,
      Items,
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