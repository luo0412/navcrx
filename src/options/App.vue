<template>
  <div class="container">

    主页面

  </div>
</template>

<script>
const chromeExtensionUrl = 'https://developer.chrome.com/docs/extensions/'
export default {
  name: 'App',

  methods: {
    goToExtensionDoc() {
      window.open(chromeExtensionUrl)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../style/options.less";
</style>
