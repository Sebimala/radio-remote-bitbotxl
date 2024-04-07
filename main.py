acceleration = 0
ledY = 0
ledX = 0
led.set_brightness(0)
basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)

def on_forever():
    global ledX, ledY, acceleration
    ledX = Math.round((input.acceleration(Dimension.X) + 1023) / 500)
    ledY = Math.round((input.acceleration(Dimension.Y) + 1023) / 500)
    acceleration = Math.round(input.acceleration(Dimension.X) / 10)
    direction = Math.round(input.acceleration(Dimension.Y) / 10)
basic.forever(on_forever)
