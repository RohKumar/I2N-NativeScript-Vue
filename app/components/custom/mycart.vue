<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <!-- @loaded="onLoaded" -->
<StackLayout class="main" verticalAlignment="top">
    <GridLayout rows="auto,580,auto,auto,auto,auto" columns="auto">
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

        <Label col="0" row="0" text="My Cart"  horizontalAlignment="center" class="title"></Label>
    
      </GridLayout>
      <GridLayout  row="1" width="100%" backgroundColor="white">
        <ListView ref="listview" separatorColor="transparent" for="cart in carts" :key="index">
          <v-template>
            <cart :cart="cart"  />
          </v-template>
        </ListView>
      </GridLayout>
      <StackLayout row ="2" width="100%"  marginBottom="5" class="line" />
       <GridLayout row ="3" verticalAlignment="center"  cols="auto,*" width="100%" >
       <Label col="0" text="Order Total" horizontalAlignment="left" class="content" />
       <Label col="1" :text="this.item.price"  horizontalAlignment="right" class="pcontent" />
       </GridLayout>
        <StackLayout row ="4" width="100%" marginTop="20" class="line" />
    </GridLayout>
    <Button  text="ORDER NOW" verticalAlignment="center"  horizontalAlignment="bottom"  class="btn btn-primary m-t-20" />
</StackLayout>
    </page>
</template>

<script>
    import Item from "./item";
    import Cart from "./cart";
    import Home from "../Home";
    import navBottom from "./navBottom";
    import Beer  from "../categories/beer";
    import { isIOS,isAndroid} from "tns-core-modules/platform";
    import ItemDetails from "../ItemDetails";


   export default {
         props: ["item"],
    components: {
    ItemDetails,
    Home,
    navBottom,
    Item,
    Beer,
    Cart,
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
   data() {
   let user=this.$store.getters.user;
    return {
      lastDelY: 0,
      headerCollapsed: false,
      
      carts: [
        {
          name: this.item.name,
          cover: this.item.cover,
          category: this.item.category,
          price: this.item.price,
          rating: this.item.rating,
        },
        
      ],
     }
     
    },
   	methods: {
       home() {
                this.$navigateTo(Home);
            },
    },
   }
</script>
<style scoped>
    .title{
        color: #bd2122;
        font-weight: bold;
    }
    .content{
        margin-left: 16;
        font-size: 14;
        color: #bd2122;
        font-weight: bold;
    }
    .pcontent{
        margin-right: 30;
        font-size: 14;
        color: #bd2122;
        font-weight: bold;
    }
    .line {
        height: 0.5;
        border: none;
        color: #e0e0e0;
        background-color: #e0e0e0;
    }
    .btn-primary {
        height: 50;
        margin: 10 5 15 5;
        background-color: #d51a1a;
        border-radius: 5;
        font-size: 17;
        font-weight: 600;
    }
    .lineBreak {
        height: 7;
        border: none;
        color: #e0e0e0;
        background-color: #e0e0e0;
    }
</style>