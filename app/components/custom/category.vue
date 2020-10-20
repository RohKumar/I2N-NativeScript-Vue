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
    import CategoryItem from "../categories/categoryItem";
 
    export default {
        props: ["item"],
        components: {
            CategoryItem,
        },
        methods: {
            onClickButton(data) {
                this.$emit("clicked", data.id);
                 switch (this.item.category) {
                    case "BURGER":
                        this.$navigateTo(CategoryItem,{props: { category: "Burger" } });
                        break;
                    case "BEER":
                       this.$navigateTo(CategoryItem,{props: { category: "Beer" } });
                        break;
                    case "PANCAKE":
                        this.$navigateTo(CategoryItem,{props: { category: "Pancake" } });
                        break;
                    case "CAKE":
                        this.$navigateTo(CategoryItem,{props: { category: "Cake" } });
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