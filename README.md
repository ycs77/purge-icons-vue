# PurgeIcons's Vue 2 Icon Component

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

## Usage

```html
<Icon icon="mdi:account" />
```

The icon id follows the rules in [Iconify](https://iconify.design/) which you can use any icons from the supported icon sets. It will only bundles the icons you use, check out [PurgeIcons](https://github.com/antfu/purge-icons) for more details.
