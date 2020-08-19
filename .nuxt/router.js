import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _27293939 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _60d61368 = () => interopDefault(import('../pages/craft.vue' /* webpackChunkName: "pages/craft" */))
const _62e7bdfa = () => interopDefault(import('../pages/favorites.vue' /* webpackChunkName: "pages/favorites" */))
const _46e113fe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _27293939,
    name: "about"
  }, {
    path: "/craft",
    component: _60d61368,
    name: "craft"
  }, {
    path: "/favorites",
    component: _62e7bdfa,
    name: "favorites"
  }, {
    path: "/",
    component: _46e113fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
