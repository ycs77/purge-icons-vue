import Vue, { PluginFunction } from 'vue'

export interface PurgeIconsVueOptions {}

const PurgeIconsVue = {
  install(vue: typeof Vue, options?: PurgeIconsVueOptions): PluginFunction<never>
}

export default PurgeIconsVue
