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

    const modal = document.querySelector('.modal'),
    close = modal.querySelector('.modal__close'),
    start = document.querySelector('#start');

    function openModal() {
        start.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }

    openModal();

    function closeModal() {
        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    closeModal();

    function removeForm() {
        options.forEach(e => {
            e.classList.remove('active');
        });
        selected.innerHTML = 'Exercise';
    }

    //_____

    const addElement = document.querySelector('#add');

    addElement.addEventListener('click', () => {

        const element = document.createElement('div');
              element.classList.add('content__div');

        const contentElement = document.createElement('h2');
              contentElement.classList.add('content__titel');
              contentElement.textContent = `Exercise: ${select.textContent}`;

        element.appendChild(contentElement);
        content.appendChild(element);

        modal.style.display = 'none';

        removeForm();
    });

});