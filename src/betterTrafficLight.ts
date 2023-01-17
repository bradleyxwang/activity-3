export type Color = "red" | "green" | "yellow"
export type TrafficColor = {
    color : Color
    timeLength: number
    nextColor: Color 
}

export const Red: TrafficColor = {color: 'red', timeLength: 20, nextColor: 'green'}
export const Yellow: TrafficColor = {color: 'yellow', timeLength: 10, nextColor: 'red'}
export const Green: TrafficColor = {color: 'green', timeLength: 20, nextColor: 'yellow'}

export function timerAtNextSecond (timer : number,  timerLength : number) : number {
    if (timer === 1) {return timerLength} return (timer - 1)
}

export function colorAtNextSecond(lightColor: TrafficColor, timer: number): Color {
    return (timer === 1) ? lightColor.nextColor : lightColor.color
}