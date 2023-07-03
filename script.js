import { useCssVars as _useCssVars, unref as _unref } from 'vue'
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue"

const _withScopeId = n => (_pushScopeId("data-v-f13b4d11"),n=n(),_popScopeId(),n)
const _hoisted_1 = { class: "container" }
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode("h1", null, "Hello, Vue!", -1 /* HOISTED */))
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode("img", {
  class: "logo",
  alt: "logo",
  src: "http://127.0.0.1:8080/livecodes/assets/templates/vue.svg"
}, null, -1 /* HOISTED */))

import { ref } from 'vue';

  const align = 'center';

const __sfc__ = {
  __name: 'App',
  setup(__props) {

_useCssVars(_ctx => ({
  "f13b4d11-align": (align)
}))

  const count = ref(0);
  
return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    _createElementVNode("p", null, "You clicked " + _toDisplayString(count.value) + " times.", 1 /* TEXT */),
    _createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = $event => (count.value++))
    }, "Click me")
  ]))
}
}

}
__sfc__.__scopeId = "data-v-f13b4d11";
__sfc__.__file = "App.vue";
export default __sfc__;
import { createApp } from 'vue';
createApp(__sfc__)
  .mount(document.querySelector("#app") || document.body.appendChild(document.createElement('div')));

document.head.insertBefore(
  Object.assign(document.createElement('style'), { textContent: ".container[data-v-f13b4d11],\n  .container button[data-v-f13b4d11] {\n    text-align: var(--f13b4d11-align);\n    font: 1em sans-serif;\n}\n.logo[data-v-f13b4d11] {\n    width: 150px;\n}" }),
  document.head.getElementsByTagName('style')[0]
);
