<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <!-- @loaded="onLoaded" -->
 <FlexboxLayout class="page">
     <Button text="Admin" @tap="onButtonTap" />
 </FlexboxLayout>

  </page>
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