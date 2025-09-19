import { ipcMain } from 'electron';

export default function Func_MOD2(win) {
  const wc = win.webContents;
  wc.send('show-screen', 'dialog2');
  wc.send('mod2:focus-input');

  return new Promise((resolve) => {
    function onAction(event, payload) {
      if (event.sender !== wc) return;
      const { action, number } = payload || {};
      if (action === 'yes') {
        wc.send('mod2:display-number', number);
        cleanup();
        resolve(1);
      } else if (action === 'cancel') {
        cleanup();
        resolve(0);
      }
    }

    function cleanup() {
      try { ipcMain.removeListener('mod2:action', onAction); } catch {}
    }

    ipcMain.on('mod2:action', onAction);
    win.once('closed', () => { cleanup(); resolve(0); });
  });
}
