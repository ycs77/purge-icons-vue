import Icon from './Icon.vue'
import './style.css'

function install(Vue, options) {
	if (install.installed) {
    return
  }

  install.installed = true

  Vue.component(Icon.name, Icon)
}

export default { install, Icon }
