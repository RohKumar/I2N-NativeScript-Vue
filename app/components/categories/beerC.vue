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

        <Label col="0" row="0" text="Beer"  horizontalAlignment="center" class="status-title"></Label>
    
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
        <ListView ref="listview" separatorColor="transparent" for="beer in beers" :key="index">
          <v-template>
            <beer :beer="beer" @clicked="showItem(beer)" />
          </v-template>
        </ListView>
      </GridLayout>
    </GridLayout>
    </page>
</template>

<script>
    import Item from "../custom/item";
    import Beer  from "./beer";
    import { isIOS,isAndroid} from "tns-core-modules/platform";
    import ItemDetails from "../ItemDetails";

   export default {
    components: {
    Item,
    Beer,
  },
  computed: {
    
    user() {
      return this.$store.getters.user;
    },
  },
   data() {
    return {
      lastDelY: 0,
      headerCollapsed: false,
      
      beers: [
        {
          name: "Craft Hugo Twin Pack",
          cover: "~/assets/images/food/beer/beer2.jpg",
          images: [
            { src: "~/assets/images/food/beer/beer1.jpg" },
            { src: "~/assets/images/food/beer/beer6.jpg" },
            { src: "~/assets/images/food/beer/beer3.jpg" },
            { src: "~/assets/images/food/beer/beer5.jpg" },
            { src: "~/assets/images/food/beer/beer4.jpg" },
            { src: "~/assets/images/food/beer/beer8.jpg" },
          ],
          category: "2 pack",
          categoryTag: "#2D9CDB",
          price: "$20.49",
          likes: 891,
          isLike: true,
          isFavorite: true,
          comments: 7,
          rating: "4.0",
          description: "Craft hugo is a pale lager with .....",
        },
         {
          name: "Carlburg 330mL Bottles",
          cover: "~/assets/images/food/beer/beer9.jpg",
          images: [
             { src: "~/assets/images/food/beer/beer8.jpg" },
            { src: "~/assets/images/food/beer/beer4.jpg" },
            { src: "~/assets/images/food/beer/beer5.jpg" },
            { src: "~/assets/images/food/beer/beer3.jpg" },
            { src: "~/assets/images/food/beer/beer6.jpg" },
            { src: "~/assets/images/food/beer/beer1.jpg" },
          ],
          category: "Large Premium",
          categoryTag: "#2D9CDB",
          price: "$48.99",
          likes: 768,
          isLike: true,
          isFavorite: true,
          comments: 7,
          rating: "4.5",
          description: "Carlsberg is a pale lager with .....",
        },
        
      ],
     };
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
    },
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