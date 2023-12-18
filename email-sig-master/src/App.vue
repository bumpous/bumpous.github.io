<template>
  <div id="app">
    <b-container>
      <b-img fluid center alt="Northern State University logo" :src="require('./assets/nsu-logo.png')" id="logo"/>
      <Intro />
      <SignatureForm />
      <hr />
      <Instructions />
    </b-container>
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";
import SignatureForm from "./components/SignatureForm.vue"
import Instructions from "./components/Instructions.vue"

export default {
  name: "App",
  components: {
    Intro,
    SignatureForm,
    Instructions,
  }
};
</script>

<style lang="scss">
@import "assets/custom-vars.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#logo {
  margin-bottom: 40px;
}

</style>
