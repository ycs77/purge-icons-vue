# PurgeIcons's Vue 2 Icon Component

[![npm version](https://img.shields.io/npm/v/purge-icons-vue?style=flat-square)](https://www.npmjs.com/package/purge-icons-vue)

> Adapted from https://github.com/antfu/vitesse/blob/master/src/components/Icon.vue

Must install [PurgeIcons](https://github.com/antfu/purge-icons).

## Installation

```bash
npm i purge-icons-vue
# or
yarn add purge-icons-vue
```

And register in Vue app entry:

```js
import PurgeIconsVue from 'purge-icons-vue'

Vue.use(PurgeIconsVue)
```

If you installed `postcss-import`, can import CSS file:

```css
@import 'purge-icons-vue';
```

## Usage

```html
<Icon icon="mdi:account" />
```

The icon id follows the rules in [Iconify](https://iconify.design/) which you can use any icons from the supported icon sets. It will only bundles the icons you use, check out [PurgeIcons](https://github.com/antfu/purge-icons) for more details.
