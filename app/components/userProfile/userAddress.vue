<template>
  <Page>

    <ActionBar title="My Addresses">
    </ActionBar>

    <StackLayout class="mainGrid">
      <Label class="name" :text="name"/>
          <Label  class="phone" :text="phone"/>
        <GridLayout class="tabView" columns="*" rows=480,auto>
          
          <ListView ref="listview" separatorColor="transparent" for="address in addresses" :key="index">
          <v-template>
            <GridLayout class="firstGrid"
          backgroundColor="#ffffff"
          width=100%
          row=0
          columns=*,auto,auto
          rows=auto,auto>
          <Button row=1 col=0 class="address" :text="address.street+address.city+address.state+address.postcode"/>
          <Image 
            row=1
            col=1
            horizontalAlignment="right"
            stretch="aspectFill"
            class="edit-img" 
            src="~/assets/images/edit-icon.png"/>
            <Image 
            row=1
            col=2
            horizontalAlignment="right"
            stretch="aspectFill"
            class="edit-img"
            src="~/assets/images/right-arrow.png"/>
          
          </GridLayout>
          </v-template>
        </ListView>
        <!-- <Label  @tap= "promptAddress" row=1 class="prompt"  horizontalAlignment="stretch" text="Add New Address"/> -->
         <GridLayout row="1" class="bottomGrid"
        rows="auto,auto,auto">
           <Image
            verticalAlignment="bottom"
            stretch="aspectFill"
            row="0"
            class="centerLabel"
            src="~/assets/images/addCard.png"
            @tap= "promptAddress"/>
            <label class="textLabel"
            row="1"
            horizontalAlignment="center"
            text="Add New Address"/>
            <label class="small-text"
            row="2"
            horizontalAlignment="center"
            text="Please enter Address details"/>
        </GridLayout>
    </GridLayout>
    </StackLayout>
    
  </Page>
</template>


<script>
import AddressForm from './addressForm'
import LocationService from "../../services/location.service";
const locationService = new LocationService(); 

export default
{
    data()
    {
      return{
        name:"",
        phone:"",
        addresses: [
        {
          street:"",
          city:"",
          state:"",
          postcode:""
          }
        ]
        
      }
    },
    computed: {
    user() {
      return this.$store.getters.user;
    }
    },
    mounted()
    {
        this.fetchAddresses();
    },
  
    methods:
    {
      fetchAddresses()
      {
        let uiD=this.user._id;
              console.log(uiD);
        let uname=this.user.name;
        this.name = uname;
        let phn = this.user.contactNumber;
        this.phone = phn;
        locationService.getAllLocation().then((response) => {
                console.log(response.content.toJSON().message);

                const userAddresses=response.content.toJSON().payload;
                let tempList = userAddresses;
              const uList=tempList.filter(address =>address.userId==uiD);
              this.addresses=uList;
              console.log(this.addresses);
                },
                (e) => {
                console.log("error", e);
                });
      },
      promptAddress()
      {
        this.$navigateTo(AddressForm,{});
      }
    },


}

</script>


<style scoped>

ActionBar {
background-color: #bd2122;
color: #ffffff;
}

.prompt{
color: #ffffff;
text-align: center;
height: 50;
margin: 30 5 15 5;
background-color: #d51a1a;
border-radius: 5;
font-size: 20;
font-weight: 600;

}

.edit-img{
  margin-top: 4;
  width: 20;
  height: 20;
  margin-right: 10;
}
.name{
  color: black;
  font-weight: bold;
  font-size: 15;
  margin-top: 4;
  margin-left: 2;
  horizontal-align: left;
  vertical-align: center;
}
.phone{
  color: black;
  font-size: 12;
  margin-top: 4;
  margin-left: 2;
  horizontal-align: left;
  vertical-align: center;
}
.address{
  color:gray
  
}
.bottomGrid{
   position: fixed;
   bottom: 0;
   left: 50%;
   margin-bottom: 20;
}
.firstGrid{ 
    margin-top: 20;
    margin-left:25;
    margin-right: 15;
    background-color: red;
   
}
.mainGrid{
  margin-top: 10;
  margin-left: 15;
  margin-right: 15;
}
.centerLabel{
   width: 60;
  height: 60;
}
.small-text{
  color:gray;
  font-size: 10;
   }

</style>