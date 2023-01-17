//import { Color, timerAtNextSecond, colorAtNextSecond } from './TrafficLight'
import {timerAtNextSecond, colorAtNextSecond, Green, Yellow, Red } from './betterTrafficLight'

test("tests for timerAtNextSecond", () => {
    expect(timerAtNextSecond(17, 20)).toBe(16)
    expect(timerAtNextSecond(1, 20)).toBe(20)
    expect(timerAtNextSecond(4, 10)).toBe(3)
})


test("tests for TrafficLight", () => {
    expect(colorAtNextSecond(Red,16)).toEqual("red")
    expect(colorAtNextSecond(Red,1)).toEqual("green")
    expect(colorAtNextSecond(Green,1)).toEqual("yellow")
    expect(colorAtNextSecond(Yellow,1)).toEqual("red")
})