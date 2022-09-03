<template>
  <div>

    <div :style="{
      width: '85px',
      height: '50px',
      fontSize: '20px',
      lineHeight: '50px',
      borderColor: '#6777ef',
      cursor: 'pointer',
    }" 
      v-show="show"
      class="crx-btn" 
      @click="open">
      {{ previewMd ? '预览🚀' : '记笔记' }}
    </div>

  </div>
</template>

<script>
import { layer } from "@layui/layer-vue";
const crxUrl = chrome.runtime.getURL('assets/index.html?/#/pages/test/addNote')

export default {
  name: 'App',

  data() {
    return {
      show: true,
      previewMd: false,
      openLink: null,
    }
  },
  methods: {
    open() {

      if (!this.previewMd) {

        // layer.drawer({
        //     title: "记笔记",
        //     content: "内容",
        //     offset: "r"
        // })

        let that = this
        that.show = false

        layer.open({
            type: 2,
            title: false,
            resize: true,
            move: true,
            offset: "r",
            anim: 2,
            isOutAnim: 2,
            shade: false,
            shadeClose: false,
            area: ['375px', '560px'],
            // content: "https://static-59728804-d890-4267-8e45-393e10b3c780.bspapp.com/#/pages/test/addNote",
            content: crxUrl,
            end: () => {
              that.show = true
            }
        })

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
    
    if (url.includes("static-59728804-d890-4267-8e45-393e10b3c780")) {
      this.show = false
      return
    }

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

    this.previewMd = true
    this.openLink = `https://ui-javascript.github.io/demo-coolma-202205/#/?mdUrl=https://raw.githubusercontent.com${rawUrl.replace(/\/raw\//, "/")}`
  },
}
</script>

<style lang="less" scoped>
@import "../style/popup.less";
</style>
