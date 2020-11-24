<template>
  <Page>
    <ActionBar title="Help and support"/>
    
    
     <StackLayout class="page">
      
        <StackLayout>
          <GridLayout class="chatGrid" rows=auto,auto columns=auto,auto>
            <Image class="users" row=0 col=0 src="~/assets/images/chat.png"/>
            <Label class="chat" row=0 col=1 text="Chat with us"/>
          </GridLayout>

          <StackLayout>
            <Button class="emailBtn" row=1 col=0 @tap="onEmailTap" text="Email LittiChockha Support"/>
          </StackLayout>

            <GridLayout class="userGrid" rows=auto,auto,auto columns=auto,auto,auto>
              <Image class="users" row=0 col=0 src="~/assets/images/food-store.png"/>
              <Image class="users" row=0 col=1 src="~/assets/images/food-delivery.png"/>
              <Image class="users" row=0 col=2 src="~/assets/images/home-delivery.png"/>

              <Label class="userLabel" row=1 col=0 text="Restaurant"/>
              <Label class="userLabel" row=1 col=1 text="Partner"/>
              <Label class="userLabel" row=1 col=2 text="Customer"/>

              <Button class="callBtn" @tap="callR" row=2 col=0 text="0319472414"/>
              <Button class="callBtn" @tap="callP" row=2 col=1 text="0324729424"/>
              <Button class="callBtn" @tap="callC" row=2 col=2 text="0338924521"/>

            </GridLayout>

        </StackLayout>

        <StackLayout>
            <Button class="faq"  @tap="onFaqTap" editable="false" text="Try Our FAQ's First"/>
        </StackLayout>
      
   </StackLayout>
  </Page>
</template>


<script>
const link = require("tns-core-modules/utils/utils");
const call = require('nativescript-phone');
const emailLitti = require('nativescript-email');
export default {
  components: {

  },
  computed: {

  },
methods: {
onFaqTap(){
  link.openUrl("http://littichoka.org");
},
onEmailTap(){
emailLitti.available().then((result) => {
  if(result === true){
    emailLitti.compose({
      subject: 'Need Support From LittiChockha',
      to:['rohit@idea2network.com.au']
    }).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    })
  }
})
},
callR(){
call.dial('0319472414',true)
},
callP(){
call.dial('0324729424',true)
},
callC(){
call.dial('0338924521',true)
}
},
  mounted() {
    
  },
  data() {
    return {
  
    };
  },

};
</script>

<style>
.title{
    color: #e84545;
    font-size: 35;
    font-family: Arial, Helvetica, sans-serif;
}
.page{
  margin: 10 20 20 20;
}
.chat{
  margin-top: 25;
  font-size: 18;
}
.chatGrid{
margin-bottom: 15;
}
.help{
    margin-top: 15;
    margin-bottom: 50;
    border-bottom-color: transparent;
    border-bottom-width: 1;
    text-align: left;
    font-size: 18;

}
.faq{
    color: white;
    background-color: #e84545;
    margin-bottom: 20;
    text-align: center;
   margin-top: 70;
    font-size: 20;
  font-weight: 600;
}
.users{
  width: 100;
  height: 100;
  margin-left: 15;
}
.userLabel{
  margin-left: 25;
  font-size: 15;
}
.emailBtn{
  margin-bottom: 20;
   color: white;
    background-color: #e84545;
     font-size: 20;
  font-weight: 600;
}
.callBtn{
  margin-left: 10;
  margin-right: 5;
  height:50;
}

</style>