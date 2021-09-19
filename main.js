const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

const WebSocket = require('ws')
let socket = new WebSocket("ws://localhost:8888");

let gyroVal = 0;

socket.onopen = function(e) {
 // socket.send("azafsdfsd");
};

socket.onmessage = function(event) {
    gyroVal = event.data;
    //console.log(gyroVal);
};

socket.onclose = function(event) {
    console.log("closed")
};

socket.onerror = function(error) {
    console.log(error.message);
};


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