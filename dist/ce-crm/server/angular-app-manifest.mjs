
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  }
],
  assets: new Map([
['index.csr.html', {size: 15964, hash: 'b20c8a51e029b255c80a5497c0a97385f89b1798ee0fed44153d9fc733a69e6c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 7964, hash: '9551e3ab1875b16de6c2ab148672176b0c67770cc5d9c55c1badf64b075c2eb8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 93425, hash: '94ee3570d5320f53896838a8458fa1f2ec28d2ad4b33f61dd187290351dfe62d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['login/index.html', {size: 93446, hash: '3df93854afd6fa3ba92239ef43ef16cc9b836fbc1314658674752fde9b61374c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)}], 
['styles-EDQFCRZV.css', {size: 14253, hash: 'P4V1Kf4ooxU', text: () => import('./assets-chunks/styles-EDQFCRZV_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
