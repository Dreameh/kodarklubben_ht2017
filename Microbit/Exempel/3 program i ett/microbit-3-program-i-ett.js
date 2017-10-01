let y_pos = 0
let prev_x_pos = 0
let y_val = 0
let x_val = 0
let x_pos = 0
let led_speed = 0
let dir = 0
let current_stage = 0
function pick_random_dir()  {
    if (Math.randomBoolean()) {
        dir = -1
    } else {
        dir = 1
    }
}
input.onButtonPressed(Button.AB, () => {
    current_stage += 1
    basic.clearScreen()
    x_pos = 2
    prev_x_pos = -1
    y_pos = 2
    x_val = 0
    y_val = 0
    led_speed = 10
    pick_random_dir()
})
basic.forever(() => {
    if (current_stage == 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(250)
        basic.clearScreen()
        basic.pause(250)
    } else if (current_stage == 1) {
        if (x_pos != prev_x_pos) {
            led.unplot(prev_x_pos, y_pos)
            led.toggle(x_pos, y_pos)
            prev_x_pos = x_pos
        }
        basic.pause(500)
        if (x_pos > 4 || x_pos < 0) {
            led.unplot(x_pos, y_pos)
            x_pos = 2
            pick_random_dir()
            music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
            basic.pause(500)
            basic.showString("GG")
        } else {
            x_pos += dir
        }
    } else if (current_stage == 2) {
        led.toggle(x_val, y_val)
        basic.pause(led_speed)
        if (x_val >= 4) {
            x_val = 0
            y_val += 1
        } else {
            x_val += 1
        }
        if (y_val >= 5) {
            x_val = 0
            y_val = 0
            basic.pause(250)
        }
    } else {
        current_stage = 0
    }
})
input.onButtonPressed(Button.A, () => {
    if (current_stage == 1) {
        if (x_pos == 0) {
            dir = 1
            music.playTone(698, music.beat(BeatFraction.Whole))
        }
    } else if (current_stage == 2) {
        led_speed += 100
        if (led_speed > 10000) {
            led_speed = 10000
        }
    }
})
input.onButtonPressed(Button.B, () => {
    if (current_stage == 1) {
        if (x_pos == 4) {
            dir = -1
            music.playTone(698, music.beat(BeatFraction.Whole))
        }
    } else if (current_stage == 2) {
        led_speed += -100
        if (led_speed < 10) {
            led_speed = 10
        }
    }
})
current_stage = 0
x_pos = 2
prev_x_pos = -1
y_pos = 2
x_val = 0
y_val = 0
led_speed = 10
pick_random_dir()
