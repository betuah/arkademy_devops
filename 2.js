const soal2 = value => {
    let pic1      = []
    let pic2      = []
    let arr       = []

    // Membuat collumn gambar 1
    for (let k = 1; k <= value; k++) {
        if(k === 1 || k === value) {
            pic1.push('*')
        } else {
            pic1.push('=')
        }
    }

    // Membuat collumn gambar 2
    for (let j = 1; j <= value; j++) {
        pic2.push('*')
    }

    // Membuat baris
    for (let i = 1; i <= value; i++) {
        if(i % 3 === 0) {
            arr.push(pic2.join(' '))
        } else {
            arr.push(pic1.join(' '))
        }
    }

    return arr.join('\n')
}

console.log(soal2(9))