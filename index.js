const HID = require('node-hid');

const devices = HID.devices();

console.log(devices);

const device = new HID.HID(2079, 58369);

device.on('data', (data) => {
  console.log('Data received:', data);
});

device.on('error', (err) => {
  console.error('Error:', err);
});