<template>
  <Page
    actionBarHidden="true"
    class="anim-page"
    backgroundSpanUnderStatusBar="true"
    @loaded="onLoaded"
  >
    <StackLayout class="form">
      <StackLayout class="input-field" marginBottom="25">
        <TextField
          class="input"
          hint="Email"
          keyboardType="email"
          autocorrect="false"
          autocapitalizationType="none"
          v-model="user.email"
          returnKeyType="next"
          fontSize="18"
        />
        <StackLayout class="hr-light" />
      </StackLayout>

      <StackLayout class="input-field" marginBottom="25">
        <TextField
          ref="password"
          class="input"
          hint="Password"
          secure="true"
          v-model="user.password"
          fontSize="18"
        />
        <StackLayout class="hr-light" />
      </StackLayout>
      <Button
        :text="isLoggingIn ? 'Log In' : 'Sign Up'"
        @tap="submit"
        class="btn btn-primary m-t-20"
      />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      isLoggingIn: true,
      user: {
        email: "",
        password: "",
      }
    };
  },
  methods: {
    onLoaded() {
    }
  }
};
</script>
<style scoped>
.page {
  align-items: center;
  flex-direction: column;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}

.logo {
  margin-bottom: 12;
  height: 90;
  font-weight: bold;
}

.header {
  horizontal-align: center;
  font-size: 25;
  font-weight: 600;
  margin-bottom: 70;
  text-align: center;
  color: #d51a1a;
}

.input-field {
  margin-bottom: 25;
}

.input {
  font-size: 18;
  placeholder-color: #a8a8a8;
}

.input-field .input {
  font-size: 54;
}

.btn-primary {
  height: 50;
  margin: 30 5 15 5;
  background-color: #d51a1a;
  border-radius: 5;
  font-size: 20;
  font-weight: 600;
}

.login-label {
  horizontal-align: center;
  color: #a8a8a8;
  font-size: 16;
}

.sign-up-label {
  margin-bottom: 20;
}

.bold {
  color: #000000;
}
</style>