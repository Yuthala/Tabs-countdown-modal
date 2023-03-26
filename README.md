# Tabs-countdown-modal
3 popular components of a landing page - tabs, countdown timer, modal window. 

HTML + CSS + JavaScript

Section 1 - Tabs
- add as many tabs as you need (event delegate)
- replace with your content for each of the tabs

There are 4 tabs on the webpage (class="info-header-tab"). These can be changed in index.html, lines 47-50, you can use more or less than 4 tabs. Tabs are wrapped in <div class="info-header"> - line 46 of index.html. "info-header" is a parent nod for "info-header-tab"s.
  
![image](https://user-images.githubusercontent.com/113363158/227763153-1dc69467-a9e6-44d6-80f6-fa0d57d2b4c3.png)
  
Each of the tabs has related content tab (class="info-tabcontent"). Content of tabs can be adjusted - search for <div class="info-tabcontent fade">, then find it's closing tag and replace with your content. For example, lines 52-64 of index.html make one 'tabcontent'.

When we arrange tabs we do the following:
  1. Hide all tabs on the webpage except for the first one
  'hideTabContent' is responsible for this part. If we have more than one tab on the webpage we need to use 'for' cycle to go through each tab element. 
  To start the cycle with hiding the second tab (so that a user still can see the first tab) we need to pass '1' as an argument to the 'hideTabContent' when we call this function:
  
 17     hideTabContent(1);
  
Opposite function 'showTabContent' shows content but we'll call it in Event Listener later on.
  
2. Next thing to do is to add EventListener on click by one of "info-header-tab"s. EventListener is applied to class="info-header' element which is a parent element for all "info-header-tab"s - thus we delegate events from the element to it's parent and don't need to add EventListener for each "info-header-tab" separately. It also gives us flexibility in terms of how many tabs we can use on a webpage. We can delete or add any reasonable number of tabs - our code will work for any number of tabs.
  
3. We also need to show specific 'tabcontent' related to selected 'header-tab'. This can be done by using 'for' cycle to go through "info-header-tab"s. If only [i] matches the index of the tab selected the program will execute this piece of code:
  
![image](https://user-images.githubusercontent.com/113363158/227765153-4f34dada-1718-4a3c-90b9-9851394fbd6a.png)

Section 2 - Countdown Timer
  - select desired 'end date/time'
  - when countdown expires '00:00:00 left' is displayed 
  - add 'days left' if necessary
  
On this webpage the timer counts down 'hours:minutes:seconds' left before the timer reaches set end date and time. This can be changed in script.js file directly:
  
41    let deadline = '2023-03-26';
  
1. First, we need to determine how many msec is there between 'end date/time' and this moment. Then determine how many whole hours, minutes and seconds is this number are. Function 'getTimeRemaining' does this. Function 'getTimeRemaining' returns an object with values of variables:
  
  ![image](https://user-images.githubusercontent.com/113363158/227765515-595b190d-ce36-498c-af15-49b915d8c9e0.png)
  
If you have many days left before your 'end date' this might be confusing for a user to see 3 or even 4-digits 'hours left'. Then I recommend to change formula for hours calculation and add 'days left' calculation in 'getTimeRemaining' function. Replace line 48 of script.js file with the following 2 lines:
  
hours = Math.floor((t/1000/60/60) % 24),
  
days = Math.floor((t/(1000*60*60*24)));
  
Do not forget to add a separate <span> for 'days' (or 2 <span>s for 'days' and related ":") to index.html file (reasonably before 'hours'):
  
![image](https://user-images.githubusercontent.com/113363158/227763203-cca644ac-586a-4cea-8a28-d402e521bf6e.png)

And also add 'days' to object, returned by 'getTimeRemaining' function, functions setClock, addZero.
  
2. Second, we want to update number of ms every second dynamically on a webpage.
  
  ![image](https://user-images.githubusercontent.com/113363158/227767601-4e94763f-4efe-4032-9964-47752c3011e1.png)
  
3. we want to dynamically render these amounts in relevant <span>s, adding zero where necessary:

  ![image](https://user-images.githubusercontent.com/113363158/227767638-7238843a-2f66-483a-89a2-e9312b33f9b9.png)

 4. And the las thing to do is to stop timer when timer has "expired":
  
  ![image](https://user-images.githubusercontent.com/113363158/227767678-85a7f1e4-65f8-42ec-8e1d-deb9977a7a3d.png)

Section 3 - Modal Window
  - 2 options: user allowed to scroll or full window freeze
  - animated
  - can be applied to single button or series of buttons having the same class
  
On button click there appears a modal window containing contact form - 'overlay'. "overlay' appears smoothly, with 2.5s fade animation. 
  Pressing cross on the top left closes 'overlay'.  
  
1. Single button
  We add Event Listener to this button (class="more"). By clicking this button we unhide 'overlay' by assigning "block" value using style.display.
  
![image](https://user-images.githubusercontent.com/113363158/227770733-56021c84-d60c-44ff-ba5e-834c5a482ad5.png)

This setting allows a user to scroll the page, still having 'overlay' open. If you need to disable any actions on the page you shuld add the following line:
  
  ![image](https://user-images.githubusercontent.com/113363158/227770535-574c8353-8ccd-49b5-aabf-e45cffa0d00b.png)
  
Close cross does the opposite - adds style.display = "none" to 'overlay':
  
  ![image](https://user-images.githubusercontent.com/113363158/227770817-d0d29cea-f1dd-42cd-9722-ff0ace6ac10b.png)

  If you had used "freeze all" option please include the following line, which unfreezes 'overlay':
  
  ![image](https://user-images.githubusercontent.com/113363158/227770914-22e84afa-dfdd-48f4-bb0b-85383f795f50.png)

2. If you have multiple buttons which open the same overlay you need to recieve all necessary DOM-elements on the page in pseudo-array. It is convinient to add the same class in HTML to all these DOM-elements. On this page this is class 'description-btn':
  
  ![image](https://user-images.githubusercontent.com/113363158/227771420-9542d47d-c211-46d6-868d-31fca43503be.png)

Use forEach cycle and 'this' to go through all necessary elements and do necessary actions with DOM elements:
  
  ![image](https://user-images.githubusercontent.com/113363158/227771609-f27eaec2-5dba-45c7-960b-ac976504ddbd.png)


  
  
  

  
  
  
  
  
  
