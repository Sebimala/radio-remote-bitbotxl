enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendValue("acc", 100)
    radio.sendValue("dir", 0)
})
input.onButtonPressed(Button.AB, function () {
    if (silencio == 0) {
        silencio = 1
    } else {
        silencio = 0
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("acc", 0)
    radio.sendValue("dir", 0)
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
radio.setGroup(69)
led.setBrightness(128)
silencio = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    ledX = Math.round((input.acceleration(Dimension.X) + 1023) / 500)
    ledY = Math.round((input.acceleration(Dimension.Y) + 1023) / 500)
    dir = Math.round(input.acceleration(Dimension.X) / 10)
    acc = Math.round(input.acceleration(Dimension.Y) / 10)
    if (ledX != ledXold) {
        ledXold = ledX
        update()
    }
    if (ledY != ledYold) {
        ledYold = ledY
        update()
    }
    if (acc != accold) {
        accold = acc
        update()
    }
    if (dir != dirold) {
        dirold = dir
        update()
    }
})
