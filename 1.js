const soal1 = nilai => {
    const zeroSplit = nilai.toString().split(0)
    const asd = []

    for (let i = 0; i < zeroSplit.length; i++) {
        const element = zeroSplit[i].split('')
        asd.push(...element.sort())
    }

    return asd.join('')
}

console.log(soal1(5956560159466056))
