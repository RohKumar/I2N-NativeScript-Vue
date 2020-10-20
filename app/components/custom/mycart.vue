<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <!-- @loaded="onLoaded" -->
<StackLayout class="main" verticalAlignment="top">
    <GridLayout rows="auto,480,auto,auto,auto,auto" columns="auto">
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
        <ListView ref="listview" separatorColor="transparent" for="item in cart" :key="index">
        <v-template>
       <StackLayout class="main">

        <StackLayout class="content">
        <GridLayout  columns="auto,auto,auto" rows="auto" verticalAlignment="center">
            
            <Image row="0" col="0"  stretch="aspectFill" class="card-img"
                :src="item.itemImage" />
            
            <GridLayout row="0" col="1" width="170" columns="auto," rows="auto,auto,auto" class="details">
                <Label row="0" col="0" width= "170" class="item-name" textwrap="true"
                     horizontalAlignment="left"
                    :text="item.itemName" />
                
                    <Label row="1" col="0" class="item-category" textwrap="true"
                        horizontalAlignment="left"
                        :text="item.price" />
                     
                    <Label row="2" col="0" class="item-name" horizontalAlignment="left"
                        :text="item.itemCategory" />
                     
            </GridLayout>

                <Button row="0" col="2"  class="addLabel" @tap="onDeleteButton(item)"
                    horizontalAlignment="right" verticalAlignment="top"
                    text="Delete" />

        </GridLayout>
            <StackLayout width="100%" marginTop="5" class="line" />

            <!-- Here the problem in scroll transistion -->
        
        </StackLayout>

        <StackLayout width="100%" class="lineBreak" />


    </StackLayout>
    </v-template>
    </ListView>
      </GridLayout>
      <StackLayout row ="2" width="100%"  marginBottom="5" class="line" />
       <GridLayout row ="3" verticalAlignment="center"  cols="auto,*" width="100%" >
       <Label col="0" text="Order Total" horizontalAlignment="left" class="content" />
       <Label col="1" :text="toatlPrice"  horizontalAlignment="right" class="pcontent" />
       </GridLayout>
        <StackLayout row ="4" width="100%" marginTop="20" class="line" />
    </GridLayout>
    <Button  text="ORDER NOW" verticalAlignment="center"  horizontalAlignment="bottom"  @tap="goToCheckout()" class="btn btn-primary m-t-20" />
</StackLayout>
    </page>
</template>

<script>
    import Item from "./item";
    import Cart from "./cart";
    import Home from "../Home";
    import navBottom from "./navBottom";
    import { isIOS,isAndroid} from "tns-core-modules/platform";
    import ItemDetails from "../ItemDetails";
    import OrderService from "../../services/order.service";
    import Checkout from "./checkout";
    import Dialog from 'tns-core-modules/ui/dialogs';

    const orderService = new OrderService();

   export default {
         props: ["item"],
    components: {
    ItemDetails,
    Home,
    navBottom,
    Item,
    Cart,
  },
  mounted(){
        this.fetchData();
   },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    orderList(){
      return this.$store.getters.orderList;
    },
  },
   data() {
   let user=this.$store.getters.user;
   let orderList=this.$store.getters.orderList;
   
    return {
      lastDelY: 0,
      headerCollapsed: false,
      images:"/assets/images/food/pancake640.jpg",
      toatlPrice:0,
      cart: [
        {
          _id:"",
          itemName:"",
          itemImage:"",
          itemCategory:"",
          price:0,
          userID:"",
        },  
      ],
     }
     
    },
   	methods: {
            home() {
            this.$navigateTo(Home);
            console.log()
            },

            fetchData(){
              let uiD=this.user._id;
              console.log(uiD)

              orderService.getOrders().then(
              (response) => {
              console.log(response.content.toJSON().message)

              const orderList = response.content.toJSON().payload
              let tempList = orderList;
              const uList=tempList.filter(orders =>orders.userID==uiD);
              console.log(uList)
              this.cart= uList;

              let priceArray=uList.map(items => {
                  return items.price;})
                  let tprice=0;
                  for(let x=0;x<priceArray.length;x++){
                    tprice+=priceArray[x]
                  }
                  tprice = tprice.toFixed(2);
                this.toatlPrice=tprice;
              },
              (e) => {
              console.log("error", e);
              }
              );
            },
            onDeleteButton(item){
              const delItem={
                _id:item._id,
                itemName:item.itemName,
                itemImage:item.itemImage,
                itemCategory:item.itemCategory,
                price:item.price,
                userID:item.userID
              }
              confirm({
                title: "Delete Item",
                message: "Are you sure?",
                okButtonText: "Delete",
                cancelButtonText: "Cancel"
                }).then(result => {
              if(result){
              console.log(delItem)

              orderService.deleteOne(delItem).then((response) => {
                console.log(response.content.toJSON().message);
                },
                (e) => {
                console.log("error", e);
                });
                this.fetchData();
              }
              });
            },
            goToCheckout(){
              this.$navigateTo(Checkout);
            }
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
       .default {
        color: #828282;
    }
    .addLabel{
        font-size: 12;
        color:white;
        padding: 7;
        height: 20;
        margin: 8 2 4 15;
        background-color: #d51a1a;
        border-radius: 8;
        font-weight: 600;
    }
    .layout {
        vertical-align: bottom;
        color: #828282;
        font-size: 12;
        height: 30;
        padding: 5 0 5 0;
    }

    .item-name {
      color: black;
        font-size: 12;
    }
    .item-category {
        margin-top:5;
        font-size: 12;
        color: #bd2122;
        font-weight: bold;
    }
    .details{
        margin-left: 14;   
    }
    .content {
        margin-left: 16;
        margin-right: 16;
        margin-bottom: 3;
        margin-top: 16;
    }
    .card-img {
        width: 80;
        height: 80;
        margin-bottom: 5;
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
</style>