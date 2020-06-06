const soal1 = nilai => {
    const zeroSplit = nilai.toString().split(0)
    const arr = []

    for (let i = 0; i < zeroSplit.length; i++) {
        const element = zeroSplit[i].split('')
        arr.push(...element.sort())
    }

    return arr.join('')
}

console.log(soal1(5956560159466056))
