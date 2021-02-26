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
		return 'Normal';
	}
	// console.log(perms)


}