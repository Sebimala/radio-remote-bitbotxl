enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    toggleradio()
    radio.sendValue("acc", -100)
    radio.sendValue("dir", 0)
})
function toggleradio () {
    if (silencio == 0) {
        silencio = 1
    } else {
        silencio = 0
    }
}
input.onButtonPressed(Button.AB, function () {
    toggleradio()
    radio.sendValue("acc", 0)
    radio.sendValue("dir", 0)
})
input.onButtonPressed(Button.B, function () {
    silencio = 1
    radio.sendValue("acc", 0)
    radio.sendValue("dir", 0)
    basic.pause(1000)
    silencio = 0
})
function update () {
    basic.clearScreen()
    if (silencio == 0) {
        led.plot(ledX, ledY)
        radio.sendValue("acc", acc)
        radio.sendValue("dir", dir)
    }
}
let dirold = 0
let accold = 0
let ledYold = 0
let ledXold = 0
let dir = 0
let acc = 0
let ledY = 0
let ledX = 0
let silencio = 0
joystickbit.initJoystickBit()
radio.setGroup(8)
led.setBrightness(128)
silencio = 0
let Sensitivity = 5
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    ledX = Math.round((joystickbit.getRockerValue(joystickbit.rockerType.X) + 500) / 500)
    ledY = Math.round((joystickbit.getRockerValue(joystickbit.rockerType.Y) + 500) / 500)
    dir = joystickbit.getRockerValue(joystickbit.rockerType.X)
    acc = joystickbit.getRockerValue(joystickbit.rockerType.Y)
    if (Math.abs(ledXold - ledX) >= Sensitivity) {
        ledXold = ledX
        update()
    }
    if (Math.abs(ledYold - ledY) >= Sensitivity) {
        ledYold = ledY
        update()
    }
    if (Math.abs(accold - acc) >= Sensitivity) {
        accold = acc
        update()
    }
    if (Math.abs(dirold - dir) >= Sensitivity) {
        dirold = dir
        update()
    }
})
