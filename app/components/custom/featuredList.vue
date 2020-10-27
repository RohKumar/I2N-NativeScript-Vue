<template>
  <page >
      <ActionBar title="Featured Items">
    </ActionBar>
 <StackLayout class="page">
     <GridLayout class="itemGrid" width="100%" backgroundColor="white">
         <ListView ref="listview" separatorColor="transparent"  for="item in items" :key="index">
             <v-template>
                 <GridLayout class="itemList" rows="auto auto auto" columns="*">
                    <Image row=0 stretch="aspectFill" class="card-img" :src="item.cover"/>
                    <GridLayout row="1" class="itemValues" rows="auto auto" columns="* auto">
                        <Label row=0 col=0 :text="item.name" />
                        <Label row=0 col=1 :text="item.price" />
                    </GridLayout>
                 </GridLayout>
             </v-template>
         </ListView>
     </GridLayout>

 </StackLayout>

  </page>
</template>
<script>
    import Item from "./item";
    import ItemDetails from "../ItemDetails";
import MenuService from "../../services/menu.service";

const menuService = new MenuService();
export default {
  components: {
      Item
  },
  computed: {

  },

  mounted() {
      this.fetchFeaturedItems();
  },
  data() {
    return {
  
        items:[{
                name:"",
                cover:"",
                price:"",
                category:"",
                isFeatured:"",
                Flag:""
        }],
    };
  },

  methods:
  {
      fetchFeaturedItems()
      {
          let value="Y";
          menuService.getMenu().then((response) => {
                console.log(response.content.toJSON().message);

                const featuredItems=response.content.toJSON().payload;
                let tempList = featuredItems;
              const uList=tempList.filter(items =>items.isFeatured==value);
              this.items=uList;
              console.log(this.items);
                },
                (e) => {
                console.log("error", e);
                });
      },
      	showItem(payload) {
			this.$navigateTo(ItemDetails,{
				props: {
					item: payload
				},
				animated: true,
				transition: {
					name: "slideTop",
					duration: 380,
					curve: "easeIn"
				}
			})
		},

  },

};
</script>

<style>
.card-img {
        width: 95%;
        height: 150;
        margin-bottom: 10;
        margin-top: 10;
        margin-left: 10;
        margin-right: 10;
    }
    ActionBar {
background-color: #bd2122;
color: #ffffff;
}
.itemValues
{
  font-size: 16;
  font-weight: bold;
  margin-left: 10;
  margin-right: 10;
}
</style>