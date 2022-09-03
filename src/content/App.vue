<template>
  <div>

    <div :style="{
      width: '120px',
      height: '50px',
      fontSize: '20px',
      lineHeight: '50px',
      borderColor: '#6777ef',
      cursor: 'pointer',
    }" class="crx-btn" @click="open">
      预览🚀
    </div>


  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: false,
      openLink: null,
    }
  },
  methods: {
    open() {
      if (!show) {
        
        return 
      }
      if (!this.openLink) {
        return
      }
      window.open(this.openLink, "_blank")
    }
  },
  mounted() {
    let url = window.location.href
    // console.log("url: " + window.location.href)
    if (!url.endsWith(".md")) {
      return
    }

    // if (url.startsWith("https://ui-javascript.github.io")) {
    //   return
    // }

    if (!url.startsWith("https://github.com/")) {
      return
    }

    const rawUrl = document.querySelector("#raw-url").getAttribute("href")
    if (!rawUrl) {
      return
    }

    this.show = true
    this.openLink = `https://ui-javascript.github.io/demo-coolma-202205/#/?mdUrl=https://raw.githubusercontent.com${rawUrl.replace(/\/raw\//, "/")}`
  },
}
</script>

<style lang="less" scoped>
@import "../style/popup.less";
</style>
