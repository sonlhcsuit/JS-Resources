# ***Problems Solving***
_____________________________
> ### Poker Hand Ranking
In this challenge, you have to establish which kind of Poker combination is present in a deck of five cards. Every card is a string containing the card value (with the upper-case initial for face-cards) and the lower-case initial for suits, as in the examples below:

"Ah" ➞ Ace of hearts  
"Ks" ➞ King of spades  
"3d" ➞ Three of diamonds  
"Qc" ➞ Queen of clubs  


There are 10 different combinations. Here's the list, in order of importance:

|Name	            |Description                                        |
|-------------------|---------------------------------------------------|
|Royal Flush        |	A, K, Q, J, 10, all with the same suit.         |
|Straight Flush	    |Five cards in sequence, all with the same suit.    |
|Four of a Kind	    |Four cards of the same rank.                       |
|Full House	        |Three of a Kind with a Pair.                       |
|Flush	            |Any five cards of the same suit, not in sequence.  |
|Straight	        |Five cards in a sequence, but not of the same suit.|
|Three of a Kind	|Three cards of the same rank.                      |
|Two Pair	        |Two different Pair.                                |
|Pair	            |Two cards of the same rank.                        |
|High Card	        |No other valid combination.                        |



Given an array hand containing five strings being the cards, implement a function that returns a string with the name of the highest combination obtained, accordingly to the table above.

```js
pokerHandRanking(["10h", "Jh", "Qh", "Ah", "Kh"]) ➞ "Royal Flush"

pokerHandRanking(["3h", "5h", "Qs", "9h", "Ad"]) ➞ "High Card"

pokerHandRanking(["10s", "10c", "8d", "10d", "10h"]) ➞ "Four of a Kind"
```

> ### Who's That Polygon?
Every polygon has an official name. Individual polygons are named according to the number of sides, combining a Greek-derived numerical prefix with the suffix -gon, e.g. pentagon, dodecagon.

Write a function that takes an integer n as argument and returns the official name of a n-sided polygon.

The following prefixes table is used to construct the name of a polygon.

|Ones|		Tens	|	Hundreds                            |
|---|---------------|-------------------|-------------------|
1	|hena-, hen-	|10	deca-	        |100	hecta-      |
2	|di-, do-	    |20	icosi-, icosa-	|200	dohecta-    |
3	|tri-, tria-	|30	triaconta-	    |300	triahecta-  |
4	|tetra-	        |40	tetraconta-	    |400	tetrahecta- |
5	|penta-	        |50	pentaconta-	    |500	pentahecta- |
6	|hexa-	        |60	hexaconta-	    |600	hexahecta-  |
7	|hepta-	        |70	heptaconta-	    |700	heptahecta- |
8	|octa-	        |80	octaconta-	    |800	octahecta-  |
9	|ennea-	        |90	enneaconta-	    |900	enneahecta- |


For polygons with 3 through 9 sides, simply add "-gon" to the ones prefixes. For 10 through 99 sides, you return the tens prefix followed by the ones prefix and then by "-gon". For 100 through 999 sides, you start from the hundreds prefix, then add the tens prefix and finally the ones prefix followed by "-gon".

For polygons with more than 999 sides, the following prefixes are used similarly to how "conta-" and "hecta-" are used for tens and hundreds places respectively:

|Place	|Prefix|
|-|-|
|10	                |conta-
|100	            |hecta-
|1000	            |chilia-
|10,000	            |myria-
|100,000	        |decamyria-
|200,000	        |icosamyria-
|300,000	        |triacontamyria-
|1,000,000	        |mega-
|1,000,000,000	    |giga-
|1,000,000,000,000	|tera-
And finally, the 10¹⁰⁰-gon is called googolgon and the ∞-gon (with a countable infinite number of sides) is called apeirogon.

