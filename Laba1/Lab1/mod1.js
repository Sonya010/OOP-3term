import { ipcMain } from 'electron';

export default function Func_MOD1(win) {
  const wc = win.webContents;
  wc.send('show-screen', 'dialog1');
  wc.send('mod1:focus-input');

  return new Promise((resolve) => {
    function onDialogAction(event, payload) {
      if (event.sender !== wc) return;
      const { action, text } = payload || {};
      if (action === 'yes') {
        wc.send('mod1:display-text', String(text || ''));
        cleanup();
        resolve(1);
      } else if (action === 'cancel') {
        cleanup();
        resolve(0);
      }
    }

    function cleanup() {
      try {
        ipcMain.removeListener('mod1:dialog-action', onDialogAction);
      } catch {}
    }

    ipcMain.on('mod1:dialog-action', onDialogAction);
    win.once('closed', () => {
      cleanup();
      resolve(0);
    });
  });
}
