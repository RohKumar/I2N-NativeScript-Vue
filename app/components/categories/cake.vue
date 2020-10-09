<template>
    <StackLayout class="main">

        <StackLayout class="content">
        <GridLayout width="100%" columns="auto,*,auto" rows="auto" verticalAlignment="center">
            
            <Image row="0" col="0" stretch="aspectFill" class="card-img" @tap="onClickButton()"
                :src="item.item_image" />
            
            <GridLayout row="0" col="1"  columns="auto," rows="auto,auto,auto,auto" class="details"
                >
                <Label row="0" col="0" class="item-name" textwrap="true"
                    verticalAlignment="Top" horizontalAlignment="left"
                    :text="item.item_name" />
                
                    <!-- <Label row="1" col="0" class="item-category" textwrap="true"
                        verticalAlignment="top" horizontalAlignment="left"
                        :text="beer.category" />
                     <GridLayout row="2" col="0" columns="auto,auto" rows="auto" class=""
                verticalAlignment="center">   
                    <Label col="0" row="0" class="fa rating-icon" :text="'fa-star' | fonticon" />
                    <Label col="1" row="0" class="rating-value item-category"
                        :text="beer.rating" />
                     </GridLayout>
                       <StackLayout row="3" col="0" >
                    <Textview editable="false" class="item-category"
                                  verticalAlignment="bottom" horizontalAlignment="left"
                    :text="beer.description" />
                       </StackLayout> -->
            </GridLayout>

            <GridLayout row="0" col="2" columns="auto," rows="auto,auto" class=""
                verticalAlignment="left">
                <Label row="0" col="0" class="item-name" color="red" textwrap="true"
                    verticalAlignment="bottom" horizontalAlignment="center"
                    :text="item.item_price" />
                <Button row="1" col="0"   class="addLabel" @tap="onClickButton()"
                    verticalAlignment="bottom" horizontalAlignment="center"
                    text="ADD" />
                    
            </GridLayout>

        </GridLayout>
            <StackLayout width="100%" marginTop="5" class="line" />

            <!-- Here the problem in scroll transistion -->
        
        </StackLayout>

        <StackLayout width="100%" class="lineBreak" />


    </StackLayout>
</template>

<script>
    import ItemLike from "../custom/itemLike";
    import { isIOS,isAndroid} from "tns-core-modules/platform";
    export default {
        props: ["item"],
           components: {
            ItemLike
        },
        computed: {
            categoryIcon() {
                switch (this.item.category) {
                    case "Burger":
                        return "fa-cutlery";
                        break;
                    case "Beer":
                        return "fa-beer";
                        break;
                    case "Pancake":
                        return "fa-coffee";
                        break;
                    case "Cake":
                        return "fa-birthday-cake";
                        break;
                    default:
                        return "fa-fire";
                        break;
                }
            }
        },
        created() {
            // this.isLike =  this.item.isLike
            // this.isHeart =  this.item.isFavorite
        },
        mounted() {},
        methods: {
            animateLike() {
                if (isIOS) {
                    return;
                }
                let imgLogo = this.$refs.like.nativeView;
                imgLogo
                    .animate({
                        scale: {
                            x: 0.6,
                            y: 0.6
                        },
                        duration: 100,
                        delay: 0
                    })
                    .then(function() {
                        return imgLogo.animate({
                            scale: {
                                x: 1.2,
                                y: 1.2,
                                duration: 50
                            }
                        });
                    })
                    .then(function() {
                        return imgLogo.animate({
                            scale: {
                                x: 1,
                                y: 1,
                                duration: 100
                            }
                        });
                    })
                    .then(function() {});
            },
            animateFavorite() {
                if (isIOS) {
                    return;
                }
                let imgLogo = this.$refs.favorite.nativeView;
                imgLogo
                    .animate({
                        scale: {
                            x: 0.6,
                            y: 0.6
                        },
                        duration: 50,
                        delay: 0
                    })
                    .then(function() {
                        return imgLogo.animate({
                            scale: {
                                x: 1.2,
                                y: 1.2,
                                duration: 50
                            }
                        });
                    })
                    .then(function() {
                        return imgLogo.animate({
                            scale: {
                                x: 1,
                                y: 1,
                                duration: 100
                            }
                        });
                    })
                    .then(function() {});
            },
            toggleLike() {
                this.animateLike();
                this.item.isLike = !this.item.isLike;
                if (this.item.isLike) {
                    this.item.likes += 1;
                } else {
                    this.item.likes -= 1;
                }
            },
            toggleHeart() {
                this.animateFavorite();
                this.item.isFavorite = !this.item.isFavorite;
            },
            onClickButton() {
                this.$emit("clicked", this.item);
            }
        },
        data() {
            return {
                isLike: false,
                isHeart: false
            };
        }

    };
</script>
<style scoped>
    .item-category {
        font-size: 12;
        color: #828282;
    }

    .rating-icon {
        padding-top: 3;
        color: #FFE900;
        font-size: 12;
    }

    .rating-value {
        margin-left: 5;
    }

    .liked-active {
        color: #4080FF;
    }

    .heart-active {
        color: #b51213;
    }

    .default {
        color: #828282;
    }
    .addLabel{
        font-size: 12;
        color:white;
        padding: 7;
        height: 20;
        margin: 8 2 4 2;
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

    .like-icon {
        vertical-align: bottom;
        height: 30;
        font-size: 16;
        margin-right: 2;
        padding: 5 5 5 5;
    }

    .item-name {
        font-size: 12;
        font-weight: bold;
    }

    .item-category {
        font-size: 12;
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
    .details{
        margin-left: 4;   
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