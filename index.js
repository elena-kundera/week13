
function SayHi() {
let name = prompt('Как тебя зовут?', '');
alert(`${name}, очень приятно познакомиться!`);
}



function AskAge(age) {
    age = prompt('А сколько тебе лет?', '');
    alert('Ого! ' + age +'! Ты такой старый!');
}


function Adding() {
    let item1 = prompt('Введи слагаемое:', '');
    let item2 = prompt('Теперь второе слагаемое:', '');
    alert(+item1 + +item2);
    }

function Substraction() {
    let item3 = prompt('Введи уменьшаемое:', '');
    let item4 = prompt('Теперь вычитаемое:', '');
    alert(item3 - item4);
    }

function Multiplication() {
        let item5 = prompt('Введи умножаемое:', '');
        let item6 = prompt('Теперь множитель:', '');
        alert(item5 * item6);
        }

function Division() {
        let item7 = prompt('Введи делимое:', '');
        let item8 = prompt('Теперь делитель:', '');
        alert(item7 / item8);
        }
