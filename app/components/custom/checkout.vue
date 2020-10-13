<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <!-- @loaded="onLoaded" -->
<StackLayout class="main" verticalAlignment="top">
    <GridLayout rows="auto,auto,auto,auto" columns="auto">
      <GridLayout
        row="0"
        backgroundColor="#ffffff"
        verticalAlignment="top"
        height="50"
        width="100%"
        rows="auto"
        columns="*,auto"
      >
        <Image
          col="0"
          row="0"
          @tap="home"
          horizontalAlignment="left"
            class="status-img"
          src="~/assets/images/back.png"
        />
        <Label col="0" row="0" text="Checkout"  horizontalAlignment="center" class="title"></Label>
      </GridLayout>
      <StackLayout row ="1" width="100%" class="first">
    <Label text="Address" verticalAlignment="left" width="100%" />
    <Label text="1 Example Street" class="small-text" />
    <Label text="Sunshine West,Melbourne,Vic3020" class="small-text"/>
    <StackLayout width="100%" marginTop="5" class="line" />
    
    <Label marginTop="8" text="Order Conformation"/>
      </StackLayout>
      
      </GridLayout>
    </StackLayout>
    </page>
</template>

<script>
    import Home from "../Home";

    export default{
        methods: {
            home() {
            this.$navigateTo(Home);
            console.log()
            },
        }
    }

</script>

<style scoped>
    .title{
        color: #bd2122;
        font-weight: bold;
    }
    .first{ 
    margin-top: 10;
   margin-left:15;
    margin-right: 15;
    font-size: 15;
  }
  .line {
        height: 0.5;
        border: none;
        color: #e0e0e0;
        background-color: #e0e0e0;
    }
     .lineBreak {
        height: 7;
        border: none;
        color: #e0e0e0;
        background-color: #e0e0e0;
    }
    .small-text{
  color:gray;
  font-size: 12;
   margin-left: 20;
   }
</style>