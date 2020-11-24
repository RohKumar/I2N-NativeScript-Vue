<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <!-- @loaded="onLoaded" -->
<StackLayout class="main" verticalAlignment="top">
    <GridLayout rows="auto,auto,220,auto,auto,auto,auto" columns="auto">
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
    <Label :text="userName" fontWeight="bold" class="small-text"/>
    <Label text="1 Example Street" class="small-text" />
    <Label text="Sunshine West,Melbourne,Vic3020" class="small-text"/>
    <StackLayout width="100%" marginTop="5" class="line" />
    
    <Label marginTop="8" text="Order Conformation"/>
      </StackLayout>
       <GridLayout  row="2" width="100%" backgroundColor="white">
        <ListView ref="listview" separatorColor="transparent" for="item in cart" :key="index">
        <v-template>
       <StackLayout class="main">

        <StackLayout class="content">
        <GridLayout  columns="auto,auto,auto" rows="auto" verticalAlignment="center">
            
            <Image row="0" col="0"  stretch="aspectFill" class="card-img" @tap="onClickButton()"
                :src="item.itemImage" />
            
            <GridLayout row="0" col="1" width="170" columns="auto," rows="auto,auto" class="details">
                <Label row="0" col="0" width= "170" class="item-name" textwrap="true"
                     horizontalAlignment="left"
                    :text="item.itemName" />
                     
                    <Label row="1" col="0" class="item-name" horizontalAlignment="left"
                        :text="item.itemCategory" />
                     
            </GridLayout>

                <Button row="0" col="2"  class="addLabel" @tap="onDeleteButton(item)"
                    horizontalAlignment="right" verticalAlignment="top"
                    :text="item.price "/>

        </GridLayout>
            <StackLayout width="100%" marginTop="5" class="line" />

            <!-- Here the problem in scroll transistion -->
        
        </StackLayout>

        <StackLayout width="100%" class="lineBreak" />


    </StackLayout>
    </v-template>
    </ListView>
      </GridLayout>
      <StackLayout row ="3" width="100%"  marginBottom="1" class="line" />
       <GridLayout row ="4" rows="auto,auto,auto" verticalAlignment="center"  cols="auto,*" width="100%" >
       <Label row="0" col="0" text="No of Items"  marginLeft="16" horizontalAlignment="left" class="small-text" />
       <Label row="0" col="1" :text="totalItems"  marginRight="30" horizontalAlignment="right" class="small-text" /> 
       <Label row="1" col="0" text="Order Total"  marginLeft="16" horizontalAlignment="left" class="content" />
       <Label row="1" col="1" :text="toatlPrice"  marginRight="30" horizontalAlignment="right" class="content" />
       <Label row="2" col="0" text="Reward Points" horizontalAlignment="left" marginLeft="16" class="small-text"/>
       <Label row="2" col="1" :text="rewards"  horizontalAlignment="right" marginRight="30" class="small-text" />
       </GridLayout>
       <StackLayout row ="5" class="first">
        <StackLayout width="100%" class="line" />
          <Label marginTop="14" text="Select Payment Type"/>
        <DropDown
            marginTop="8"
            fontWeight="bold"
            ref="dropDownPaymentType"
            selectedIndex="0"
            hint="Payment Type"
            :items="payments"
            class="item-drop-down"
          ></DropDown>
        </StackLayout>
    </GridLayout>
    <Button text="PayOut" marginTop="190" verticalAlignment="bottom" @tap="onPaymnetTap(cart)" class="btn btn-primary m-t-20" />
    </StackLayout>
    </page>
</template>

<script>
    import Home from "../Home";
    import OrderService from "../../services/order.service";
import paymentVue from './payment.vue';
    const orderSerVice = new OrderService();

    export default{
    
    computed: {
    user() {
      return this.$store.getters.user;
    },
     },
      mounted(){
        this.fetchData();
      },
        data(){
          return {
      lastDelY: 0,
      headerCollapsed: false,
      images:"/assets/images/food/pancake640.jpg",
      totalItems:0,
      toatlPrice:0,
      rewards:0,
      userName:"",
      payments:["MasterCard","BankTransfer","B-Pay"],
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
              
              let uiD = this.user._id;
              this.userName = this.user.name;
              orderSerVice.getOrders().then(
              (response) => {
              console.log(response.content.toJSON().message)

              const orderList = response.content.toJSON().payload
              let tempList = orderList;
              const uList=tempList.filter(orders =>orders.userID==uiD);
              this.cart= uList;
              let totalItem = uList.length;
              this.totalItems = totalItem;

              let priceArray=uList.map(items => {
                  return items.price;})
                  let tprice=0;
                  for(let x=0;x<priceArray.length;x++){
                    tprice+=priceArray[x]
                  }
                this.toatlPrice=tprice+"$";
                let temp = tprice/10;
                this.rewards = temp.toFixed(2);
              },
              (e) => {
              console.log("error", e);
              }
              );
            },
            onPaymnetTap(cart){
              this.$navigateTo(paymentVue, { props: { cart: cart } });

            }
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
    .content{
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
        margin-top: 5;
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
    .small-text{
        color:gray;
        font-size: 12;
        margin-left: 20;
   }
   .item-drop-down {
      font-size: 15;
      height: 25;
      padding: 4;
      width: 100%;
      border: 10;
      background-color: white;
      color: black;
      border-color: #000000;
    }
    .btn-primary {
        height: 50;
        margin: 10 5 15 5;
        background-color: #d51a1a;
        border-radius: 5;
        font-size: 17;
        font-weight: 600;
    }
</style>