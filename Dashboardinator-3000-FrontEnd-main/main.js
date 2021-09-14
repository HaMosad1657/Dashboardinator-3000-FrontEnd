const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

const Client = () =>{
    let url = "server url";
    let client = new WebSocket(url);

    client.addEventListener("open", ()=>{
        //server connect print shit idk
    })

    client.addEventListener("close", ()=>{
        //server disconnected
        client = null;
    })
}

function createWindow() {

    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        skipTaskbar: true,
        useContentSize: true
    })

    mainWindow.maximize();

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'public', 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('closed', function() {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow()
    }
})