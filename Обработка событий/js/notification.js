update()

document.querySelector('.notification__form button').addEventListener('click', function() { //      добавляем уведомления
    let time = document.querySelector('.notification__form input').value; //      Записываем в переменную время
    let message = document.querySelector('.notification__form textarea').value; //      Записываем в переменную сообщение

    let info = document.querySelector('.notification__info'); //  Добавляем сообщение

    if (!time || !message) {
        info.textContent = 'Укажите время и сообщене корректно';
        info.style.opacity = 1; //      Показываем сообщение об ошибке
        setTimeout(() => {
            info.style.opacuty = 1; //      Через 2 секунды убираем сообщение
        }, 2000);

        setTimeout(() => {
            info.textContent = ''; //      Сбрасываем сообщение
        }, 3000);
        return;
    }
    localStorage.setItem(time, message); //  Записываем данные
    update()
});

document.querySelector('.notification__list > button').addEventListener('click', function() { //      Очистка уведомлений
    if (localStorage.length && confirm("Очистить список уведомлений?")) { //  Проверяем наличие уведомлений
        localStorage.clear() //  очищаем хранилище
        update()
        document.querySelector('.notification__list').hidden = true //  скрываем кнопку очистки
    } else if (!localStorage.length) {
        alert("Уведомлений нет!")
    }
})

function update() {
    if (!localStorage.length) {
        document.querySelector('.notification__list').hidden = true //  Скрываем список
    } else {
        document.querySelector('.notification__list').hidden = false
    }

    document.querySelector('.notification__list > div').innerHTML = '' //  очищаем textarea
    document.querySelector('.notification__info').textContent = ''

    for (let key of Object.keys(localStorage)) {
        document.querySelector('.notification__list > div').insertAdjacentHTML('beforeend', `
            <div class="notification__item">
                <div> ${key} - ${localStorage.getItem(key)} </div>
                <button data-time="${key}">&times</button>
            </div>    
        `) //  Добавляем HTML из строки
    }

    document.querySelector('.notification__form input').value = '' //      Сбрасываем поля при добавлении
    document.querySelector('.notification__form textarea').value = ''

    if (document.querySelector('.audioAlert')) { //      Удаляем звуковое оповещение если оно есть
        document.querySelector('.audioAlert').remove()
    }
}


document.querySelector('.notification__list').addEventListener('click', function(e) { //  Используем делегирование для удаления отдельных элементов по крестику
    if (!e.target.dataset.time) {
        return
    }
    localStorage.removeItem(e.target.dataset.time)
    update()
})

setInterval(() => { //      Вводим интервал для проверки времени
    let currentDate = new Date()
    let currentHour = currentDate.getHours()
    if (currentHour < 10) {
        currentHour = '0' + currentHour
    }

    let currentminute = currentDate.getMinutes()
    if (currentminute < 10) {
        currentminute = '0' + currentminute
    }

    let currentTime = `${currentHour}:${currentminute}`

    for (let key of Object.keys(localStorage)) {
        let keyHour = key.split(':')[0]
        let keyMinute = key.split(':')[1]

        if (key == currentTime || (keyHour == currentHour && keyMinute < currentminute)) {
            document.querySelector(`button[data-time="${key}"]`).closest('.notification__item').classList.add('notification__warning')

            if (!document.querySelector('.audioAlert')) { //      Проверяем наличие звука
                document.querySelector('body').insertAdjacentHTML('afterbegin', '<audio loop class="audioAlert"><source src="../source/alert.mp3" type="audio/mpeg"></audio>') //      Добавляем тег для звука
                document.querySelector('.audioAlert').play() //      Воспроизводим звук
            }
        }
    }
}, 1000);