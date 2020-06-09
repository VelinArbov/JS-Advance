function toggle() {
    const extra = document.querySelector('#extra'); //референция към елемента
    const btn = document.getElementsByClassName('button')[0];
    if( extra.style.display === 'block'){

        btn.textContent = 'More';
        extra.style.display = 'none';

    }
    else{

        btn.textContent = 'Less';
        extra.style.display = 'block';


    }

    
}