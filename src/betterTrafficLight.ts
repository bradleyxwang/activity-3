export type Color = "red" | "green" | "yellow"
type TrafficColor = {
    color : Color
    timeLength: number
    nextColor: Color 
}

const Red: TrafficColor = {color: 'red', timeLength: 20, nextColor: 'green'}
const Yellow: TrafficColor = {color: 'yellow', timeLength: 10, nextColor: 'red'}
const Green: TrafficColor = {color: 'green', timeLength: 20, nextColor: 'yellow'}

export function timerAtNextSecond (timer : number,  timerLength : number) : number {
    if (timer === 1) {return timerLength} return (timer - 1)
}

export function colorAtNextSecond(lightColor: Color, timer: number): Color {
    switch (lightColor) {
        case "red":
            return (timer === 1) ? "green" : "red";
        case "yellow":
            return (timer === 1) ? "red" : "yellow";
        case "green":
            return (timer === 1) ? "yellow" : "green";
        default:
            throw new Error("This error shouldn't occur.")
    }
}