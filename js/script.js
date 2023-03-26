window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //Tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) { //condition tab index matches [i]
                    hideTabContent(0); // hide all tabs, starting from 0
                    showTabContent(i); //show specific tab with the same index
                    break;
                }
            }
        }

    });
// Timer

    let deadline = '2023-03-26';

    //функция, определяющая остаток времени до дэдлайна
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), //вычисляем количество миллисекунд от установленного времени окончания до текущего времени
        seconds = Math.floor((t/1000) % 60), //вычисляем количество целых секунд
        minutes = Math.floor((t/1000/60) % 60), //вычисляем количество целых минут
        hours = Math.floor((t/(1000*60*60))); //вычисляем количество целых часов
        //hours = Math.floor((t/1000/60/60) % 24), //если нужны также дни
        //days = Math.floor((t/(1000*60*60*24)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
    
    //функция для динамической вставки вычисленных значений времени в верстку
    function setClock(id, endtime) { 
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            //функция, обновляющая таймер 
            function updateClock() {
                let t = getTimeRemaining(endtime);

                //функция, добавляющая ноль, если часы/минуты/секунды менее 10.
                function addZero(num){
                            if(num <= 9) {
                                return '0' + num;
                            } else return num;
                        };
    
                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);
    
                //если таймер истек, отображается 00:00:00
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
    
        }
    
        setClock('timer', deadline);


//Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = "block";
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; //замораживает модальное окно на странице + строка 112 снимает
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = ''; //unfreeze
    })

    let moreTabs = document.querySelectorAll('.description-btn');

    moreTabs.forEach(function(elem) {
        elem.addEventListener('click', function() {
            overlay.style.display = "block";
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        })
    })
});