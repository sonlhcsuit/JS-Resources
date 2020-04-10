function numInStr(arr) {
	let test = []
	test = arr.filter(ele=>{
		console.log(ele)
		for(var i=0;i<ele.length;i++){
			console.log()
			switch(ele[i]){
				case '0':
				case '1':
				case '2':
				case '3':
				case '4':
				case '5':
				case '6':
				case '7':
				case '8':
				case '9':
					return true;
				default:
			}
		}
		return false;
    })
    return test
}
let a = numInStr(['abc', 'ab10c',  'a10bc', 'bcd'])
console.log(a)