input.onButtonPressed(Button.A, function () {
    factor_1 = randint(0, 1000)
    factor2 = randint(0, 100)
    basic.showNumber(factor_1)
    basic.pause(500)
    basic.showString("/")
    basic.showNumber(factor2)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(factor_1 / factor2)
    basic.pause(500)
    basic.clearScreen()
})
let factor2 = 0
let factor_1 = 0
basic.showString("divisiones al azar")
basic.clearScreen()
