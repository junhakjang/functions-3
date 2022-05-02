input.onButtonPressed(Button.A, function () {
    Guess += 1
    basic.showNumber(Guess)
    basic.pause(100)
    basic.clearScreen()
})
function doSomething (num: number, num2: number) {
    if (num > num2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
        counter_thing += 1
    } else if (num2 < num) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.clearScreen()
        counter_thing += 1
    } else {
        basic.showString("Nice")
    }
}
input.onButtonPressed(Button.AB, function () {
    doSomething(Guess, number)
})
input.onButtonPressed(Button.B, function () {
    Guess += -1
    basic.showNumber(Guess)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(counter_thing)
    basic.clearScreen()
})
let counter_thing = 0
let number = 0
let Guess = 0
Guess = 0
number = randint(0, 5)
counter_thing = 0
basic.forever(function () {
	
})
