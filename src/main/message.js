const { app, BrowserWindow, Tray, Menu, nativeImage, ipcMain } = require('electron');
const path = require('node:path');
const {
    MAIN_DIR,
    RENDER_DIR,
    COMMON_DIR,
} = require('../common/util')

ipcMain.handle('x_action', async (e, action_data) => {
    console.log(action_data)
    showTray()
})

const showTray = () => {

    const icon = nativeImage.createFromPath(
        path.join(COMMON_DIR, 'images/36x36.png')
    );
    tray = new Tray(icon);

    // 注意: 你的 contextMenu, Tooltip 和 Title 代码需要写在这里!
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type: 'radio' },
        { label: 'Item2', type: 'radio' },
        { label: 'Item3', type: 'radio', checked: true },
        { label: 'Item4', type: 'radio' },
    ]);

    tray.setContextMenu(contextMenu);

    tray.setToolTip('This is my application');
    tray.setTitle('This is my title');
}