let first = document.querySelector('.div_first')
let second = document.querySelector('.div_second')
let third = document.querySelector('.div_third')
let fourty = document.querySelector('.div_fourty')
let texta = document.querySelector('#texta')
let array = [''];
let edit = document.querySelector('#edit');
let add = document.querySelector('#add');
let style = document.querySelector('#style');
let save = document.querySelector('#save');
let button = document.querySelector('#tablebutton');
let buttonlist = document.querySelector('#tablebuttonlist');
let table1 = document.querySelector('#table1');
let table2 = document.querySelector('#table2');
let table3 = document.querySelector('#table3');
let table4 = document.querySelector('#table4');
let table5 = document.querySelector('#table5');
let tableselect = document.querySelector('#tableselect');
let text_table_second = document.querySelector('#text_table_second');
let colorselect = document.querySelector('#colorselect');
let select_table_second = document.querySelector('#select_table_second')

edit.addEventListener('click', function () {
    third.style.display = 'none'
    second.style.display = 'block'
    texta.value = first.innerHTML
})
save.addEventListener('click', function () {
    second.style.display = 'none';
    first.innerHTML = texta.value;
})
//third font size
style.addEventListener('click', function () {
    second.style.display = 'none';
    third.style.display = 'block'
})
let f1 = document.forms['f1'];
f1.addEventListener('click', function () {
    for (let i = 0; i < 5; i++) {
        if (f1.radio[i].checked) {
            first.style.fontSize = f1.radio.value
        }
    }
})
//third font family
let select = document.querySelector('#select');
select.addEventListener('change', function () {
    for (let i = 0; i < 4; i++) {
        if (select.options[i].selected) {
            first.style.fontFamily = '' + select.value
        }
    }
})
//third color 
let color_image = document.querySelector('.color_image')
let color_imageb = document.querySelector('.color_imageb')
let color = document.querySelector('#color');
let colorBack = document.querySelector('#colorBack');

let colorRed = document.querySelector('#red ')
let colorBlue = document.querySelector('#blue ')
let colorGreen = document.querySelector('#green ')
let colorBlack = document.querySelector('#black ')
let colorOrange = document.querySelector('#orange ')
let colorPink = document.querySelector('#pink ')
let colorWhite = document.querySelector('#white ')
let colorPirple = document.querySelector('#purple ')
let colorLightblue = document.querySelector('#lightblue');

let colorRedb = document.querySelector('#redb')
let colorBlueb = document.querySelector('#blueb')
let colorGreenb = document.querySelector('#greenb')
let colorBlackb = document.querySelector('#blackb')
let colorOrangeb = document.querySelector('#orangeb')
let colorPinkb = document.querySelector('#pinkb')
let colorWhiteb = document.querySelector('#whiteb')
let colorPirpleb = document.querySelector('#purpleb')
let colorLightblueb = document.querySelector('#lightblueb');

color.addEventListener('click', function () {
    color_imageb.style.display = 'none';
    color_image.style.display = 'flex';
})
colorRed.addEventListener('click', function () {
    first.style.color = '#E84743FF'
})
colorBlue.addEventListener('click', function () {
    first.style.color = '#0078FFFF'
})
colorGreen.addEventListener('click', function () {
    first.style.color = '#1F9642FF'
})
colorBlack.addEventListener('click', function () {
    first.style.color = '#323B3FFF'
})
colorOrange.addEventListener('click', function () {
    first.style.color = '#E8AC00FF'
})
colorPink.addEventListener('click', function () {
    first.style.color = '#F4548BFF'
})
colorWhite.addEventListener('click', function () {
    first.style.color = '#FFFFFFFF'
})
colorPirple.addEventListener('click', function () {
    first.style.color = '#704FC4FF'
})
colorLightblue.addEventListener('click', function () {
    first.style.color = '#0A97BBFF'
})
//background color

colorBack.addEventListener('click', function () {
    color_image.style.display = 'none';
    color_imageb.style.display = 'flex';
})
colorRedb.addEventListener('click', function () {
    first.style.backgroundColor = '#E84743FF'
})
colorBlueb.addEventListener('click', function () {
    first.style.backgroundColor = '#0078FFFF'
})
colorGreenb.addEventListener('click', function () {
    first.style.backgroundColor = '#1F9642FF'
})
colorBlackb.addEventListener('click', function () {
    first.style.backgroundColor = '#323B3FFF'
})
colorOrangeb.addEventListener('click', function () {
    first.style.backgroundColor = '#E8AC00FF'
})
colorPinkb.addEventListener('click', function () {
    first.style.backgroundColor = '#F4548BFF'
})
colorWhiteb.addEventListener('click', function () {
    first.style.backgroundColor = '#FFFFFFFF'
})
colorPirpleb.addEventListener('click', function () {
    first.style.backgroundColor = '#704FC4FF'
})
colorLightblueb.addEventListener('click', function () {
    first.style.backgroundColor = '#0A97BBFF'
})

let f2 = document.forms['f2'];
f2.addEventListener('change', function () {
    if (f2.bold.checked) {
        first.style.fontWeight = "900"
    }
    else {
        first.style.fontWeight = "normal"
    }
    if (f2.cursive.checked) {
        first.style.fontStyle = "italic"
    }
    else {
        first.style.fontStyle = "normal"
    }
})

// table
let table = document.querySelector('.table');
let table_second = document.querySelector('.table_second')
add.addEventListener('click', function () {
    first.style.display = 'none';
    second.style.display = 'none';
    third.style.display = 'none';
    fourty.style.display = 'block';
    edit.style.display = 'none';
    style.style.display = 'none';
})

let f3 = document.forms['f3'];
f3.addEventListener('click', function () {

    for (let i = 0; i < 1; i++) {
        if (f3.table[0].checked) {
            table_second.style.display = 'none';
            table.style.display = 'block';
        }
        if (f3.table[1].checked) {
            table.style.display = 'none';
            table_second.style.display = 'block';
        }
    }
})

button.addEventListener('click', function () {
    first.style.display = 'block';
    edit.style.display = 'inline-block';
    style.style.display = 'inline-block';
    second.style.display = 'block';
    third.style.display = 'none';
    fourty.style.display = 'none';
    tr()
})
buttonlist.addEventListener('click', function () {
    first.style.display = 'block';
    edit.style.display = 'inline-block';
    style.style.display = 'inline-block';
    second.style.display = 'block';
    third.style.display = 'none';
    fourty.style.display = 'none';
    ul()

})

save.addEventListener('click', function () {
    second.style.display = 'none';
    third.style.display = 'none';
    fourty.style.display = 'none';


})
function tr() {
    texta.value += '<table><tbody>';
    for (let i = 0; i < table1.value; i++) {
        texta.value += '<tr>';
        td()
        texta.value += '</tr>';
    }
}
function td() {
    for (let i = 0; i < table2.value; i++) {
        texta.value += `<td style = "width:${table4.value}px;height:${table3.value}px;border:${table5.value}px ${tableselect.value} ${colorselect.value}"</td> TD`
    }
}

function ul() {
    for (let i = 0; i < text_table_second.value; i++) {
        texta.value += `<table><ul style = "color:${colorselect.value};font-size:13px;list-style-type:${select_table_second.value},"><li>item ${i + 1}</li>`;
    }
}






