```js

polygonName(3) ➞ "triangle"
// exception of: tri-gon

polygonName(4) ➞ "quadrilateral"
// exception of: tetra-gon

polygonName(5) ➞ "pentagon"
// penta-gon

polygonName(7) ➞ "heptagon"
// hepta-gon

polygonName(19) ➞ "enneadecagon"
// ennea-deca-gon

polygonName(36) ➞ "triacontahexagon"
// triaconta-hexa-gon

polygonName(428) ➞ "tetrahectaicosioctagon"
// tetrahecta-icosi-octa-gon

polygonName(12345) ➞ "myriadichiliatriahectatetracontapentagon"
// myria-dichilia-triahecta-tetraconta-penta-gon
```
Hint:  
The triangle, quadrilateral and nonagon are exceptions, although the regular forms trigon, tetragon, and enneagon are sometimes encountered as well.

> ### Happy Numbers & More
A happy number is a number defined by the following process:   

Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.

A triangular number counts objects arranged in an equilateral triangle. The nth triangular number is the number of dots in the triangular arrangement with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n.

**Objective**  
Create a function that takes a number as an argument and returns a print showing if the number is happy or not, if the number is prime or not, if the number is perfect or not and if the number is triangular or not.

```js
happy(2) ➞
"2 is an unhappy number.
2 is a prime number.
2 is not a perfect number.
2 is not a triangular number."

happy(7) ➞
"7 is a happy number.
7 is a prime number.
7 is not a perfect number.
7 is not a triangular number."

happy(8128) ➞
"8128 is a happy number.
8128 is not a prime number.
8128 is a perfect number.
8128 is a triangular number."
```

> ### Affine Cipher Encrypt
Create a function that takes a string of plain text (English alphabet) all in lowercase, encryption function, and converts the plain text into ciphertext using the affine encryption function.

Encryption Function  

In the affine cipher, the letters of an alphabet of size m are first mapped to the integers in the range 0 … m − 1. It then uses modular arithmetic to transform the integer that each plaintext letter corresponds to into another integer that corresponds to a ciphertext letter.

The encryption function for a single letter is `E(x)=(ax+b)mod m` where modulus m is the size of the alphabet and a and b are the keys of the cipher. The value a must be chosen such that a and m are coprime.

The alphabet is going to be the letters a through z and will have the corresponding values a=0, b=1, c=2, d=3 ... z=25.

```js
affineEncrypt("salakpur", "(x+2)%26") ➞ "ucncmrwt"
// a = 1 , b = 2
// Encryption function = "(x+2)%26"
// gcd(1, 26) = 1
// Therefore, we apply the encryption function for the letters.

affineEncrypt("dang", "(2x+7)%26") ➞ "2 and 26 are not coprime"
// a = 2, b = 26
// gcd(2, 26) = 2
```
Hint: 
For the problem 1 =< a <= 11 , 1 =< b <= 9 , m = 26
Create your own gcd function.

> ### Vigenere Cipher
The Vigenere Cipher is a poly-alphabetic substitution cipher that uses a set of shift ciphers and a keyword.

One of the simplest ciphers is the Caesar/shift cipher, where each letter in the plaintext message is replaced by the letter a particular number of positions up, or downstream in the alphabet. Shift 1 Caesar cipher:

A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z   
B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A   

The Vigenere table is generated by doing a shift-1 Caesar cipher as many times as the number of letters in the alphabet (English alphabet, for this challenge).

A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z   
B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A  
C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B   
D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C   
E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D   
F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E   
G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F   
H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G   
I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H   
J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I   
K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J   
L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K  
M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L   
N	O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M   
O	P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N   
P	Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O   
Q	R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P   
R	S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q   
S	T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R   
T	U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S    
U	V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T   
V	W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U   
W	X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V   
X	Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W   
Y	Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X   
Z	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y   

To encipher the message, first, spaces and punctuation are removed to create the plaintext. All characters are transformed to uppercase to match the table:

message = "Soylent Green is people."

plaintext = "SOYLENTGREENISPEOPLE"
A keyword is chosen, in this case, "spoiler" and repeated as many times as necessary to match the length of the plaintext:

key = "SPOILERSPOILERSPOILE"
The last "r" is dropped as the plaintext length has been reached.

The plaintext and key are lined up. To encipher the 1st letter, a search is done across the first row to find the column of the plaintext letter, in this case "S", in the 19th column. Then a search is done down the first column to locate the row of the 1st key letter, in this case also "S", in the 19th row. The letter at the intersection between column 19 and row 19, "K", will be the 1st letter in the ciphertext.

