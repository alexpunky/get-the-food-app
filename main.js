const {app, BrowserWindow} = require('electron')
const path = require('path');
const url = require('url');
const usb = require('usb');
require('electron-reload')(__dirname);

require('dotenv').config();

let win = null;
const usbVendor = 6512;
const usbProduct = 36865;
const usbDevice = 9845;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // Specify entry point
  if (process.env.PACKAGE === 'true'){
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL(process.env.HOST);
    win.webContents.openDevTools();
  }

  usb.on('attach', function(device) {
    if(device.deviceDescriptor) {
      if(device.deviceDescriptor.idVendor === usbVendor &&
      device.deviceDescriptor.idProduct === usbProduct &&
      device.deviceDescriptor.bcdDevice === usbDevice) {
        //localStorage.setItem('code', 'success');
        return;
      }
    }

    //localStorage.setItem('code', 'error');
  });

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
  createWindow()
}
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
