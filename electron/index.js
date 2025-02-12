const { app, BrowserWindow } = require('electron'); 

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL('http://127.0.0.1:8000'); // Load Django server
});
