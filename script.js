const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }

function convertName(name){
	name =name.toUpperCase()
	switch(name.length){
		case 2:
			return name+'X'
		case 1:
			return name+'XX'
		case 0:
			return 'XXX'
	}
	let nameCon = []
	let nameVol =[]
	let vowel = ['A','I','O','U','E']
	
	for(let i=0;i<name.length;i++){
		if(vowel.includes(name[i]))
			nameVol.push(name[i])
		else
			nameCon.push(name[i])
	}
	if(nameCon.length>3){
		
		return nameCon[0]+nameCon[1]+nameCon[2]
	}else{
		let answ = [...nameCon,nameVol]
		answ.length=3;
		return answ[0]+answ[1]+answ[2]
	}
}

console.log(convertName('J'))