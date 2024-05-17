input.onButtonPressed(Button.A, function () {
    if (balken_x > 0) {
        balken_x += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (status == 0) {
        radio.sendValue("go", 11)
        richtung_y = -1
        richtung_x = 1
        x = 3
        y = 3
        led.plot(3, 3)
        status = 1
    }
    if (balken_x < 3) {
        balken_x += 1
    }
})
radio.onReceivedValue(function (name, value) {
    if (value == 137) {
        status = 2
    } else if (value == 11) {
        y = -2
        richtung_y = -1
        status = 1
    } else {
        x = parseInt(name)
        richtung_x = value
        y = -1
        richtung_y = 1
        status = 1
    }
})
let y = 0
let richtung_x = 0
let richtung_y = 0
let balken_x = 0
let status = 0
let x = 0
status = 0
basic.pause(1000)
basic.forever(function () {
    if (status == 1) {
        basic.pause(500)
        y += richtung_y
        x += richtung_x
        if (x < 0 || x > 4) {
            richtung_x = richtung_x * -1
            x += richtung_x
            x += richtung_x
        }
        if (y > 3) {
            if (x + richtung_x * -1 == balken_x || x + richtung_x * -1 == balken_x + 1) {
                richtung_y = richtung_y * -1
                y += richtung_y
                y += richtung_y
            } else {
                status = 3
                radio.sendValue("lost", 137)
            }
        } else if (y == -1) {
            richtung_x = richtung_x * -1
            x += richtung_x
            if (x < 0 || x > 4) {
                richtung_x = richtung_x * -1
                x += richtung_x
                x += richtung_x
            }
            x += -4
            x = x * -1
            radio.sendValue(x.toString(), richtung_x)
        }
        for (let index = 0; index <= 4; index++) {
            for (let indey = 0; indey <= 4; indey++) {
                led.unplot(index, indey)
            }
        }
        led.plot(x, y)
        led.plot(balken_x, 4)
        led.plot(balken_x + 1, 4)
    } else if (status == 2) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.setLedColor(0x00ff00)
        led.setBrightness(255)
        music.playMelody("F F G G A A B C5 ", 120)
        music.stopAllSounds()
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . # # #
            # . . . #
            # # # . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . # #
            # . . . #
            # # . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . .
            # . . . #
            . . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . .
            . . . . .
            . . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . # # # #
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            `)
        basic.showLeds(`
            . . # # #
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            `)
        basic.showLeds(`
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("GAME OVER")
        basic.showIcon(IconNames.Target)
    } else if (status == 3) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
        led.setBrightness(255)
        music.playMelody("C5 B A G G G F F ", 120)
        music.stopAllSounds()
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . # # #
            # . . . #
            # # # . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . # #
            # . . . #
            # # . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . .
            # . . . #
            . . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . .
            . . . . .
            . . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.showLeds(`
            . # # # #
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            `)
        basic.showLeds(`
            . . # # #
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            `)
        basic.showLeds(`
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("GAME OVER")
        basic.showIcon(IconNames.Target)
    }
})
