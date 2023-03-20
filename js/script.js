alert("Проверка работоспособности JS!");
// Задание 1.
// Напишите функцию, создающую выпадающий список на веб-странице (HTML select)
// из массива объектов со значениями. Массив должен содержать объекты со свойствами:
// • value — значение для атрибута value тэга option
// • label — значение для содержимого тэга option (заголовок элемента при
// открытии списка или выбранного значения)

// Вторым аргументом функция должна принимать выбранное значение (value
// выбранного по умолчанию элемента). По умолчанию выбирается 0-й элемент
// массива значений. Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.
// Возвращаемое значение — DOM-элемент select.

let array = [                                             //Создание массива, label наш собственный тэг в html
    { label: "Информатика" },
    { label: "Русский Язык" },
    { label: "Алгебра" },
    { label: "Геометрия" },
    { label: "История" },
    { label: "ОБЖ" }
]

function createSelectElem(array) {
    const select = document.body.appendChild(document.createElement('select'));

    array.forEach(function(createSelectElem) {                                        //Метод forEach()выполняет указанную функцию один раз для каждого элемента в массиве.
        const option = document.createElement('option'); //создание тэга option
        option.innerText = Object.values(createSelectElem); //Node.innerText - это свойство, позволяющее задавать или получать текстовое содержимое элемента и его потомков.
        //Object.values()метод возвращает массив собственных перечисляемых значений 
        select.appendChild(option) //appendChild позволяет вставить в конец какого-либо другой элемент,используется после создания элемента с помощью createElement.
        
    });

    return select  //завершает выполнение функции и возвращает управление вызывающей функции.
}


createSelectElem(array)