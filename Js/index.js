const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');


let isImageOn = true;

function changeImage() {
    if (isImageOn) {
        btn1.src = 'img/wifioff.png';
    } else {
        btn1.src = 'img/wifion.png';
    }
    isImageOn = !isImageOn;
}

btn1.addEventListener('click', changeImage);



let isSignalImageOn = true;

function changeSignalImage() {
    if (isSignalImageOn) {
        btn2.src = 'img/signaloff.png';
    } else {
        btn2.src = 'img/signalon.png';
    }
    isSignalImageOn = !isSignalImageOn;
}

btn2.addEventListener('click', changeSignalImage);

let isGpsImageOn = true


function changeGpsImage() {
    if (isGpsImageOn) {
        btn3.src = 'img/gpsoff.png';
    } else {
        btn3.src = 'img/gpson.png';
    }
    isGpsImageOn = !isGpsImageOn;
}

btn3.addEventListener('click', changeGpsImage);


let isBluetoothImageOn = true


function changeBluetoothImage() {
    if (isBluetoothImageOn) {
        btn4.src = 'img/bluetoothoff.png';
    } else {
        btn4.src = 'img/bluetoothon.png';
    }
    isBluetoothImageOn = !isBluetoothImageOn;
}

btn4.addEventListener('click', changeBluetoothImage);


let isDontDisturbImageOn = true


function changeDontDisturbImage() {
    if (isDontDisturbImageOn) {
        btn5.src = 'img/dontdisturboff.png';
    } else {
        btn5.src = 'img/dontdisturbon.png';
    }
    isDontDisturbImageOn = !isDontDisturbImageOn;
}

btn5.addEventListener('click', changeDontDisturbImage);



let isRotationImageOn = true


function changeRotationImage() {
    if (isRotationImageOn) {
        btn6.src = 'img/rotationoff.png';
    } else {
        btn6.src = 'img/rotationon.png';
    }
    isRotationImageOn = !isRotationImageOn;
}

btn6.addEventListener('click', changeRotationImage);


let isAirplaneImageOn = true

function changeAirplaneImage() {
    if (isAirplaneImageOn) {
        btn7.src = 'img/airplanemodeoff.png';
    } else {
        btn7.src = 'img/airplanemodeon.png';
        btn1.src = 'img/wifioff.png';
        btn2.src = 'img/signaloff.png';
        btn3.src = 'img/gpsoff.png';
        btn4.src = 'img/bluetoothoff.png';
     
    }
    isAirplaneImageOn = !isAirplaneImageOn;
}

btn7.addEventListener('click', changeAirplaneImage);


let isFlashlightImageOn = true


function changeFlashlightImage() {
    if (isFlashlightImageOn) {
        btn8.src = 'img/flashlightoff.png';
    } else {
        btn8.src = 'img/flashlighton.png';
    }
    isFlashlightImageOn = !isFlashlightImageOn;
}

btn8.addEventListener('click', changeFlashlightImage);