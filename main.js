const electron = require('electron');
const {app,BrowserWindow} = electron;


// When application is ready, create application window
app.on('ready', ()=>{
    let win = new BrowserWindow({
        width:500,
        height:400,
        toolbar: false,
        titleBarStyle: 'hidden',
        name: "WordSum",
        icon:'App/assets/WS64x64.png'
        });
    win.loadURL(`file://${__dirname}/index.html`);
});

// Cleanup when window is closed
app.on('closed', function () {
    app = null;
});

// Quit when all windows are closed
app.on('window-all-closed', function() {  
    app.quit();
});