<template>
  <span class="icon" ref="el" />
</template>

<script>
import Iconify from '@purge-icons/generated'

export default {
  name: 'Icon',
  props: {
    icon: String
  },
  watch: {
    icon: 'updateIcon'
  },
  methods: {
    async updateIcon(icon) {
      await this.$nextTick()
      this.$refs.el.textContent = ''
      const svg = icon ? Iconify.renderSVG(icon, {}) : null
      if (svg) {
        this.$refs.el.appendChild(svg)
      } else {
        const span = document.createElement('span')
        span.className = 'iconify'
        if (icon) {
          span.dataset.icon = icon
        }
        this.$refs.el.appendChild(span)
      }
    }
  },
  mounted() {
    this.updateIcon(this.icon)
  }
}
</script>
