<template>
    <Page actionBarHidden="true" class="anim-page"
        backgroundSpanUnderStatusBar="true" @loaded="onLoaded">
  <StackLayout class="p-15" backgroundColor="white">
    <Button class="btn btn-outline" text="Close Modal"  />
  </StackLayout>
    </Page>
</template>

<script>
export default {
  data() {
    return {};
  },
     methods: {
            onLoaded() {
                // this.animateFrom()
            },
     }
};
</script>