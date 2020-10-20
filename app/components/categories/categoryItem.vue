<template>
  <page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <!-- @loaded="onLoaded" -->

    <GridLayout rows="auto,*" columns="auto">
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

        <Label col="0" row="0" text="Menu"  @tap="onTTap" horizontalAlignment="center" class="status-title"></Label>
        
        <Image
          col="1"
          row="0"
          color="white"
          horizontalAlignment="right"
          class="status-img"
          src="~/assets/images/navcart.png"
        />
      </GridLayout>
      <GridLayout  row="1" width="100%" backgroundColor="white">
        <ListView ref="listview" separatorColor="transparent" for="item in items" :key="index">
        <v-template>
            <item :item="item" @clicked="showItem(item)" />
          </v-template>
        </ListView>
      </GridLayout>
    </GridLayout>
    </page>
</template>

<script>
    import Item from "../custom/item";
    import { isIOS,isAndroid} from "tns-core-modules/platform";
    import ItemDetails from "../ItemDetails";
    import MenuService from "../../services/menu.service";
    import Category from "../custom/category";
    import Home from "../Home";
const menuService = new MenuService();

   export default {
      props: ["item",'category'],
       
    components: {
    Item,
    Category,
    Home,
  }, 
  data() {
    return {
      lastDelY: 0,
      headerCollapsed: false,
      itest:[],
      items: [
        {
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
        ],
     };
    },
  computed: {
    user() {
      return this.$store.getters.user;
    }, 
  },
  created(){
      // this.items=this.fetchData();

  },
  mounted(){
        this.fetchData();
   },
    methods: {
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
        
        fetchData(){
          let catID=1;
          switch (this.category) {
            case "Beer":
              catID=1;
              break;
            case "Cake":
              catID=2;
              break;
            case "Pancake":
              catID=3;
              break;
            case "Burger":
              catID=4;
              break;
            default:
              catID=1;
              break;
          }
            menuService.getMenu().then(
      (response) => {
        this.itemList = response.content.toJSON().payload
        let myList=this.itemList.filter(items =>items.category_id==catID);
          this.items= myList;
      },
      (e) => {
        console.log("error", e);
          }
     );
     },
     
    
      onTTap(){
     console.log(this.category);
    },
    }
   }
</script>
<style scoped>
    .item-category {
        font-size: 14;
        color: #828282;
    }

    .rating-icon {
        padding-top: 3;
        color: #FFE900;
        font-size: 14;
        margin-left: 10;
    }

    .rating-value {
        margin-left: 5;
    }

    .heart-active {
        color: #b51213;
    }

    .default {
        color: #828282;
    }

    .layout {
        vertical-align: bottom;
        color: #828282;
        font-size: 14;
        height: 30;
        padding: 5 0 5 0;
    }

    .like-icon {
        vertical-align: bottom;
        height: 30;
        font-size: 16;
        margin-right: 2;
        padding: 5 5 5 5;
    }

    .item-name {
        font-size: 14;
        font-weight: bold;
    }

    .item-category {
        font-size: 14;
        color: #828282;
    }

    .category-icon {
        text-align: center;
        padding-top: 5;
        color: white;
        border-color: white;
        vertical-align: center;
        font-size: 25;
        border-width: 1;
        border-radius: 50%;
        margin-top: 4;
        margin-right: 15;
        width: 40;
        height: 40;
    }

    .content {
        margin-left: 16;
        margin-right: 16;
        margin-bottom: 3;
        margin-top: 16;
    }

    .card-img {
        width: 100%;
        height: 150;
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