function distanceToNearestVowel(input_str){
	let vowels = 'ueoai';
	let vowel_indexes = input_str.split('').map((element,ind)=>{
		if(vowels.indexOf(element)!=-1){
			return ind;
		}else{
			return -1;
		}
	}).filter((element)=>element!=-1);
	console.log('vowel_indexes');
	return input_str.split('').map((_,ind)=>{
		return vowel_indexes.reduce((min_dist,indexOfVowel)=>{
			return Math.min(min_dist,Math.abs(indexOfVowel-ind));
		},1000000000000);
	});
}
function oddSquarePatch(matrix){
	let size = Math.min(matrix.length,matrix[0].length);
	let bit_matrix = matrix.map((row)=>row.map((ele)=>ele%2==1?0:1));
	while(size !=0){
		// console.log(size)
		for(let i=0;i<=matrix.length - size;i++){
			for(let j=0;j<=matrix[0].length - size;j++){
				// console.log(`${i} ${j}`);
				if(sum_sub_matrix(i,j,size,bit_matrix)==0){
					return size;
				}
			}
		}
		size-=1;
	}
	return 0 ;
	
}
function sum_sub_matrix(row,col,size,matrix){
	let s = 0;
	for(let i = row;i<row+size;i++){
		for(let j=col;j<col+size;j++){
			s+=matrix[i][j];
		}
			
	}
	return s;
}

// let a  = oddSquarePatch([
//   [1, 2, 4, 9],
//   [4, 5, 5, 7],
//   [3, 6, 1, 7]
// ]);
// console.log(a);


// let a = oddSquarePatch([[2, 4, 6]]) ;
// console.log(a);

function junctionOfSelf(number){
	let n = number.toString().length;
	let juncs = [];
	for(let i = number-n*9;i<number;i++){
		if(i+i.toString().split('').reduce((acc,val)=>acc+parseInt(val),0)==number){
			juncs.push(i);
		}
	}
	if(juncs.length ==0){
		return 'Self';
	}else{
		return juncs;
	}
}
// let a = junctionOfSelf(818);
// console.log(a);


function morse(message){
	morseToDots = {
  		".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
  		"--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
		"--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
  		"...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
 		"-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
  		"...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
  		"---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
  		".-.-.-":".", ".----.":"\"", "---..." :":", "--..--":", ", " ":""
		};
	return message.split(' ').map(e=>morseToDots[e]).join('');
}

// console.log(morse(".... . .-.. .--.   -- .   -.-.--"));
function getFrame(col,row,char){
	let frame = [];
	let row_head = [char.repeat(col)];
	frame.push(row_head);
	for(let i =0;i<row-2;i++){
		frame.push([`${char}${' '.repeat(col-2)}${char}`]);
	}
	frame.push(row_head);
	return frame;
}

function magicSigil(input_str){
	let vowels = 'aiueo';
	let chars = input_str.split(' ').join('').toLowerCase().split('').reverse();
	chars = new Array(...new Set(chars));
	return chars.filter((val)=>'ueoai'.indexOf(val)==-1).reverse().join('');
}

// let a = magicSigil("I HAVE WONDERFUL FRIENDS WHO LOVE ME");
// console.log(a);

Array.prototype.count = function (countValue){
	let ct = 0;
	// console.log(this);
	for(let value of this){
		ct=ct + ( value==countValue ? 1:0);
	}
	return ct;
};

function selfDescribe(number){
	if(number.toString().length %2==1){
		return false;
	}
	let str = number.toString();
	let digits = number.toString().split('');
	let counter = {};
	for(let dg of '0123456789'){
		counter[parseInt(dg)]=digits.count(dg);
	}
	for(let i=0;i<str;i=i+2){
		let x = str[i];
		let y = str[i+1];
		if(counter[y]!=x){
			console.log(x,y);
			console.log(counter[x]);
			return false;
		}
	}
	return true;
	
}


function magicSquare(matrix){
	if(matrix.length != matrix[0].length) return false;
	// let value = undefined;
	let rows = [...matrix];
	let cols = [];
	let diag = [[],[]];
	for(let i=0;i<matrix.length;i++){
		let col = [];
		for(let j = 0;j<matrix.length;j++){
			col.push(matrix[j][i]);
			if(i==j){
				diag[0].push(matrix[i][j]);
			}
			if(j==matrix.length -1 - i){
				diag[1].push(matrix[i][j]);
			}
		}
		cols.push(col);
	}
	let components = [...rows,...cols,...diag];
	components = components.map(val=>val.reduce((acc,ele)=>acc+ele,0));
	let threshold = components[0];
	return components.every((val => val==threshold));
	// console.log(components);
	// console.log(rows);
	// console.log(cols);
	// console.log(diag);



}

// let an = magicSquare([
//   [16,  3,  2, 13],
//   [ 5, 10, 11,  8],
//   [ 9,  6,  7, 12],
//   [ 4, 15, 14,  1]
// ]);

// console.log(an);

function arrange(str){ // re arrange consonant vs vowel to the order
	let _str = str.toLowerCase();
	let cons = _str.split('').filter(val=>'ueoai'.indexOf(val) == -1).join('');
	// console.log(cons)
	let vows = _str.split('').filter(val=>'ueoai'.indexOf(val) != -1).join('');
	return `${cons}_${vows}xxx`;
}

function fiscalCode({name,surname,gender,dob}){
	const MONTHS = {
    	1: "A",
    	2: "B",
    	3: "C",
    	4: "D",
    	5: "E",
    	6: "H",
    	7: "L",
    	8: "M",
    	9: "P",
		10: "R",
    	11: "S",
    	12: "T"
	};
	let code = '';
	let nameArranged = arrange(name);
	let surnameArranged = arrange(surname);
	// console.log(surnameArranged);
	if(surnameArranged.split('_')[0].length < 3){
		surnameArranged = surnameArranged.replace('_','');
	}
	code = code + surnameArranged[0] + surnameArranged[1] + surnameArranged[2];
	console.log(code);
	switch(nameArranged.split('_')[0].length){
		case 0:
		case 1:
		case 2:
		nameArranged = nameArranged.replace('_','');
		code = code + nameArranged[0]+ nameArranged[1]+nameArranged[2];
			break;
		case 3:
		code = code + nameArranged[0]+nameArranged[1]+nameArranged[2];
			break;
		default:
		code = code + nameArranged[0]+nameArranged[2]+nameArranged[3];
	}
	code = code + dob[dob.length-2] + dob[dob.length-1];
	code = code + MONTHS[parseInt(dob.split('/')[1])]	;
	console.log(code);
	if(gender == 'M'){
		let day = parseInt(dob.split('/')[0]);
		code = code + (day<10?`0${day}`:`${day}`);
			
	}
	if(gender =='F'){
		let day = parseInt(dob.split('/')[0]);
		code = code + `${day+40}`;
	}

	return code ;
}


// console.log(fiscalCode({
//     name: "Helen",
//     surname: "Yu",
//     gender: "M",
//     dob: "1/1/1900"
// }));

function boomerang(arr){
	let ct = 0;
	for(let i=0;i<arr.length -2 ;i++){
		x = arr[i];
		y = arr[i+1];
		z = arr[i+2];
		ct = ct + (x==z && x!=y?1:0);
	}
	return ct ;

}

// console.log(boomerang([1,7,1,7,1,7,1]));
