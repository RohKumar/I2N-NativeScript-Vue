<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
  
   <StackLayout>
      <GridLayout
        row="0"
        backgroundColor="#bd2122"
        verticalAlignment="top"
        height="50"
        width="100%"
        rows="auto"
        columns="*,auto,auto"
      >
        <Image
          col="0"
          row="0"
          @tap="$navigateBack"
          horizontalAlignment="left"
            class="status-img"
          src="~/assets/images/back.png"
        />

        <Label col="0" row="0" text="Add Item"  @tap="onTTap" horizontalAlignment="center" class="status-title"></Label>
        
        <Image
          col="1"
          row="0"
          color="white"
          horizontalAlignment="right"
          class="status-img"
          src="~/assets/images/navcart.png"
        />
      </GridLayout>
   <StackLayout class="main">
        <TextField
            class="input"
            hint="Item Name"
            autocorrect="false"
            horizontalAlignment="left"
            width="50%"
            autocapitalizationType="none"
            v-model="item.name"
            returnKeyType="next"
            fontSize="18"
            required
        />
        <Label text="Description" class="heading"/>
        <TextView v-model="item.description"/>
        <StackLayout height="50" >
          <Label text="Category" class="heading"/>
          <DropDown
            ref="dropDownList"
            selectedIndex="0"
            hint="Category"
            :items="categoryList"
            v-model="item.category"
            @selectedIndexChanged="dropDownSelectedIndexChanged"
            class="item-drop-down"
          ></DropDown>  
        </StackLayout>
        <GridLayout rows="auto" columns="auto,auto">
         <Label marginTop="20" row="0" column="0" text="Price:" class="heading"/>
          <TextField
            row="0"
            column="1"
            class="input"
            marginLeft="10"
            hint="$"
            autocorrect="false"
            width="25%"
            keyboardType="number"
            v-model="item.price"
            returnKeyType="next"
            fontSize="18"
            required
        />
        </GridLayout>
        <Button :text="'Add'" @tap="addItem(item)" class="btn btn-primary m-t-20" />

   </StackLayout>
   </StackLayout>
      </page>
</template>

<script>
import MenuService from "../../services/menu.service";

const menuService = new MenuService();

export default {
   data() {
    return {
      categoryList:["Beer","Cake","Pancake","Burger"],
      lText:"",
      item: {
          name: "",
          cover: "~/assets/images/food/pancake640.jpg",
          //images:"",
          category: "",
          categoryTag: "#e4ce0d",
          price: 0,
          likes: 0,
          isLike: 'false',
          isFavorite:'true',
          comments:'',
          rating: '3',
          description: "",
        },
      itemList:[],
    }
   }, 
   mounted(){
     
   },
   methods:{
     dropDownSelectedIndexChanged() {
      const index = this.$refs.dropDownList.nativeView.selectedIndex;
      // this.item.category = this.roleList[index].value;
    },
     addItem(item){
       console.log(this.item)
       menuService.addItem(item).then((response) => {
                const result = response.content.toJSON();
                if (isAndroid) {
                toastMessage(response.content.toJSON().message);
                }
                console.log(response.content.toJSON().message);
                },
                (e) => {
                console.log("error", e);
                });
     }
   },

  }
  
</script>

<style scoped>
.main{
    margin-left: 15;
    margin-right: 15;
    margin-top: 15;
    
}
.input {
  font-size: 18;
  placeholder-color: #a8a8a8;
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
  margin: 30 5 15 5;
  background-color: #d51a1a;
  border-radius: 5;
  font-size: 20;
  font-weight: 600;
}
</style>