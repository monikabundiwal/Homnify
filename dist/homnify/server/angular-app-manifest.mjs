
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24608, hash: 'd76312878cd4090d126adfac120968e9843918773023af49347c27a9e7d265ff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17118, hash: '2f00c13b66803c87738db0438de3042daa745168d165e9dd901bf7f76cabe367', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 37666, hash: '2b97b630f87a8c6e216efa1b55b004777f5ccb43c74e7d9969c956c0d3cb5d0c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 68591, hash: '41273e730a2486c81609b09eac00baf72c4c23f28fb6894c6ad505629db54f19', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HLWOQAZV.css': {size: 8779, hash: 'ac3kgBpG9JU', text: () => import('./assets-chunks/styles-HLWOQAZV_css.mjs').then(m => m.default)}
  },
};
