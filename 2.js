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
    if(value % 2 === 0) {        
        for (let i = 1; i <= value; i++) {
	     arr.push(pic2.join(' '))
      	}
    } else {
      	const cal = (value - 1) / 2 + 1
        
      	for (let i = 1; i <= value; i++) {
            if(i === cal) {
                arr.push(pic2.join(' '))
            } else {
                arr.push(pic1.join(' '))
            }
        }        
    }

    return arr.join('\n')
}

console.log(soal2(5))
