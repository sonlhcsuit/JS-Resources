function rankingPoker(cards){
	const CARDS_ORDER = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

	const frequencyMap = arr => arr.reduce((map, item) => map.set(item, map.get(item) + 1 || 1), new Map());

	const isSameSuit = cards => new Set(cards.map(([, suit]) => suit)).size === 1;

	const isSequential = cards => {
  	const orderValues = cards
    .map(([value]) => CARDS_ORDER.indexOf(value))
    .sort((a, b) => a - b);

  	return orderValues.slice(1).every((num, i) => num - orderValues[i] === 1);
	};

	const royalFlush = cards => isSameSuit(cards) && isSequential(cards) && cards.some(([value]) => value === 'A') && 'Royal Flush';

	const straightFlush = cards =>
  		isSameSuit(cards) && isSequential(cards) && 'Straight Flush';

	const fourOfAKind = freqMap => freqMap[0][1] === 4 && 'Four of a Kind';

	const fullHouse = freqMap => freqMap[0][1] === 3 && freqMap[1][1] === 2 && 'Full House';

	const flush = cards => isSameSuit(cards) && 'Flush';

	const straight = cards => isSequential(cards) && 'Straight';

	const threeOfAKind = freqMap => freqMap[0][1] === 3 && 'Three of a Kind';

	const twoPair = freqMap => freqMap[0][1] === 2 && freqMap[1][1] === 2 && 'Two Pair';

	const pair = freqMap => freqMap[0][1] === 2 && 'Pair';


  	const valueAndSuits = cards.map(card => [card.slice(0, -1), card.slice(-1)]);
  	const values = valueAndSuits.map(([value]) => value);
  	const freqMap = Array.from(frequencyMap(values)).sort( ([, a], [, b]) => b -a);

  return (
    royalFlush(valueAndSuits) ||
    straightFlush(valueAndSuits) ||
    fourOfAKind(freqMap) ||
    fullHouse(freqMap) ||
    flush(valueAndSuits) ||
    straight(valueAndSuits) ||
    threeOfAKind(freqMap) ||
    twoPair(freqMap) ||
    pair(freqMap) ||
    'High Card'
  );
}

// console.log(rankingPoker(["10h", "Jh", "Qh", "Ah", "Kh"]))
function polygon(n){
	const ones1 = ["", "hena", "di", "tri", "tetra", "penta", "hexa", "hepta", "octa", "ennea"];
	const ones2 = ["", "hen", "do", "tri", "tetra", "penta", "hexa", "hepta", "octa", "ennea"];
	const tens1 = ["", "deca", "icosa", "triaconta", "tetraconta", "pentaconta", "hexaconta", "heptaconta", "octaconta", "enneaconta"];
	const tens2 = ["", "deca", "icosi", "triaconta", "tetraconta", "pentaconta", "hexaconta", "heptaconta", "octaconta", "enneaconta"];
	const hundreds = ["", "hecta", "dohecta", "triahecta", "tetrahecta", "pentahecta", "hexahecta", "heptahecta", "octahecta", "enneahecta"];
	const more = [[12, "tera"], [9, "giga"], [6, "mega"], [4, "myria"], [3, "chilia"]];

 
	if (n === 3) return "triangle";
	if (n === 4) return "quadrilateral";
	if (n === 9) return "nonagon";
	
	function prefix(m, hena = false) {
		if (!hena && m === 1) return "";
		let p = "";
		if (m >= 100) { p += hundreds[m / 100 | 0]; m %= 100; }
		if (m >= 20) { p += (m % 10 ? tens2[m / 10 | 0] : tens1[m / 10 | 0]); m %= 10; }
		if (m >= 10) { p += ones2[m - 10] + "deca"; m = 0; }
		p += ones1[m];
		return p;
	}
	
	let name = "";
	for (let [i, p] of more) if (n >= 10 ** i) { name += prefix(n / 10 ** i | 0) + p; n %= 10 ** i; }
	name += prefix(n, true);
	return name + "gon";
}
// console.log(polygon(5))


function happyNumber(n){
  const isPrime = k => k > 1 && Array.from({length:k**0.5-3},(_,i) => i+4).every(e => k % e);
  const isHappy = k => k < 1 || k == 4 ? false : k == 1 ? true : isHappy([...k+''].reduce((s,e) => s+(+e)**2, 0));
  const isPerfect = k => k > 1 && k == Array.from({length:k/2+1},(_,i) => i+1).reduce((s,e) => s+(k % e ? 0:e), 0);
  const isTrinum = k => k >= 0 && !(((1+8*k)**0.5-1)/2 % 1);
  return [`${n} is a${['n un', ' '][+isHappy(n)]}happy number.`,
    `${n} is${[' not ', ' '][+isPrime(n)]}a prime number.`,
    `${n} is${[' not ', ' '][+isPerfect(n)]}a perfect number.`,
    `${n} is${[' not ', ' '][+isTrinum(n)]}a triangular number.`].join('\n');
}

// console.log(happyNumber(2))
function prince(Vo, th, Yo, Ds) {
	const G = 9.81;

  	const Vx = Vo * Math.cos(th * Math.PI / 180);
  	const Vy = Vo * Math.sin(th * Math.PI / 180);
  	const dist = Vx * (Vy + Math.sqrt(2 * Yo * G + Vy ** 2)) / G;
  	return Math.abs(dist - Ds) <= 0.5;

}

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
};
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

