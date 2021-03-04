``` javascript
// Đoạn code dưới đây mô phỏng 1 chương trình gồm 2 phần:
//  Phần 1:
//  -   Cho người dùng nhập vào một chuỗi các số, ngăn cách nhau bởi dấu cách (space)
//  -   In ra màn hình tổng các CHỮ SỐ trong chuỗi người dùng vừa nhập

//  Phần 2:
//  -   Cho người dùng nhập vào một đoạn text có chứa dấu cách
//  -   In ra màn hình đoạn text người dùng vừa nhập, đã được loại bỏ hết dấu cách (space)

//  Yêu cầu:
//  -   Tối ưu đoạn code phía dưới bằng cách tìm ra chức năng chung của 2 phần, gộp lại thành một function,
//  sau đó sử dụng chung function đó cho cả 2 phần

// Lưu ý:
//  -   Đoạn code phía dưới chưa bao gồm việc kiểm tra input của người dùng. Mục đích chính của bài này
//  không phải là kiểm tra input của người dùng, vậy nên bạn hãy tạm công nhận input của người dùng luôn đúng.

// Part 1
let numberNoSpace = "";

let inputNumbers = prompt("Enter your list number, separated by space:");

for (let index = 0; index < inputNumbers.length; index++) {
  if (inputNumbers[index] !== " ") {
    numberNoSpace += inputNumbers[index];
  }
}

let totalSingleNumber = 0;

for (let index = 0; index < numberNoSpace.length; index++) {
  totalSingleNumber += Number(numberNoSpace[index]);
  
}

console.log(totalSingleNumber);


// Part 2
let sentence = prompt("Enter your sentence, separated by space:");
let sentenceNoSpace = "";
for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] !== " ") {
        sentenceNoSpace += sentence[index];
    }
}

console.log(sentenceNoSpace);


// Gợi ý:
//  -   Viết một function nhận vào một parameter là một string bất kỳ
//  -   Return ra một string không chứa dấu cách
``` 
