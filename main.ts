let ledY = 0
let ledX = 0
led.setBrightness(0)
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
})
