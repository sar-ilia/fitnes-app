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

    function removeDropdown() {
        select.classList.remove('dropdown__select-clicked');

        caret.classList.remove('dropdown__caret-rotate');

        menu.classList.remove('dropdown__menu-open');
    }

    options.forEach(e => {
        e.addEventListener('click', () => {
            selected.innerHTML = e.innerHTML;

            removeDropdown();

            options.forEach(e => {
                e.classList.remove('active');
            });
            e.classList.add('active');
        });
    });
    
    //_____

    const modal = document.querySelector('.modal'),
          close = document.querySelectorAll('#close_modal'),
          start = document.querySelector('#start');

    start.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    function removeForm(weightContent, repeatsContent) {
        options.forEach(e => {
            e.classList.remove('active');
        });
        selected.innerHTML = 'Type of exercise';
        weightContent.value = '';
        repeatsContent.value = '';
    }

    //_____

    const addElement = document.querySelector('#add'),
          weight = document.querySelector('#weight'),
          repeats = document.querySelector('#repeats'),
          modals = document.querySelector('.modals'),
          modalRepeats = document.querySelector('#modalRepeats'),
          addRepeats = document.querySelector('#addRepeats'),
          weightRepeats = document.querySelector('#weightRepeats'),
          repeatsRepeats = document.querySelector('#repeatsRepeats');

    function delElement(element) {
        content.addEventListener('click', (e) => {
            let del = e.target.closest(element);
            if (e.target && e.target.matches(element)) {
                del.parentElement.remove();
            }
        });
    }

    delElement('button.btn_descr');

    delElement('.close');

    function closeModal(modalElem, weightElem, repeatsElem) {
        close.forEach( e => {
            e.addEventListener('click', () => {
                modalElem.style.display = 'none';
                removeForm(weightElem, repeatsElem);
                removeDropdown();
            });
        });
    }

    closeModal(modal, weight, repeats);
    
    addElement.addEventListener('click', () => {

        const element = document.createElement('div');
              element.classList.add('content__div');
              element.innerHTML = `
                <h2 class="content__titel">Exercise: ${selected.textContent}</h2>
                <div class="close" id="del_elem">×</div>
                <div class="content__wrapper">
                    <ul class="content__list">
                        <li class="content__item">${+weight.value}kg x ${+repeats.value}
                            <button class="btn_descr">DELETE</button>
                        </li>
                    </ul>
                </div>
                <button class="btn btn_mini">one more?</button>
              `;

        if (selected.textContent !== 'Type of exercise' && weight.value !== '' && repeats.value !== '' && weight.value != 0 && repeats.value != 0) {
            content.appendChild(element);

            modal.style.display = 'none';

            removeForm(weight, repeats);
        }
    });

    content.addEventListener('click', (e) => {
        if (e.target && e.target.matches('button.btn_mini')) {
            modalRepeats.style.display = 'block';

            const btns = document.querySelectorAll('.btn_mini');
            
            if(e.target.classList.contains('btn_mini')) {
                for (let i = 0; i < btns.length; i++) {
                  btns[i].removeAttribute('id');
                }
                e.target.setAttribute('id','activeBtn');
            }
        }
    });

    closeModal(modalRepeats, weightRepeats, repeatsRepeats);

    modals.addEventListener('click', (e) => {

        if (e.target && e.target.matches('#addRepeats')) {

            const btnActive = document.querySelector('#activeBtn').previousElementSibling.firstElementChild;

            const item = document.createElement('li');
                  item.classList.add('content__item');
                  item.innerHTML = `
                    ${+weightRepeats.value}kg x ${+repeatsRepeats.value}
                    <button class="btn_descr">DELETE</button>
                  `;

            if (weightRepeats.value !== '' && repeatsRepeats.value !== '' && weightRepeats.value != 0 && repeatsRepeats.value != 0) {
                btnActive.appendChild(item);
    
                modalRepeats.style.display = 'none';
    
                removeForm(weightRepeats, repeatsRepeats);
            }
        }
    });

    //____


});