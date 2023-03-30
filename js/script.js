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

    //Form

    //создаем объект для сообщений
    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    let form = document.querySelector('.main-form'), //форма из модального окна
        input = form.getElementsByTagName('input'), //инпуты в этой форме
        statusMessage =  document.createElement('div'); //создаем новый элемент, в который будем выводить сообщения для пользователя

        statusMessage.classList.add('status');  //добавляем этому диву класс для стилизации
    
    form.addEventListener('submit', function(event) {
        event.preventDefault;
        form.appendChild(statusMessage); //добавляем созданный <div> в форму, сюда будем выводить сообщение для пользователя

        let request = new XMLHttpRequest();//создаем XMLHttp запрос 
        request.open('POST', 'server.php');//настраиваем XMLHttp запрос 
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //настраиваем заголовки  XMLHttp запроса 

        let formData = new formData(form);//получить данные, введенные пользователем
        request.send(formData);//отправить запрос на сервер, указав в body запроса объект formData

        //выводим сообщение пользователю, успешно ли отправлена форма
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) { //если идет загрузка (статус запроса 0-3)
                statusMessage.innerHTML = message.loading; //в <div> помещаем сообщение из объекта message по ключу loading  
            } else if(request.readyState === 4 && request.status == 200) {  //если запрос успешно отправлен (статус запроса = 4 и сервер ответил кодом 200 (ОК))
                statusMessage.innerHTML = message.success; //в <div> помещаем сообщение из объекта message по ключу success
            } else {
                statusMessage.innerHTML = message.failure; //в <div> помещаем сообщение из объекта message по ключу failure
            }
        });
            //очищаем форму после отправки
            for (let i = 0; i < input.length; i++) {
                input[i].value = ''; //присваиваем пустую строку в value каждому инпуту формы
            }
    });

});