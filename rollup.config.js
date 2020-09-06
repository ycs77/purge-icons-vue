import path from 'path'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vuePlugin from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { camelCase, upperFirst } from 'lodash'
import createBanner from 'create-banner'
import { name, dependencies } from './package.json'

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

const banner = createBanner({
  data: {
    name,
    year: new Date().getFullYear()
  }
})

const baseConfig = {
  input: path.resolve(src, 'index.js'),
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: [
        ['@babel/env', {
          'modules': false
        }]
      ],
      plugins: ['@babel/plugin-transform-runtime']
    }),
    vuePlugin({
      compileTemplate: true
    }),
    postcss()
  ],
  external: [/@babel\/runtime/, ...Object.keys(dependencies)]
}

export default [
  {
    ...baseConfig,
    output: {
      format: 'cjs',
      name: upperFirst(camelCase(name)),
      banner,
      file: path.resolve(dist, `${name}.js`),
      exports: 'named'
    }
  },
  {
    ...baseConfig,
    output: {
      format: 'cjs',
      name: upperFirst(camelCase(name)),
      banner,
      file: path.resolve(dist, `${name}.min.js`),
      exports: 'named',
      plugins: [
        terser()
      ]
    }
  },
  {
    ...baseConfig,
    output: {
      format: 'es',
      banner,
      file: path.resolve(dist, `${name}.esm.js`)
    }
  },
  {
    ...baseConfig,
    output: {
      format: 'es',
      banner,
      file: path.resolve(dist, `${name}.esm.min.js`),
      plugins: [
        terser()
      ]
    }
  }
]
