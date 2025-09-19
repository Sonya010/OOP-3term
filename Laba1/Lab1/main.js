import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import Func_MOD1 from './mod1.js';
import Func_MOD2 from './mod2.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let mainWin;

function createMain() {
  mainWin = new BrowserWindow({
    width: 720,
    height: 520,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWin.loadFile(path.join(__dirname, 'index.html'));

  ipcMain.on('choose-work', async (event, payload) => {
    const { work } = payload || {};
    if (work === 'work1') {
      const code = await Func_MOD1(mainWin);
      console.log('Func_MOD1 returned', code);
    } else if (work === 'work2') {
      const code = await Func_MOD2(mainWin);
      console.log('Func_MOD2 returned', code);
    }
    if (!mainWin.isDestroyed()) mainWin.webContents.send('show-screen', 'menu');
  });
}

app.whenReady().then(createMain);
app.on('window-all-closed', () => app.quit());
