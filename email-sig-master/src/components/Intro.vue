<template>
  <b-jumbotron bg-variant="primary" text-variant="white">
      <template v-slot:header>Email Signature Generator</template>
      <template v-slot:lead>Enter your details in the form below to create your email signature.  Once everything looks correct in the preview, click 'Copy Signature' to copy to the clipboard.</template>
  </b-jumbotron>
</template>

<script>
export default {
  name: "Intro",
  props: { }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#intro{
  margin: 3rem 0;
}

</style>
