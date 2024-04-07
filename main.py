def update():
    basic.clear_screen()
    led.plot(ledX, ledY)
ledYold = 0
ledXold = 0
dir2 = 0
acc = 0
ledY = 0
ledX = 0
led.set_brightness(128)
basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)

def on_forever():
    global ledX, ledY, acc, dir2, ledXold, ledYold
    ledX = Math.round((input.acceleration(Dimension.X) + 1023) / 500)
    ledY = Math.round((input.acceleration(Dimension.Y) + 1023) / 500)
    acc = Math.round(input.acceleration(Dimension.X) / 10)
    dir2 = Math.round(input.acceleration(Dimension.Y) / 10)
    if ledX != ledXold:
        ledXold = ledX
        update()
    if ledY != ledYold:
        ledYold = ledY
        update()
    if acc != accold:
        ledXold = ledX
        update()
    if ledY != ledYold:
        ledYold = ledY
        update()
basic.forever(on_forever)
