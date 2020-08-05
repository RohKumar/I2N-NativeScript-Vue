<template>
  <Page backgroundColor="green" showingModally="onShowingModally">
    <Page class="actionBar">
      <ActionBar backgroundColor="red" title="Modal view" icon></ActionBar>
    </Page>
    <StackLayout backgroundColor="lightGreen">
      <Label text="Modal view with ActionBar" style="text-align:center;" textWrap="true" />
      <Button text="Close Modal" tap="onCloseModal" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  methods: {
    onShowingModally(args) {
      console.log("onShowingModally");
    },
    onCloseModal(args) {
      args.object.closeModal();
    },
  },
};
</script>

<style>
</style>