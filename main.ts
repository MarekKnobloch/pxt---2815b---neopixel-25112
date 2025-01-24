let length: number = 18
let pasek: neopixel.Strip = neopixel.create(DigitalPin.P8, length, NeoPixelMode.RGB)
let speed: number = 10 
let maxSpeed: number = 99 
let minSpeed: number = 1
let spindirect = 1

pasek.showRainbow()

basic.forever(function () {
    pasek.rotate(spindirect)
    whaleysans.showNumber(speed)
    pasek.show()

    let delay = Math.max(10, 100 - speed) 
    basic.pause(delay)

    
    if (input.buttonIsPressed(Button.B)) {
        speed = Math.min(speed + 1, maxSpeed) 
        whaleysans.showNumber(speed) 
        basic.pause(400) 
        while (input.buttonIsPressed(Button.B)) {
            speed = Math.min(speed + 1, maxSpeed) 
            whaleysans.showNumber(speed)
            basic.pause(100) 
        }
    }

    
    if (input.buttonIsPressed(Button.A)) {
        speed = Math.max(speed - 1, minSpeed) 
        whaleysans.showNumber(speed)
        basic.pause(400)
        while (input.buttonIsPressed(Button.A)) {
            speed = Math.max(speed - 1, minSpeed)
            whaleysans.showNumber(speed)
            basic.pause(100)
        }
    }

})
