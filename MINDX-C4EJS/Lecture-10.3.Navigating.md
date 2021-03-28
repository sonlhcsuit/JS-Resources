# Navigation 
- Một điều cần phải chú ý rằng là chúng ta không nên đặt quá nhiều id để chọn => nhớ nhiều id => khó kiểm soát
- Thay vì dùng **id** thì ta có thể sử dụng class và dùng hàm **getElementsByClassName** để xử lý.
- Nếu nắm rõ các quy tắc để viết **selector** của CSS thì sử dụng **querySelector**, **querySelectorAll** để chọn element cũng là một cách nhanh chóng
- Tuy nhiên, có một cách nữa cũng có thể giúp tiết kiệm thời gian là tận dụng mối quan hệ cấp bậc cha - con

- Giả sử đây là bối cảnh html của chúng ta 
```html
<body>
	<nav>
		<a href="./index.html">Brown Bear</a>
		<a href="./aboutme.html">About Me</a>
	</nav>
	<h1>The Brown Bear</h1>
	<nav id="nav">
		<ul>
			<li><a href="#introduction">Introduction</a></li>
			<li><a href="#habitat">Habitat</a></li>
			<li><a href="#media">Media</a></li>
		</ul>
	</nav>
	<div id="introduction">
		<h2>About Brown Bears</h2>
		<p>The brown bear (<em>Ursus arctos</em>) is native to parts of northern Eurasia and North America. Its
			conservation status is currently <strong>Least Concern</strong>.<br /><br /> There are many subspecies
			within the brown bear species, including the
			Atlas bear and the Himalayan brown bear.</p>
		<a href="https://en.wikipedia.org/wiki/Brown_bear" target="_blank" id="link">Learn More</a>
		<h3>Species</h3>
		<ul>
			<li>Arctos</li>
			<li>Collarus</li>
			<li>Horribilis</li>
			<li>Nelsoni (extinct)</li>
		</ul>
		<h3>Features</h3>
		<p>Brown bears are not always completely brown. Some can be reddish or yellowish. They have very large, curved
			claws and huge paws. Male brown bears are often 30% larger than female brown bears. They can range from 5
			feet to 9 feet from head to toe.</p>
	</div>
	<div id="habitat">
		<h2>Habitat</h2>
		<h3>Countries with Large Brown Bear Populations</h3>
		<ol>
			<li>Russia</li>
			<li>United States</li>
			<li>Canada</li>
		</ol>
		<h3>Countries with Small Brown Bear Populations</h3>
		<p>Some countries with smaller brown bear populations include Armenia, Belarus, Bulgaria, China, Finland,
			France, Greece, India, Japan, Nepal, Poland, Romania, Slovenia, Turkmenistan, and Uzbekistan.</p>
	</div>
	<div id="media">
		<h2>Media</h2>
		<img src="https://s3.amazonaws.com/codecademy-content/courses/web-101/web101-image_brownbear.jpg" />
		<video
			src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-2/htmlcss1-vid_brown-bear.mp4"
			height="240" width="320" controls>Video not supported</video>
	</div>
</body>
```

## parent & child
- Có thể thông qua các thuộc tính của một element để truy cập tới các element ở bậc cao hơn
<img style="display:block;margin:auto;" src="../sources/C4EJS/C4EJS-Lecture-10.2.jpg" >

```js
const element = document.getElementById('more')         // chọn element có id=more
const introDIV = element.parentElement                  // element cha div với id=introduction
introDIV.firstElementChild                              // element con đầu tiên - h2:About Brown Bears
introDIV.lastElementChild                               // element con cuối cùng - p:Brown bears are not...
introDIV.children                                       // chọn cả element con của, ở dạng HTML collections - giống như mảng!
introDIV.children[5]                                    // element con thứ 5 - h3:species
```

---

## sibling
```js
const element = document.getElementById('more')			// chọn element có id=more
element.nextSibling      								// element liền sau, là element h3:Species
element.previousSibling									// element liền trước, là element p:The brown bear...
```
- Những propety có từ node và element về cơ bản là giống nhau (**parentElement** - **parentNode**,...), chỉ có sự khác biệt khi sử dụng quan hệ cha - con không phải là element (node không nhất thiết phải là HTML Element)

---

## Exercise:

---

## Reference & More Resources: 
* https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
* https://developer.mozilla.org/en-US/docs/Web/API/ChildNode
* https://developer.mozilla.org/en-US/docs/Web/API/Node
* https://www.w3schools.com/js/js_htmldom_navigation.asp
* https://www.w3schools.com/js/js_htmldom_nodes.asp


---
<div>
<a href="./Lecture-10.2.element.md">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="./Lecture-09.3.Lexical.md">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
