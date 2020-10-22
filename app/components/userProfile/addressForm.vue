<template>
<Page>
    <ActionBar title="AddressForm">
    </ActionBar>
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <StackLayout class="input-field" marginBottom="25">
        <TextField  hint="Street" class="input" v-model="address.street"/>
        <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field" marginBottom="25">
        <TextField  hint="City" class="input" v-model="address.city"/>
        <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field" marginBottom="25">
        <TextField  hint="State" class="input" v-model="address.state"/>
        <StackLayout class="hr-light" />
        </StackLayout>

        <StackLayout class="input-field" marginBottom="25">
        <TextField  hint="PostCode" class="input" v-model="address.postcode"/>
        <StackLayout class="hr-light" />
        </StackLayout>
        <Button class="saveButton" @tap="save()" text="Save"/>
       
    </StackLayout>
    </FlexboxLayout>
</Page>
</template>


<script>
import UserAddress from "./userAddress";
import LocationService from "../../services/location.service";
const locationService = new LocationService();
export default {
  data() {
      let user=this.$store.getters.user;
      return {
      address:{
          street:"",
          city:"",
          state:"",
          postcode:""
          }
      };
    },
   computed: {
    user() {
      return this.$store.getters.user;
    },
   },
    methods: {
        save()
        {
        this.error = {
        street:"",
          city:"",
          state:"",
          postcode:"",
      };
            let temp={
                street:this.address.street +" ",
                city:this.address.city +" ",
                state:this.address.state+" ",
                postcode:this.address.postcode+" ",
                userId:this.user._id

            }
            if(temp.street ===' ')
            {
                alert({
                    title: "Error",
                    message: "Street name required",
                    okButtonText: "Ok"
                    }).then(() => {
                    console.log("Alert dialog closed");
                    });
                        

            }
            else if(temp.city ===' ')
            {
                    alert({
                    title: "Error",
                    message: "City name required",
                    okButtonText: "Ok"
                    }).then(() => {
                    console.log("Alert dialog closed");
                    });
            }
            else if(temp.state ===' ')
            {
                    alert({
                    title: "Error",
                    message: "State name required",
                    okButtonText: "Ok"
                    }).then(() => {
                    console.log("Alert dialog closed");
                    });
            }
             else if(temp.postcode ===' ')
            {
                   alert({
                    title: "Error",
                    message: "Postcode required",
                    okButtonText: "Ok"
                    }).then(() => {
                    console.log("Alert dialog closed");
                    });
            }  
            else
            {
               locationService.addLocation(temp).then((response) => {
                    console.log(response.content.toJSON().message);
                    },
                    (e) => {
                    console.log("error", e);
                    });
                console.log(temp);

                alert({
                    title: "Success",
                    message: "Address added successfully",
                    okButtonText: "Ok"
                    }).then(() => {
                    this.$navigateTo(UserAddress,{});
                    });
                
            }
        }
      }
    
  }

</script>

<style scoped>
ActionBar {
background-color: #bd2122;
color: #ffffff;
}
.input-field {
  margin-bottom: 5;
}

.input {
  font-size: 12;
  placeholder-color: #a8a8a8;
}
.page {
  align-items: center;
  flex-direction: column;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}

.saveButton
{
  height: 50;
  margin: 30 5 15 5;
  background-color: #d51a1a;
  color: white;
  border-radius: 5;
  font-size: 20;
  font-weight: 600;
}
.addressLabel
{
   color: black;
  font-family: "Areial",sans-serif;
  font-size: 15;
  margin-left: 15;
  margin-top: 4;
  horizontal-align: left;
  vertical-align: center;
}

</style>>