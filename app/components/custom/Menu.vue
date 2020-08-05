<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <!-- @loaded="onLoaded" -->
    <Label text="menu page loaded"/>
      <GridLayout  row="2" width="100%" backgroundColor="white">
        <ListView
          ref="listview"
          separatorColor="transparent"
          for="item in itemsCategory"
          :key="index"
        >
          <v-template>
            <Category :item="item"></Category>
          </v-template>
        </ListView>
      </GridLayout>


  </page>
</template>
<script>
import Category from "./category";
  
export default {
    props: ["item"],
  components: {
      Category
  },
  computed: {
    itemsCategory() {
      return this.category ? this.category.slice().reverse() : [];
    },
  },

  mounted() {
    // SwissArmyKnife.setAndroidStatusBarColor("#b51213");
  },
  data() {
    return {
        category: [
        {
          cover: "~/assets/images/food/burger640.jpg",
          category: "BURGER",
          count: "13",
        },
        {
          cover: "~/assets/images/food/pancake640.jpg",
          category: "PANCAKE",
          count: "5",
        },
        {
          cover: "~/assets/images/food/cake640.jpg",
          category: "CAKE",
          count: "9",
        },
        {
          cover: "~/assets/images/food/beer640.jpg",
          category: "BEER",
          count: "7",
        },
      ],
    };
  },

};
</script>

<style>

</style>