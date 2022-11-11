basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(randint(0, 10))
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
