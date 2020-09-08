/*!
 * purge-icons-vue v1.2.0
 * https://github.com/ycs77/purge-icons-vue
 *
 * Copyright 2020 Lucas Yang
 * Released under the MIT license
 *
 * Date: 2020-09-08T09:47:07.182Z
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _regeneratorRuntime = require('@babel/runtime/regenerator');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var Iconify = require('@purge-icons/generated');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var Iconify__default = /*#__PURE__*/_interopDefaultLegacy(Iconify);

var script = {
  name: 'Icon',
  props: {
    icon: String
  },
  watch: {
    icon: 'updateIcon'
  },
  methods: {
    updateIcon: function updateIcon(icon) {
      var _this = this;

      return _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee() {
        var svg, span;
        return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$nextTick();

              case 2:
                _this.$refs.el.textContent = '';
                svg = icon ? Iconify__default['default'].renderSVG(icon, {}) : null;

                if (svg) {
                  _this.$refs.el.appendChild(svg);
                } else {
                  span = document.createElement('span');
                  span.className = 'iconify';

                  if (icon) {
                    span.dataset.icon = icon;
                  }

                  _this.$refs.el.appendChild(span);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.updateIcon(this.icon);
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { ref: "el", staticClass: "icon" })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

function install(Vue, options) {
  if (install.installed) {
    return;
  }

  install.installed = true;
  Vue.component(__vue_component__.name, __vue_component__);
}
var index = {
  install: install
};

exports.Icon = __vue_component__;
exports.default = index;
