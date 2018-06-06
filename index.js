const electron = require('electron');

const {app, BrowserWindow} = electron;

app.on('ready', ()=>{
    console.log("App is ready");
    const window = new BrowserWindow({});
    window.loadURL(`file://${__dirname}/index.html`)
});