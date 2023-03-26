# Tabs-countdown-modal
3 popular components of a landing page - tabs, countdown timer, modal window. 

HTML + CSS + JavaScript

Section 1 - Tabs
- add as many tabs as you need (event delegate)
- replace with your content for each of the tabs

There are 4 tabs on the webpage (class="info-header-tab"). These can be changed in index.html, lines 47-50, you can use more or less than 4 tabs:

47					<div class="info-header-tab">Лечение</div>
48          <div class="info-header-tab">Отдых</div>
49				  <div class="info-header-tab">Природа</div>
50				  <div class="info-header-tab">Йога</div>

Tabs are wrapped in <div class="info-header"> - line 46 of index.html. "info-header" is a parent nod for "info-header-tab"s.
  
Each of the tabs has related content tab (class="info-tabcontent"). Content of tabs can be adjusted - search for <div class="info-tabcontent fade">, then find it's closing tag and replace with your content. For example, lines 52-64 of index.html make one 'tabcontent'.

When we arrange tabs we do the following:
  1. hide all tabs on the webpage except for the first one
  'hideTabContent' is responsible for this part. If we have more than one tab on the webpage we need to use 'for' cycle to go through each tab element. 
  To start the cycle with hiding the second tab (so that a user still can see first tab) we need to pass '1' as an argument to the 'hideTabContent' when we call this function:
  
 17     hideTabContent(1);
  
Section 2 - Countdown Timer
  - select desired 'end date/time'
  - when countdown expires '00:00:00 left' is displayed 
  - add 'days left' if necessary
  
On this webpage the timer counts down 'hours:minutes:seconds' left before the timer reaches set end date and time. This can be changed in script.js file directly:
  
41    let deadline = '2023-03-26';
  
Actually, we need to determine how many ms is there between 'end date/time' and this moment. Then determine how many whole hours, minutes and seconds is this number and render these amounts in relevant <span>. We also need to update number of ms every second dynamically on a webpage.
  
If you have many days left before your 'end date' this might be confusing for a user to see 3 or even 4-digits 'hours left'. Then I recommend to change formula for hours calculation and add 'days left' calculation in 'getTimeRemaining' function. Replace line 48 of script.js file with the following 2 lines:
  
hours = Math.floor((t/1000/60/60) % 24),
days = Math.floor((t/(1000*60*60*24)));
  
Do not forget to add a separate <span> for 'days' (or 2 <span>s for 'days' and related ":") to index.html file (reasonably before 'hours'):
107  <div class="timer-numbers" id="timer">
108				<span class="hours">18</span>
109				<span>:</span>
110				<span class="minutes">20</span>
111				<span>:</span>
112				<span class="seconds">11</span>
113			</div>

And also add 'days' to object, returned by 'getTimeRemaining' function, functions setClock, addZero.
  
  
  
  
