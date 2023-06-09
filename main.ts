input.onButtonPressed(Button.A, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 110)
    basic.pause(5000)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
})
input.onButtonPressed(Button.B, function () {
	
})
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
basic.forever(function () {
	
})
