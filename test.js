function square(x) {
    if (Number.isNaN(Number(x))) {
        throw new Error("x must be a number")
    } else {
        return x ** 2
    }
}
for (let i = 0; i < 10; i++) {
    try {
        let sq;
        if (i == 3) {
            sq = square("hehe")
        } else {
            sq = square(i)
        }
        console.log(sq)
    } catch (e) {
        console.error(e.name + ': ' + e.message)
    }

}