The 2nd plaintext letter "O" is at column 15, while the 2nd key letter "P" is at row 16. The letter at the intersection is "D". And so on.

|Plaintext      |	S	O	Y	L	E	N	T	G	R	E	E	N	I	S	P	E	O	P	L	E|
|---------------|--------------------------------------------------------------------------------|
|Key            |	S	P	O	I	L	E	R	S	P	O	I	L	E	R	S	P	O	I	L	E|
|Ciphertext     |	K	D	M	T	P	R	K	Y	G	S	M	Y	M	J	H	T	C	X	W	I|

Create a function that takes two strings: a message or ciphertext, and a keyword. Return the ciphertext if the input is a message, or the deciphered text (without spaces or punctuation) if the input is in ciphertext.

```js
vigenere("Soylent Green is people.", "spoiler") ➞ "KDMTPRKYGSMYMJHTCXWI"

vigenere("Darth Vader is Luke's father.", "spoiler") ➞ "VPFBSZRVTFQDPLCTGNLXYWG"

vigenere("HMRSSAIEKLSAXQILCCAC", "python") ➞ "SOYLENTGREENISPEOPLE"
```

> ### Columnar Cipher
The columnar cipher is a transposition cipher that works like this.

Start with a secret message:

msg = "Meet me by the lake at midnight. Bring shovel."
Transform uppercase letters into lowercase and remove punctuation and spaces:

msg = "meetmebythelakeatmidnightbringshovel"
Then, pick a keyword made out of distinct letters:

keyword = "python"
Break up the message into chunks of the same length as the keyword, and write them in rows under the keyword. Then, number the columns based on the alphabetised order of the letters in the keyword:

p	y	t	h	o	n
m	e	e	t	m	e
b	y	t	h	e	l
a	k	e	a	t	m
i	d	n	i	g	h
t	b	r	i	n	g
s	h	o	v	e	l
4	6	5	1	3	2

Read off the enciphered message (ciphertext) from the columns, in the order specified by the numbers:

ciphertext = "thaiivelmhglmetgnembaitsetenroeykdbh"
If the message length is not a multiple of the keyword length, fill in each blank space with "x". For example:

msg = "Meet me at midnight."

keyword = "python"

p	y	t	h	o	n  
m	e	e	t	m	e  
a	t	m	i	d	n  
i	g	h	t	x	x  
Create a function that takes a string and a keyword. Return the ciphertext if the string is in plaintext (i.e. broken up into normal English words and punctuated), or the deciphered message if the string is in ciphertext. The resulting deciphered message will not have spaces.

```js
cipher("Meet me by the lake at midnight. Bring shovel.", "python")
➞ "thaiivelmhglmetgnembaitsetenroeykdbh"

cipher("meeanbsleyamgioxebltirhxttkihnvxmhedtgex", "monty")
➞ "meetmebythelakeatmidnightbringshovelxxxx"

cipher("Mission Delta Kilo Sierra has been compromised. Kill Steve. Evacuate", "cake")
➞ "ioliiabcrsiteuxmieksrsnpiksecesdaoraemmdlvatxsntleheooelevax"
```

> ### Sentence Primeness
A word value can be established summing up all the numeric values of every single character (excluding spaces and punctuation): a value from 1 ("a") to 26 ("z") is given to letters, while numbers have their literal values, from 0 to 9. The sentence value is the sum of the values of the words.

sentence = "ABC ! abc ... @ 123"
// Remove spaces, punctuation and any symbol.

sentence = ["ABC", "abc", "123"]

words values = "ABC" = 1+2+3 = 6 | "abc" = 1+2+3 = 6 | "123" = 1+2+3 = 6

sentence value = 6 + 6 + 6 = 18
Given a string sentence implement a function that returns:

Prime Sentence if the original sentence value is a prime.

