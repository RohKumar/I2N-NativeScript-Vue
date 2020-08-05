<template>
	<StackLayout class="p-15" backgroundColor="white">
		<!-- <Image :src="onImageLoaded" stretch="none" /> -->
		<Image src="" @loaded="onImageLoaded($event)"></Image>
		<Button class="btn btn-outline" text="Close Modal" @tap="$modal.close()" />
	</StackLayout>
</template>

<script>
import { ImageSource } from "tns-core-modules/image-source";
import { Image } from "tns-core-modules/ui/image";
import { QrGenerator } from "nativescript-qr-generator";

export default {
	
    data() {
        return {};
	},
	computed: {
		user() {
			return this.$store.getters.user;
		}
	},
	methods: {
		getRandomString(length) {
   			let result = '';
   			const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   			const charactersLength = characters.length;
   			for ( let i = 0; i < length; i++ ) {
      			result += characters.charAt(Math.floor(Math.random() * charactersLength));
  	 		}
   			return result;
		},
		onImageLoaded(args) {
			const image = args.object;
			console.log(this.user._id)
        	const result = new QrGenerator().generate(this.user._id);
			image.imageSource = new ImageSource(result);
		}
	}
};
</script>

<style>
</style>
