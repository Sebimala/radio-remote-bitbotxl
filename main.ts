function update () {
    basic.clearScreen()
    led.plot(ledX, ledY)
}
let ledYold = 0
let ledXold = 0
let dir = 0
let acc = 0
let ledY = 0
let ledX = 0
led.setBrightness(128)
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
    acc = Math.round(input.acceleration(Dimension.X) / 10)
    dir = Math.round(input.acceleration(Dimension.Y) / 10)
    if (ledX != ledXold) {
        ledXold = ledX
        update()
    }
    if (ledY != ledYold) {
        ledYold = ledY
        update()
    }
})
