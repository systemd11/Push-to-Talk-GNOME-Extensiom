import * as dbus from 'dbus-native';

const sessionBus = dbus.sessionBus();

const KEY_CODE = 49; 
const INTERFACE_NAME = 'org.freedesktop.Pipewire';

function enableMicrophone(): void {
  sessionBus.invoke({
    destination: INTERFACE_NAME,
    path: '/org/freedesktop/Pipewire',
    interface: INTERFACE_NAME,
    member: 'EnableMicrophone',
  });
}

function disableMicrophone(): void {
  sessionBus.invoke({
    destination: INTERFACE_NAME,
    path: '/org/freedesktop/Pipewire',
    interface: INTERFACE_NAME,
    member: 'DisableMicrophone',
  });
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === KEY_CODE) {
    enableMicrophone();
  }
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode === KEY_CODE) {
    disableMicrophone();
  }
});
