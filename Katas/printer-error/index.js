const printerError = (s) => {
    const yolo = [...s]
    let arr = [];
    yolo.map((e) => {
       e > "m" && e <= "z" ? arr.push(e) : null 
    })
    return `${arr.length}/${yolo.length}`
}