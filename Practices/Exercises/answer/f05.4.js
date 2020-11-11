Number.prototype.digitSum = function(){
	return this.toString().split('').reduce((acc,val)=>acc+parseInt(val),0);
}
Number.prototype.isHarshad = function(){
	return this%this.digitSum()==0;
}
function harshad(n) {
	var i=n+1,j=n-1, cluster=[]; 
	if (n.isHarshad()) {cluster.push(n)} else {return [0,0]}
	while(i.isHarshad()||j.isHarshad()){
		if (i.isHarshad()) {cluster.push(i);i+=1}
		if (j.isHarshad()) {cluster.push(j);j-=1}
	}
	cluster = cluster.sort((a,b)=>a-b)
	return [cluster.length,cluster.indexOf(n)+1]
}
// console.log(harshad(133))
function isWristband(arr) {
	const isRow = arr.every(r => new Set(r).size === 1);
	const isCol = new Set(arr.map(r => r.join(''))).size === 1;
	const isDiagL = arr.slice(1).every((r,ri) => r.slice(1).every((c,ci) => c === arr[ri][ci]));
	const isDiagR = arr.slice(1).every((r,ri) => r.slice(0,-1).every((c,ci) => c === arr[ri][ci+1]));
	return isRow || isCol || isDiagL || isDiagR;
}

function finalCountdown(arr) {
  let countdowns = [], seq = [], before = 0;
  for (const n of arr) {
    if (before - n !== 1) seq = [];
    seq.push(n);
    if (n === 1) {
      countdowns.push(seq);
      seq = [];
    }
    before = n;
  }
  return [countdowns.length, countdowns];
}

function ascending(str){

	const chunk = (str, size) => {
  	const result = [];

  	for (let i = 0; i < str.length; i += size) {
    	result.push(str.slice(i, i + size));
  	}

  	return result;
	};


	return Array.from({ length: str.length / 2 }, (_, i) => chunk(str, i + 1)).some(
    	nums => nums.slice(1).every((num, i) => nums[i] - num === -1)
  	);

}

function bucketize(phrase, n) {
	phrase = phrase.split(' ');
	let result = [];
	let currentWord = [];
	const currLen = x => x.reduce((a,v) => a + v.length, x.length - 1);
	while (phrase.length) {
		let nextWord = phrase.shift();
		if (nextWord.length > n) { return result; }
		if (currLen(currentWord) + nextWord.length + 1 <= n) {
			currentWord.push(nextWord);
		} else {
			result.push(currentWord.join(' '));
			currentWord = [nextWord];
		}
	}
	result.push(currentWord.join(' '));
	return result;
}

function ruthAaron(n) {
	
	const primeFactorSum = (n,dist) => { 
		let res = [];	
		for (let i = 2; i < Math.sqrt(n) + 1; i ++){
			if (n % i == 0){
				res.push(i);
				n /= i;	
				i --;
			}
		}
		n != 1 ? res.push(n) : '';
		return dist ? Array.from(new Set(res)).reduce((tot,a) => tot + a,0) 
			: res.reduce((tot,b) => tot + b,0);
}
	
	return primeFactorSum(n, true) == primeFactorSum(n-1, true) 
		&& primeFactorSum(n,true) == primeFactorSum(n) 
		&& primeFactorSum(n-1,true) == primeFactorSum(n-1) ? ['Aaron',3]
		: primeFactorSum(n, true) == primeFactorSum(n-1, true) ? ['Aaron',1]
		: primeFactorSum(n) == primeFactorSum(n-1) ? ['Aaron',2] 
		
		: primeFactorSum(n, true) == primeFactorSum(n+1, true) 
		&& primeFactorSum(n,true) == primeFactorSum(n) 
		&& primeFactorSum(n+1,true) == primeFactorSum(n+1) ? ['Ruth',3]
		: primeFactorSum(n, true) == primeFactorSum(n+1, true) ? ['Ruth',1]
		: primeFactorSum(n) == primeFactorSum(n+1) ? ['Ruth',2]
		
		: false;
	
}


function isbn13(str) {
		let length = str.length;
	const isbn = (n) =>{
		let sum=0;
		if( length === 10 ){
			sum = [...n].reduce((acc, cur, i)=>{
			if (cur == 'X') cur =10
			acc += cur* (10-i);
			return acc
		},0 )
			return sum%11 ===0 ? "Valid" : 'Invalid'
		}else {
			sum = [...n].reduce((acc,cur,i)=>acc+=cur*(i===0 || i%2===0?1:3),0)
		return sum %10 ===0 ? "Valid" : 'Invalid'
		}	
	}
	const convert =(n) =>{
		n = '978'+n;
		let sum =[...n].reduce((acc,cur,i)=>{
			if(cur === 'X') cur=10
			acc+=cur*(i===0 || i%2===0?1:3);
			return acc
		},0)
			let checkDigit = n[n.length-1]
			 checkDigit = Math.abs(sum%10 - (checkDigit==='X'?10:checkDigit))
	return n.slice(0, n.length-1)+checkDigit
	}
	return length===13?isbn(str):length===10 && isbn(str)==='Valid'?convert(str):'Invalid'
}

function bitwiseIndex(arr) {
	let x = [0, -Infinity];

	for (let i = 0; i < arr.length; i++)
		if (!(arr[i] & 1) && arr[i] > x[1])
			x = [i, arr[i]];

	return x[1] === -Infinity ? "No even integer found!" : {[`@${["even", "odd"][x[0] & 1]} index ${x[0]}`]: x[1]};
}

function ulam(n) {
	let arr=[1,2]
	for(let j=+arr.slice(-1)+1;arr.length<=n;j++){
		let h=arr, c=0
		h.map((e,i,a)=>a.some(el=>el==j-e && el!=e)?c++:"")
		if(c==2) arr.push(j)
	}
	return arr[n-1]
}

function asteroidCollision(a) {
	if (a.length<2) return a
	if (a[0]<0){
		return [a[0]].concat(asteroidCollision(a.slice(1))) }
	else{
		let c = asteroidCollision(a.slice(1))
		if (c[0]>0) return [a[0]].concat(c)
		if (a[0]+c[0] < 0) return c
		if (a[0]+c[0] === 0) return c.slice(1)
		if (a[0]+c[0] > 0) return asteroidCollision([a[0]].concat(c.slice(1)))	
	}
}
