function getDayName( number) {  
    let day = ''; 
    switch (number) {
        case 1:
            day = "Пн";
            break;
        case 2:
            day = "Вт";
            break;
        case 3:
            day = "Сред";
            break;
        case 4:
            day = "Четв";
            break;
        case 5:
            day = "Птн";
            break;
        case 6:
            day = "Суб";
            break;
        desault:
            day = NaN;
    }
    return day;
}

const array = [];
const free = [25, 25, 20, 25, 20, 10]; //тут бы database

for (let i = 1; i < 7; i++) {
    let freePoint = free[i-1];
    let maxpoint = freePoint;
    let set = new Set();
    array[i] = set;
    let dv = document.createElement('div');
    dv.classList.add('day');
    const maindiv = document.querySelector('main');
    dv.innerHTML = '<h1 style="text-align: center;">' + getDayName(i) +'</h1><p class="count">Количество мест: ' + maxpoint + '</p>';

    let paragraph = document.createElement('p');
    paragraph.innerText = 'Свободно: ' + freePoint;
    paragraph.classList.add('count');
    dv.appendChild(paragraph);

    let button1 = document.createElement('button');
    button1.innerText = 'Записаться';
    button1.classList.add('save');
    button1.addEventListener('click', function() {
        const person = document.querySelector('.fio').value;
        if (person == '') {
            alert ('Вы не представились');
            return null;
        }
        if (set.has(person)) {
            alert ('Вы уже записаны');
            return null;
        } else {
            if (freePoint == 0) {
                alert ('Мест нет');
                return null;
            } else {
                freePoint = freePoint -1;
                paragraph.innerText = 'Свободно: ' + freePoint;
                set.add(person);            
                alert ('Вы записаны');                
            }
            
        }
        return true;
    });
    dv.appendChild(button1);

    const br = document.createElement('br');
    dv.appendChild(br);

    let button2 = document.createElement('button');
    button2.innerText = 'Отменить запись';
    button2.classList.add('delete');
    button2.addEventListener('click', function() {
        const person = document.querySelector('.fio').value;
        if (person == '') {
            alert ('Вы не представились');
            return null;
        }
        if (!set.has(person)) {
            alert ('Вы не были записаны');
            return null;
        }
        set.delete(person);
        freePoint = freePoint + 1;
        paragraph.innerText = 'Свободно: ' + freePoint;
        alert (person + ' отменил(а) запись');
        return true;
    });
    dv.appendChild(button2);
    
    maindiv.appendChild(dv);


}