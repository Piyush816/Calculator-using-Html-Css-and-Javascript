let display = document.getElementById('screen');
let buttons = document.querySelectorAll('button');


for (item of buttons){
    item.addEventListener('click',(e) =>{
        btntext = e.target.innerText;
        if (btntext == 'x'){
            btntext = '*'
            display.value += btntext;
        }
        else if (btntext == '='){
            display.value = eval(display.value);
        }
        else if (btntext == 'C'){
            display.value = '';
        }
        else if (btntext == '÷'){
            btntext = '/'
            display.value += btntext;
        }

        else{
            display.value += btntext;
            console.log(btntext)
        }
        
    })
}

