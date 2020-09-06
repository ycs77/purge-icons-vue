# PurgeIcons's Vue Icon Component

> Adapted from https://github.com/antfu/vitesse/blob/master/src/components/Icon.vue

## Installation

Using for Vue.js 3:

```bash
npm i purge-icons-vue
# or
yarn add purge-icons-vue
```

Using for Vue.js 2:

```bash
npm i purge-icons-vue@^1.0
# or
yarn add purge-icons-vue@^1.0
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
