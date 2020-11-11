function rankingPoker(){}
function polygon(){}
function happyNumber(){}
function prince(){}


function nextPermutation(array_) {
	let array = JSON.parse(JSON.stringify(array_));
	// Find non-increasing suffix
	// or find the one is not decrease start from right
	let pivot;// the pivot
	for(let i =array.length-1;i>-1;i--){
		if(i==0){
			pivot = -1;
		}
		if(array[i]>array[i-1]){
			pivot = i;
			break;
		}
	}
	if(pivot==-1){
		return {message:false};
	}
	// console.log(pivot)
	// Find successor to pivot
	let pivot2;
	for(let i=array.length-1;i>-1;i--){
		if(i > pivot && array[i]>array[pivot -1]){
			pivot2 = i;
			break;
		}
	}
	if(pivot2==undefined){
		pivot2 = pivot;
	}
	// console.log(pivot,pivot2);
	let t = array[pivot-1];
	array[pivot-1] = array[pivot2];
	array[pivot2] = t;
	// console.log(array)
	let temp_arr =[];
	for(let i =pivot;i<array.length;i++){
		temp_arr.push(array[i]);
	}
	temp_arr = temp_arr.sort((a,b)=>parseInt(a)-parseInt(b));
	
	let temp_arr2 = [];
	for(let i = 0;i<pivot;i++){
		temp_arr2.push(array[i]);
	}

	return {message:true,next:[...temp_arr2,...temp_arr]};
}

function vampire(number){
	// console.log(number)
	let numbers = number.toString().split('').map(val=>parseInt(val));
	numbers = numbers.sort((a,b)=> parseInt(a)-parseInt(b));
	// console.log(numbers)
	let perms = [];
	for(;;){
		let status = nextPermutation(numbers);
		// console.log(status)
		// break
		if(status.message == false){
			break;
		}else{
			perms.push(status.next);
			numbers=status.next;
		}
	}
	if(numbers.length%2 == 0){
		for(let perm of perms){
			
			let left = perm.splice(0,perm.length/2);
			let right = perm.splice(perm.length/2-1,perm.length/2+1);
			if (parseInt(left.join(''))*parseInt(right.join(''))==number) return 'True Vampire';

		}
		return 'Normal';
	}
	if(numbers.length%2 == 1){
		for(let _perm of perms){
			let perm = JSON.parse(JSON.stringify(_perm));
			let left = perm.splice(0,perm.length/2);
			let right = perm.splice(perm.length/2-1);
			if (parseInt(left.join(''))*parseInt(right.join(''))==number) return 'Pseudo Vampire';
		}
		for(let _perm of perms){
			let perm = JSON.parse(JSON.stringify(_perm));
			let left = perm.splice(0,perm.length/2+1);
			let right = perm.splice(perm.length/2);
			if (parseInt(left.join(''))*parseInt(right.join(''))==number) return 'Pseudo Vampire';
		}
		return 'Normal'
	}
	// console.log(perms)


}
console.log(vampire(126))


function doubledot(matA,matB){

	let sum = 0;
	for (var i = 0; i < 3; i++) 
		for (var j = 0; j < 3; j++) sum += matA[i][j]*matB[i][j];
	return sum;
}






// console.log(doubledot(
//   [
//     [265, -385, -115],
//     [-741, -148, 916],
//     [235, -410, 433]
//   ],
//   [
//     [440, -359, 453],
//     [-453, -254, 169],
//     [-314, 403, -331]
//   ]
// ) )


const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
function sentencesPrime(sentence){
	let letters = [...sentence.match(/[a-zA-Z0-9\s]/gi)].join('');
	let words = letters.split(' ');
	let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
	// console.log(alphabet.length)
	let digits = '0123456789';
	let number_ct = words.map(word=>{
		return word.toLowerCase().split('').reduce((acc,val)=>{
			let n = alphabet.indexOf(val);
			if(n!=-1){
				return acc+n+1;
			}
			n = digits.indexOf(val);
			if(n!=-1){
				return acc+n;
			}
			return acc;
		},0);
	});
	let sum_ = number_ct.reduce((acc,val)=>acc+val,0);
	if(isPrime(sum_)) return 'Prime';
	
	for(let i=0;i<words.length; i++ ){
		if(isPrime(sum_ - number_ct[i])) return `Almost, without ${words[i]}`;
	}
	return 'Composite';

	// console.log(number_ct);
}

// console.log(sentencesPrime('did you smoke'));
function kaprekar(number){
	if (Array(...new Set(number.toString().split(''))).length == 1 && number.toString().length == 4) return NaN;
	let ct = 0;
	let nu = number.toString() + '0000';
	for(;;){
		let big   = nu.split('').sort((a,b)=>parseInt(b)-parseInt(a)).splice(0,4).join('');
		big = parseInt(big);
		let small = nu.split('').sort((a,b)=>parseInt(b)-parseInt(a)).splice(0,4).reverse().join('');
		small = parseInt(small);
		ct++;
		if(big-small == 6174){
			break;
		}
		nu = big - small;
		nu = nu.toString() + '0000';
		// console.log(nu)

	}
	return ct;
}
// console.log(kaprekar(1));
function persistence(number,option){
	if(option == 'add'){
		let nu = number.toString();
		let ct = 0;
		for(;;){
			if(nu.length == 1){
				return ct ;
			}
			let result = nu.split('').reduce((acc,val)=>acc+parseInt(val),0);
			ct = ct + 1;
			nu = result.toString();
		}
	}
	if(option == 'mul'){
		let nu = number.toString();
		let ct = 0;
		for(;;){
			if(nu.length == 1){
				return ct ;
			}
			let result = nu.split('').reduce((acc,val)=>acc*parseInt(val),1);
			ct = ct + 1;
			nu = result.toString();
		}
	}}

// console.log(persistence(77,'mul'));
function guitarTuner(freqs){
	const value = [329.63,246.94,196.00,146.83,110.00,82.41];
	return freqs.map((freq,i)=>{
		if(freq==0){
			return ' - ';
		}
		// let freq_ = parseInt(freq)
		let dif = freq/value[i];
		if(dif < 1){
			if(dif>0.995){
				return 'OK';
			}
			if(dif >=0.98){
				return '>•';
			}
			if(dif < 0.98){
				return '>>•';
			}
			// if(dif < 0.98){
				// return '>>•';
			// }
		}
		if(dif > 1){
			if(dif < 1.005){
				return 'OK';
			}
			if(dif <= 1.02){
				return '•<';
			}
			if(dif > 1.02){
				return '•<<';
			}
		}

		return 'OK';
	});
}
// console.log(guitarTuner([329, 246, 195, 146, 111, 82]));
// console.log(guitarTuner([0, 246.94, 0, 0, 0, 80]));

