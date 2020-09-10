input.onButtonPressed(Button.A, function () {
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Yards = Feet / 3
    basic.showNumber(Yards)
    basic.showString("Yards")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Centimeters = Feet * 30.48
    basic.showNumber(Centimeters)
    basic.showString("Centimeter")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Inches = Feet * 12
    basic.showNumber(Inches)
    basic.showString("Inches")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Feet)
    basic.showString("Feet")
    basic.showString("=")
    Centimeters = Feet * 30.48
    Meters = Centimeters / 100
    basic.showNumber(Meters)
    basic.showString("Meters")
})
let Meters = 0
let Inches = 0
let Centimeters = 0
let Yards = 0
let Feet = 0
Feet = randint(1, 100)