Almost Prime Sentence (xxx) if the sentence value is not a prime but, after a single removal of any of the words the new sentence value is a prime (see example #2 for a clearer explanation), with xxx being the word removed. If more than a word can be removed to obtain a prime value, return the first encountered in the original sentence.

Composite Sentence if the sentence value is not a prime and more than one removal is necessary to make the new sentence value (or if none is possible).

Letters values are case insensitive ("aZ" = "Az" = 1 + 26 = 27), while numbers are treated as words ("123" = 1+2+3 = 6).

Examples
sentencePrimeness("Help me!") ➞ "Prime Sentence"
// "Help" + "me" = 41 + 18 = 59 (prime)

sentencePrimeness("42 is THE aNsWeR...") ➞ "Almost Prime Sentence (aNsWeR)
// "42" + "is" + "THE" + "aNsWeR" = 6 + 28 + 33 + 80 = 147 (not prime)
// Without "42" new value is 141
// Without "is" new value is 119
// Without "THE" new value is 114
// Without "aNsWeR" new value is 67 (prime!)
// If the word "aNsWeR" is removed from sentence the new value is a prime.

sentencePrimeness("Did you smoke?") ➞ "Composite Sentence"
// "Did" + "you" + "smoke" = 17 + 61 + 63 = 141 (not prime)
// Without "Did" new value is 124
// Without "you" new value is 80
// Without "smoke" new value is 78
// No single removals make the new sentence value a prime.
Notes
Only letters and digits can be part of the sentence.
If it's an Almost Prime Sentence, the removed word between the brackets must maintain the same capitalization format found in the original sentence (see example #2).
The sentence is Almost Prime if just a single word can be removed to make value a prime, no multiple removals allowed.
Remember the rule for numbers: "10" is a word, so its value is 1+0 and not 10.


> he Mysterious Number 6174
The number 6174 is a really mysterious number. At first glance, it might not seem so obvious. But as we are about to see, anyone who can subtract can uncover the mystery that makes 6174 so special.

In 1949 the mathematician D. R. Kaprekar devised a process now known as Kaprekar's operation. First choose a four digit number where the digits are not all the same (that is not 1111, 2222, and so on). Then rearrange the digits to get the largest and smallest numbers these digits can make. Finally, subtract the smallest number from the largest to get a new number, and carry on repeating the operation for each new number.

It is a simple operation, but Kaprekar discovered it led to a surprising result: When we reach 6174 the operation repeats itself, returning 6174 every time. In fact, you reach 6174 for all four digit numbers that don't have all the digits the same. It's marvellous. Kaprekar's operation is so simple but uncovers such an interesting result.

Objective
Create a function that takes a four digit number as an argument and returns the numbers of iterations needed to reach the number 6174, as well as a print of each iteration. If the number is a repdigit, the function must return a message to the user.

Important
If in any iteration you have a 1-digit, 2-digits or 3-digits number, add leading zeros for the calculations and the prints. Please see example below where n = 1.
Based on the point mentioned before, you can expect, for example, that the numbers 1 and 1000 will lead to the same iterations.
Examples
Kaprekar(1234) ➞
"---------- The Mysterious Number 6174 ----------

Number of iterations: 3

Iterations:

Iteration Nr. 1: 4321 - 1234 = 3087
Iteration Nr. 2: 8730 - 0378 = 8352
Iteration Nr. 3: 8532 - 2358 = 6174

------------------------------------------------"


Kaprekar(2005) ➞
"---------- The Mysterious Number 6174 ----------

Number of iterations: 7

Iterations:

Iteration Nr. 1: 5200 - 0025 = 5175
Iteration Nr. 2: 7551 - 1557 = 5994
Iteration Nr. 3: 9954 - 4599 = 5355
Iteration Nr. 4: 5553 - 3555 = 1998
Iteration Nr. 5: 9981 - 1899 = 8082
Iteration Nr. 6: 8820 - 0288 = 8532
Iteration Nr. 7: 8532 - 2358 = 6174

------------------------------------------------"


Kaprekar(8888) ➞
"---------- The Mysterious Number 6174 ----------

Error, n cannot be a repdigit.

------------------------------------------------"


Kaprekar(1) ➞
"---------- The Mysterious Number 6174 ----------

Number of iterations: 5

Iterations:

Iteration Nr. 1: 1000 - 0001 = 0999
Iteration Nr. 2: 9990 - 0999 = 8991
Iteration Nr. 3: 9981 - 1899 = 8082
Iteration Nr. 4: 8820 - 0288 = 8532
Iteration Nr. 5: 8532 - 2358 = 6174

------------------------------------------------"
Notes
N/A