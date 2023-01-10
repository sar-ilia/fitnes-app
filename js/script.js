document.addEventListener('DOMContentLoaded', () => {

    const dropdown = document.querySelector('.dropdown'),
          select = dropdown.querySelector('.dropdown__select'),
          caret = dropdown.querySelector('.dropdown__caret'),
          menu = dropdown.querySelector('.dropdown__menu'),
          options = dropdown.querySelectorAll('.dropdown__menu li'),
          selected = dropdown.querySelector('.dropdown__selected'),
          content = document.querySelector('.content .container');

    select.addEventListener('click', () => {
        select.classList.toggle('dropdown__select-clicked');

        caret.classList.toggle('dropdown__caret-rotate');

        menu.classList.toggle('dropdown__menu-open');
    });


    options.forEach(e => {
        e.addEventListener('click', () => {
            selected.innerHTML = e.innerHTML;

            select.classList.remove('dropdown__select-clicked');

            caret.classList.remove('dropdown__caret-rotate');

            menu.classList.remove('dropdown__menu-open');

            options.forEach(e => {
                e.classList.remove('active');
            });
            e.classList.add('active');
        });
    });
    
    //_____

    const modal = document.querySelector('#modal'),
          close = modal.querySelector('.close'),
          start = document.querySelector('#start');

    start.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    function removeForm() {
        options.forEach(e => {
            e.classList.remove('active');
        });
        selected.innerHTML = 'Type of exercise';
        weight.value = '';
        repeats.value = '';
    }

    //_____

    const addElement = document.querySelector('#add'),
          weight = document.querySelector('#weight'),
          repeats = document.querySelector('#repeats');

    addElement.addEventListener('click', () => {

        const element = document.createElement('div');
              element.classList.add('content__div');

        const contentElement = document.createElement('h2');
              contentElement.classList.add('content__titel');
              contentElement.textContent = `Exercise: ${selected.textContent}`;

        const deleteElement = document.createElement('div');
              deleteElement.classList.add('close');
              deleteElement.innerHTML = '&times;';
              deleteElement.setAttribute('id', 'del_elem');

        const wrapper = document.createElement('div');
              wrapper.classList.add('content__wrapper');
        
        const descr = document.createElement('div');
              descr.classList.add('content__descr');
              descr.textContent = `${weight.value}kg x ${repeats.value}`;

        const deleteDescr = document.createElement('button');
              deleteDescr.classList.add('btn_descr');
              deleteDescr.textContent = 'DELETE';

        const oneMore = document.createElement('button');
              oneMore.classList.add('btn', 'btn_mini');
              oneMore.textContent = 'one more';


        if (selected.textContent !== 'Type of exercise' && weight.value !== '' && repeats.value !== '' && weight.value != 0 && repeats.value != 0) {
            element.appendChild(contentElement);
            content.appendChild(element);
            element.appendChild(deleteElement);
            element.appendChild(wrapper);
            wrapper.appendChild(descr);
            wrapper.appendChild(deleteDescr);
            element.appendChild(oneMore);

            modal.style.display = 'none';

            removeForm();
        }

        deleteElement.addEventListener('click', () => {
            content.removeChild(element);
        });

        deleteDescr.addEventListener('click', () => {
            element.removeChild(wrapper);
        });

    });

    //____


});