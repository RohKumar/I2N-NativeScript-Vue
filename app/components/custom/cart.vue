<template>
    <StackLayout class="main">

        <StackLayout class="content">
        <GridLayout width="100%" columns="auto,auto,auto" rows="auto" verticalAlignment="center">
            
            <Image row="0" col="0" stretch="aspectFill" class="card-img" @tap="onClickButton()"
                :src="cart.cover" />
            
            <GridLayout row="0" col="1" width="170" columns="auto," rows="auto,auto,auto" class="details">
                <Label row="0" col="0" width= "170" class="item-name" textwrap="true"
                     horizontalAlignment="left"
                    :text="cart.name" />
                
                    <Label row="1" col="0" class="item-category" textwrap="true"
                        horizontalAlignment="left"
                        :text="cart.price" />
                     
                    <Label row="2" col="0" class="item-name" horizontalAlignment="left"
                        :text="cart.category" />
                     
            </GridLayout>

                <Button row="0" col="2"  class="addLabel" @tap="onClickButton()"
                    horizontalAlignment="right" verticalAlignment="top"
                    text="Delete" />

        </GridLayout>
            <StackLayout width="100%" marginTop="5" class="line" />

            <!-- Here the problem in scroll transistion -->
        
        </StackLayout>

        <StackLayout width="100%" class="lineBreak" />


    </StackLayout>
</template>

<script>
    import ItemLike from "./itemLike";
    import { isIOS,isAndroid} from "tns-core-modules/platform";
    export default {
        props: ["cart"],
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