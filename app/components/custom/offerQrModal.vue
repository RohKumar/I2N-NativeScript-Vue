<template>
	<StackLayout class="p-15" backgroundColor="white">
		<Image src="~/assets/images/qr.png" stretch="none" />
		<Button class="btn btn-outline" text="Close Modal" @tap="$modal.close()" />
	</StackLayout>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style>
</style>
