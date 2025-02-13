const { error } = require('console');
const { app, BrowserWindow, Menu, dialog } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    try {
        mainWindow = new BrowserWindow({
            width: 1200,
            height: 800,
            webPreferences: {
                nodeIntegration: true,
                scrollBounce: false,
                enableBlinkFeatures:true
            }
        });

        // Load the Django app (adjust port if needed)
        mainWindow.loadURL('http://127.0.0.1:8000'); 

        // Remove menu bar
        Menu.setApplicationMenu(null);

    } catch (error) {
        dialog.showErrorBox('Application Exception', error.message)
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
}

// Handle app errors globally
process.on('uncaughtException', (error) => {
    dialog.showErrorBox('Uncaight Exception', error.message);
});

// Launch Electron
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})
