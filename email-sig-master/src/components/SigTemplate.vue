<template>
  <div id="signature-template">
    <div style="color:#000000; font-size: 12px;">
      <p style="color: #990033; font-size: 14px; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;"><strong>{{ sigName }}</strong></span></p>
      <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;><italic>{{ sigTitle }}</italic></span></p>
      <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">{{ sigDept }}</span></p>
      <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">South Dakota Mines</span></p>
      <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">501 E. Saint Joseph St., Rapid City, SD 57701</span></p>
      <p style="margin-top: 0.5em; margin-bottom: 0.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;">{{ sigPhone }} | <a :href="'mailto:'+ sigPhone" style="color: #990033;">{{ sigEmail }}</a></span></p>
      <p style="margin-top: 1.5em; margin-bottom: 1.5em; line-height: 1;"><span style="font-family: Arial, Helvetica, sans-serif;"><a href="#" style="color: #990033;">Northern State University</a></span></p>
      <p style="margin-top: 1.5em; line-height: 1;"><img src="@/assets/nsu-logo.png" width="100" height="83" style="height: 83px; width: 100px;" alt="Northern State University"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SigTemplate",
  props: {
    sigName: { type: String, required: true },
    sigTitle: { type: String, required: true },
    sigDept: { type: String, required: true },
    sigPhone: { type: String, required: true },
    sigEmail: { type: String, required: true }
  },
  data() {
    return{}
  },
  methods: { 
  }
}
</script>

<style lang="scss">

</style>