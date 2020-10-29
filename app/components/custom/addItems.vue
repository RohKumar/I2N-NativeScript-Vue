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
            autocapitalizationType="none"
            v-model="item.name"
            returnKeyType="next"
            fontSize="18"
            required
          />
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
      lText:"",
      item: {
          name: "",
          cover: "",
          //images:{},
          category: "",
          categoryTag: "",
          price: 0,
          likes: 0,
          isLike: '',
          isFavorite:'',
          comments:'',
          rating: '',
          description: "",
        },
      itemList:[],
    }
   }, 
   mounted(){
     
   },
   methods:{
     
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
</style>