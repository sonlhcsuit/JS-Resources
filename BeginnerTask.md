### Bin2Dec
Binary is the number system all digital computers are based on. Therefore it's important for developers to understand binary, or base 2, mathematics. The purpose of Bin2Dec is to provide practice and understanding of how binary calculations.
- Must check if input was passed more than 0 and 1
- User views the results in a single output field containing the decimal

```javascript
function bin2dec(binstring){
  let answer;
  return answer;
}
bin2dec(11001122);
```

### CSV2JSON
In additional to providing a useful function, this challenge will also give you practice in modifying existing applications to add new functionality.

```javascript
function csv2json(csvfile) {
  let json;
  return json;
}
csv2json(`"Id","UserName"/n
"1","Sam Smith"/n
"2","Fred Frankly"/n
"1","Zachary Zupers"`)
```
### Calculator
Calculators are not only one of the most useful tools available, but they are also a great way to understand UI and event processing in an application. In this problem you will create a calculator that supports basic arithmetic calculations on integers.

The styling is up to you so use your imagination and get creative! You might also find it worth your time to experiment with the calculator app on your mobile device to better understand basic functionality and edge cases.

- User can see a display showing the current number entered or the result of the last operation.
- User can see an entry pad containing buttons for the digits 0-9, operations - '+', '-', '/', and '=', a 'C' button (for clear), and an 'AC' button (for clear all).
- User can enter numbers as sequences up to 8 digits long by clicking on digits in the entry pad. Entry of any digits more than 8 will be ignored.
- User can click on an operation button to display the result of that operation on:
the result of the preceding operation and the last number entered OR the last two numbers entered OR the last number entered
- User can click the 'C' button to clear the last number or the last operation. If the users last entry was an operation the display will be updated to the value that preceded it.
- User can click the 'AC' button to clear all internal work areas and to set the display to 0.
- User can see 'ERR' displayed if any operation would exceed the 8 digit maximum.
### Countdown Timer

We all have important events we look forward to in life, birthdays, anniversaries, and holidays to name a few. Wouldn't it be nice to have an app that counts down the months, days, hours, minutes, and seconds to an event? Countdown Timer is just that app!

The objective of Countdown Timer is to provide a continuously decrementing display of the he months, days, hours, minutes, and seconds to a user entered event.


- User can see an event input box containing an event name field, an date field, an optional time, and a 'Start' button.
- User can define the event by entering its name, the date it is scheduled to take place, and an optional time of the event. If the time is omitted it is assumed to be at Midnight on the event date in the local time zone.
- User can see a warning message if the event name is blank.
- User can see a warning message if the event date or time are incorrectly entered.
- User can see a warning message if the time until the event data and time that has been entered would overflow the precision of the countdown timer.
- User can click on the 'Start' button to see the countdown timer start displaying the days, hours, minutes, and seconds until the event takes place.
- User can see the elements in the countdown timer automatically decrement. For example, when the remaining seconds count reaches 0 the remaining minutes count will decrement by 1 and the seconds will start to countdown from 59. This progression must take place from seconds all the way up to the remaining days position in countdown display.

### Quiz App
Practice and test your knowledge by answering questions in a quiz application.

As a developer you can create a quiz application for testing coding skills of other developers. (HTML, CSS, JavaScript, Python, PHP, etc...)

- User can start the quiz by pressing a button
- User can see a question with 4 possible answers
- After selecting an answer, display the next question to the User. Do this until the quiz is finished
 At the end, the User can see the following statistics-Time it took to finish the quiz
- How many correct answers did he get
- A message showing if he passed or failed the quiz

### Weather App
A weather application to get the temperature, weather condition and whether it is day or night of a particular city using `accuweather`. A free weather `api`.

User Stories
- Enter the name of a city into the input field.
- By pressing enter, the user submits the name of the city which updates the DOM with the temperature, weather condition, image of day or night and weather condition icon.
