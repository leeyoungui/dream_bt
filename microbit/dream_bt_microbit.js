// 드림호(Dream) 웹 블루투스 보드게임 - 마이크로비트 송신 코드
// MakeCode(microbit) JavaScript 탭에 그대로 붙여넣어도 됩니다.
// 준비: 고급 → 확장 → bluetooth 추가 / 프로젝트 설정 → No Pairing Required 켜기

bluetooth.startUartService()

// A+B 버튼 : 주사위 (1~6)
input.onButtonPressed(Button.AB, function () {
    bluetooth.uartWriteString("DICE:" + randint(1, 6))
})

// 흔들기 : 위기 탈출 (산소 부족 / 엔진 고장 칸에서 5번)
input.onGesture(Gesture.Shake, function () {
    bluetooth.uartWriteString("SHAKE")
})

// A 버튼 : 에너지 방어막 (운석 / 궤도 이탈 / 블랙홀 칸)
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("SHIELD")
})

bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})

bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
