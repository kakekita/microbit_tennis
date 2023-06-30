radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= 10) {
        var_team_number = receivedNumber
        if (receivedNumber - 10 >= 2) {
            var_status_1 = 2
            var_ball_speed = 1000
            radio.sendNumber(randint(0, 4))
        }
    } else if (var_status_1 != 2) {
        var_status_1 = 2
        var_ball_speed = 1000
    }
    if (var_status_1 == 2 && !(receivedNumber >= 10)) {
        var_s_r = 1
        var_ball_x = receivedNumber
        while (true) {
            basic.pause(var_ball_speed)
            var_ball_y += 1
            if (var_ball_y >= 3) {
                break;
            }
        }
        if (var_ball_x == var_racket || var_ball_x == var_racket + 1) {
            var_s_r = 0
            music.play(music.tonePlayable(698, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
            while (true) {
                basic.pause(var_ball_speed)
                if (配列0[var_racket_y + -1][var_racket] == 1 || 配列0[var_racket_y + -1][var_racket + 1] == 1 || var_s_r == 2) {
                    var_s_r = 2
                    if (input.isGesture(Gesture.TiltLeft)) {
                        var_ball_x += -1
                    } else if (input.isGesture(Gesture.TiltRight)) {
                        var_ball_x += 1
                    }
                    var_ball_y += -1
                } else {
                    var_ball_y += 1
                    music.ringTone(587)
                    var_status_1 = 0
                }
                if (var_ball_y < 0) {
                    break;
                }
            }
        } else {
            var_ball_y += 1
            music.ringTone(587)
            var_status_1 = 0
        }
        if (var_ball_speed > 300) {
            var_ball_speed += -20
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (var_status_1 == 0) {
        var_team_number += 1
        radio.sendNumber(var_team_number)
        var_status_1 = 1
    } else if (var_status_1 == 2) {
        if (var_racket > 0) {
            ラケットを動かす(-1)
        }
    }
})
function ラケットを動かす (移動値: number) {
    配列0 = _2次元配列値変更(var_racket, var_racket_y, 配列0, 0)
    配列0 = _2次元配列値変更(var_racket + 1, var_racket_y, 配列0, 0)
    var_racket += 移動値
    配列0 = _2次元配列値変更(var_racket, var_racket_y, 配列0, 1)
    配列0 = _2次元配列値変更(var_racket + 1, var_racket_y, 配列0, 1)
    ライト制御(配列0)
}
input.onButtonPressed(Button.AB, function () {
    if (var_status_1 == 2) {
        if (var_s_r == 0) {
            if (配列0[var_racket_y + -1][var_racket] == 1 || 配列0[var_racket_y + -1][var_racket + 1] == 1) {
                music.ringTone(440)
                var_s_r = 2
                if (input.isGesture(Gesture.TiltLeft)) {
                    var_ball_x += -1
                } else if (input.isGesture(Gesture.TiltRight)) {
                    var_ball_x += 1
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (var_status_1 == 0) {
        var_team_number += 1
        radio.sendNumber(var_team_number)
        var_status_1 = 1
    } else if (var_status_1 == 2) {
        if (var_racket < 3) {
            ラケットを動かす(1)
        }
    }
})
function ライト制御 (Array2: number[][]) {
    var_1_x = 0
    var_1_y = 0
    while (true) {
        while (true) {
            if (Array2[var_1_y][var_1_x] == 1) {
                led.plot(var_1_x, var_1_y)
            } else {
                led.unplot(var_1_x, var_1_y)
            }
            var_1_x += 1
            if (var_1_x >= Array2[var_1_y].length) {
                break;
            }
        }
        var_1_x = 0
        var_1_y += 1
        if (var_1_y >= Array2.length) {
            break;
        }
    }
    var_1_y = 0
}
function ボール移動 () {
	
}
function _2次元配列値変更 (X: number, Y: number, Array2: number[][], Number2: number) {
    if (Y >= 0 && Y < 5 && (X >= 0 && X < 5)) {
        Array2[Y][X] = Number2
    }
    return Array2
}
let var_1_y = 0
let var_1_x = 0
let var_ball_speed = 0
let var_status_1 = 0
let 配列0: number[][] = []
let var_s_r = 0
let var_team_number = 0
let var_racket = 0
let var_racket_y = 0
let var_ball_y = 0
let var_ball_x = 0
radio.setGroup(117)
var_ball_x = -1
var_ball_y = 0
var_racket_y = 4
var_racket = 1
var_team_number = 10
var_s_r = 2
let 配列1 = [
0,
0,
0,
0,
0
]
let 配列2 = [
0,
0,
0,
0,
0
]
let 配列3 = [
0,
0,
0,
0,
0
]
let 配列4 = [
0,
0,
0,
0,
0
]
let 配列5 = [
0,
0,
0,
0,
0
]
配列0 = [
配列1,
配列2,
配列3,
配列4,
配列5
]
ラケットを動かす(0)
basic.forever(function () {
    if (var_status_1 == 2 && !(var_s_r == 3)) {
        配列0 = _2次元配列値変更(var_ball_x, var_ball_y, 配列0, 1)
        ライト制御(配列0)
        配列0 = _2次元配列値変更(var_ball_x, var_ball_y, 配列0, 0)
    }
})
