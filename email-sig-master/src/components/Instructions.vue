<template>
  <div class="instructions">
      <b-card no-body>
        <b-tabs card content-class="mt4">
          <b-tab title="Outlook.com" active>
            <h5>To save your signature in Outlook.com</h5>
              <ol>
                <li>Sign in to Outlook.com and select Settings (gear icon) > View all Outlook settings at the top of the page.</li>
                <li>Select Mail > Compose and reply</li>
                <li>Under Email signature, paste your copied signature.</li>
                <li>Select Save.</li>
              </ol>
          </b-tab>
          <b-tab title="Outlook" active>
            <h5>To save your signature in Outlook for Office 365 Desktop</h5>
            <ol>
              <li>Select File > Options > Mail > Signatures to open the Signatures and Stationary dialog.</li>
              <li>Select the contents of your current signature and delete them.</li>
              <li>Paste your copied signature and select OK.</li>
            </ol>
          </b-tab>
        </b-tabs>
      </b-card>
  </div>
</template>

<script>
export default {
  name: "Instructions",
  props: { }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#intro{
  margin: 3rem 0;
}

</style>
