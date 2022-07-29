<template>
  <div class="app">
    <iframe border="none" style="width: 375px;height: 580px;border: none;" src="https://static-59728804-d890-4267-8e45-393e10b3c780.bspapp.com/#/" />
  </div>
</template>

<script>
// get static files by chrome.runtime.getURL
const logo = chrome.runtime.getURL('assets/create-crx-app.png')
export default {
  name: 'App',

  data: function() {
    return {
      logo,
    };
  },

  methods: {
    goToOptions() {
      // go to options page
      chrome.runtime.openOptionsPage()
    }
  }
}
</script>

<style lang="less" scoped>
@import "../style/popup.less";
</style>
