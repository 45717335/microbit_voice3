function LED_5_5 (数字: number, 数字2: number) {
    for (let index = 0; index <= 4; index++) {
        if (index < 数字2) {
            led.plot(数字, index)
        } else {
            led.unplot(数字, index)
        }
    }
}
function show_v3 (数字: number) {
    if (数字 < v1 + Set_W && 数字 > v1 - Set_W) {
        l1 = l1 + Set_L * 1
        v1 = v1 + (数字 - v1) / l1
    } else if (数字 < v2 + Set_W && 数字 > v2 - Set_W) {
        l2 = l2 + Set_L * 1
        v2 = v2 + (数字 - v2) / l2
    } else if (数字 < v3 + Set_W && 数字 > v3 - Set_W) {
        l3 = l3 + Set_L * 1
        v3 = v3 + (数字 - v3) / l3
    } else if (数字 < v4 + Set_W && 数字 > v4 - Set_W) {
        l4 = l4 + Set_L * 1
        v4 = v4 + (数字 - v4) / l4
    } else if (数字 < v5 + Set_W && 数字 > v5 - Set_W) {
        l5 = l5 + Set_L * 1
        v5 = v5 + (数字 - v5) / l5
    } else {
        if (v1 == 0) {
            v1 = 数字
        } else if (v2 == 0) {
            v2 = 数字
        } else if (v3 == 0) {
            v3 = 数字
        } else if (v4 == 0) {
            v4 = 数字
        } else if (v5 == 0) {
            v5 = 数字
        }
    }
    basic.clearScreen()
    LED_5_5(0, Math.ceil(v1 / 50))
    LED_5_5(1, Math.ceil(v2 / 50))
    LED_5_5(2, Math.ceil(v3 / 50))
    LED_5_5(3, Math.ceil(v4 / 50))
    LED_5_5(4, Math.ceil(v5 / 50))
    if (l1 < 0) {
        l1 = 0
        v1 = 0
    } else {
        l1 = l1 - 1
    }
    if (l2 < 0) {
        l2 = 0
        v2 = 0
    } else {
        l2 = l2 - 1
    }
    if (l3 < 0) {
        l3 = 0
        v3 = 0
    } else {
        l3 = l3 - 1
    }
    if (l4 < 0) {
        l4 = 0
        v4 = 0
    } else {
        l4 = l4 - 1
    }
    if (l5 < 0) {
        l5 = 0
        v5 = 0
    } else {
        v5 = v5 - 1
    }
    if (l1 > 10000) {
        l1 = 10000
        LED_5_5(0, Math.ceil((数字 - (v1 - Set_W)) * (2.5 / Set_W)))
    }
}
input.onButtonPressed(Button.A, function () {
    if (set_set == 1) {
        Set_L = Set_L * 0.9
        if (Set_L > 4) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Red)
        } else if (Set_L < 1) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Blue)
        } else {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Green)
        }
    } else if (set_set == 2) {
        Set_W = Set_W * 0.9
        if (Set_W > 20) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Red)
        } else if (Set_W < 5) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Blue)
        } else {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Green)
        }
    } else if (set_set == 3) {
        Set_M = Set_M * 0.9
        if (Set_M > 100) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Red)
        } else if (Set_M < 4) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Blue)
        } else {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Green)
        }
    }
    startbit.startbit_showLight()
})
input.onButtonPressed(Button.AB, function () {
    set_set = set_set + 1
    set_set = set_set % 4
    startbit.startbit_setPixelRGBArgs(StartbitLights.Light1, set_set)
    startbit.startbit_setPixelRGBArgs(StartbitLights.Light2, set_set)
    startbit.startbit_showLight()
})
input.onButtonPressed(Button.B, function () {
    if (set_set == 1) {
        Set_L = Set_L * 1.1
        if (Set_L > 4) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Red)
        } else if (Set_L < 1) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Blue)
        } else {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Green)
        }
    } else if (set_set == 2) {
        Set_W = Set_W * 1.1
        if (Set_W > 20) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Red)
        } else if (Set_W < 5) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Blue)
        } else {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Green)
        }
    } else if (set_set == 3) {
        Set_M = Set_M * 1.1
        if (Set_M > 100) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Red)
        } else if (Set_M < 4) {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Blue)
        } else {
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Green)
        }
    }
    startbit.startbit_showLight()
})
let set_set = 0
let v5 = 0
let v4 = 0
let l5 = 0
let l4 = 0
let v3 = 0
let v2 = 0
let v1 = 0
let l3 = 0
let l2 = 0
let l1 = 0
let Set_M = 0
let Set_W = 0
let Set_L = 0
startbit.startbit_Init()
// 延时长度 
Set_L = 2
// 每个柱状图音强宽度
Set_W = 10
// 平均值偏移速度
Set_M = 10
l1 = 0
l2 = 0
l3 = 0
v1 = 0
v2 = 0
v3 = 0
let ONE_L = 50
l4 = 0
l5 = 0
v4 = 0
v5 = 0
set_set = 1.1
basic.forever(function () {
    show_v3(startbit.startbit_getSoundVolume())
})
