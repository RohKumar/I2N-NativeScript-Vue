<template>

    <GridLayout rows="*" columns="*" @tap="onClickButton">
        <Image height="150" width="100%" marginBottom="10" stretch="aspectFill"
            :src="item.cover" /> />
        <GridLayout verticalAlignment="bottom">
            <StackLayout class="banner2" backgroundColor="#489e9e9e">
                <Label :text="item.category + ' (' +  item.count  +  ')'"
                    class="category-name  m-b-10 m-t-10" textwrap="true"></Label>
            </StackLayout>
        </GridLayout>
    </GridLayout>

</template>
<script>
    import BeerCategory from "../categories/beerC";
 
    export default {
        props: ["item"],
        methods: {
            onClickButton(data) {
                this.$emit("clicked", data.id);
                 switch (this.item.category) {
                    case "BURGER":
                        console.log(this.item.category=="BURGER");
                        break;
                    case "BEER":
                       this.$navigateTo(BeerCategory);
                        break;
                    case "PANCAKE":
                        console.log(this.item.category=="BURGER");
                        break;
                    case "CAKE":
                        console.log(this.item.category=="BURGER");
                        break;
                    default:
                        console.log("Default");
                        break;
                }
                
            }
        },
        data() {
            return {};
        }
    };
</script>
<style scoped>
    .default-img {
        color: #d1cece5b;
    }

    .category-name {
        color: #f7f7f7;
        font-size: 14;
        font-weight: bold;
        horizontal-align: center;
        vertical-align: center;
        margin: 5 0 15 0
    }

    .banner {
        color: #bdbdbd;
        opacity: .3;
    }
</style>