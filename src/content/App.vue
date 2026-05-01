<template>
  <div>

<div :style="buttonStyle"
      v-show="show"
      class="crx-btn" 
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerCancel"
      @click="open">
      {{ buttonContent }}
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
      pointerStartX: null,
      pointerStartY: null,
      pointerStartLeft: null,
      pointerStartTop: null,
      pointerDragged: false,
      pointerThreshold: 6,
      position: {
        top: 100,
        left: 20,
      },
    }
  },
  computed: {
    edgeThreshold() {
      return 8;
    },
    smallSize() {
      return 30;
    },
    isLeftEdge() {
      return this.position.left <= this.edgeThreshold;
    },
    isRightEdge() {
      return this.position.left >= window.innerWidth - 72 - this.edgeThreshold;
    },
    isTopEdge() {
      return this.position.top <= this.edgeThreshold;
    },
    isBottomEdge() {
      return this.position.top >= window.innerHeight - 34 - this.edgeThreshold;
    },
    isEdge() {
      return this.isLeftEdge || this.isRightEdge || this.isTopEdge || this.isBottomEdge;
    },
    buttonContent() {
      if (this.isLeftEdge) {
        return '▶';
      }
      if (this.isRightEdge) {
        return '◀';
      }
      if (this.isTopEdge) {
        return '▼';
      }
      if (this.isBottomEdge) {
        return '▲';
      }
      return this.previewMd ? '预览🚀' : '记笔记';
    },
    buttonStyle() {
      const width = this.isEdge ? this.smallSize : 72;
      const height = this.isEdge ? this.smallSize : 34;
      const left = this.isRightEdge ? window.innerWidth - width : Math.max(0, this.position.left);
      const top = this.isBottomEdge ? window.innerHeight - height : Math.max(0, this.position.top);
      return {
        position: 'fixed',
        top: top + 'px',
        left: left + 'px',
        width: width + 'px',
        height: height + 'px',
        padding: this.isEdge ? '0' : '0 6px',
        fontSize: this.isEdge ? '12px' : '16px',
        lineHeight: height + 'px',
        borderColor: '#6777ef',
        cursor: 'pointer',
        zIndex: 9999,
        touchAction: 'none',
        userSelect: 'none',
        textAlign: 'center',
      };
    },
  },
  methods: {
    onPointerDown(event) {
      this.pointerStartX = event.clientX;
      this.pointerStartY = event.clientY;
      this.pointerStartLeft = this.position.left;
      this.pointerStartTop = this.position.top;
      this.pointerDragged = false;
      if (event.target.setPointerCapture) {
        event.target.setPointerCapture(event.pointerId);
      }
    },
    onPointerMove(event) {
      if (this.pointerStartX === null || this.pointerStartY === null) {
        return;
      }
      const dx = event.clientX - this.pointerStartX;
      const dy = event.clientY - this.pointerStartY;
      if (!this.pointerDragged && (Math.abs(dx) > this.pointerThreshold || Math.abs(dy) > this.pointerThreshold)) {
        this.pointerDragged = true;
      }
      if (this.pointerDragged) {
        const nextLeft = this.pointerStartLeft + dx;
        const nextTop = this.pointerStartTop + dy;
        this.position.left = Math.max(0, Math.min(window.innerWidth - 72, nextLeft));
        this.position.top = Math.max(0, Math.min(window.innerHeight - 34, nextTop));
      }
    },
    onPointerUp() {
      if (this.pointerDragged) {
        this.savePosition();
      }
      this.pointerStartX = null;
      this.pointerStartY = null;
      this.pointerStartLeft = null;
      this.pointerStartTop = null;
    },
    onPointerCancel() {
      this.pointerStartX = null;
      this.pointerStartY = null;
      this.pointerStartLeft = null;
      this.pointerStartTop = null;
      this.pointerDragged = false;
    },
    savePosition() {
      const payload = { left: this.position.left, top: this.position.top };
      if (window.chrome && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({ navcrxButtonPosition: payload });
      } else {
        localStorage.setItem('navcrxButtonPosition', JSON.stringify(payload));
      }
    },
    loadPosition() {
      if (window.chrome && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get(['navcrxButtonPosition'], (result) => {
          if (result && result.navcrxButtonPosition) {
            this.position = result.navcrxButtonPosition;
          }
        });
      } else {
        try {
          const raw = localStorage.getItem('navcrxButtonPosition');
          if (raw) {
            this.position = JSON.parse(raw);
          }
        } catch (error) {
          // ignore invalid stored value
        }
      }
    },
    open() {
      if (this.pointerDragged) {
        this.pointerDragged = false;
        return;
      }

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
            title: "记笔记",
            resize: true,
            // move: true,
            offset: "rt",
            anim: 2,
            isOutAnim: 2,
            shade: false,
            shadeClose: false,
            area: ['375px', '600px'],
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
    this.loadPosition();

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
