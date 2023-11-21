const { contextBridge, ipcRenderer, shell } = require('electron');


/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
  // const test = document.querySelector('#test')

  // test.addEventListener('click', e => {
  //   window._agent.call()
  // })
})

const callAction = (action, ...params) => {
  return ipcRenderer.invoke('x_action', {
    action,
    data: params,
  });
};

const _agent = {
  call: callAction, // 渲染进程调用主进程
};
contextBridge.exposeInMainWorld('_agent', _agent);
