/**
 * Created by tahit on 03/09/2017.
 */
const usb = require('usb');

let devices = usb.getDeviceList();

usb.on('attach', function(device) { console.log(device); alert(JSON.stringify(device));});
