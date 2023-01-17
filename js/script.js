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

    const overlay = document.querySelector('.overlay'),
          yourName = document.querySelector('.yourName'),
          welcome = document.querySelector('.welcome');

    let localStorage = window.localStorage.getItem('username');

    function hidden() {
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = '0';
    }

    if (!localStorage) {
        welcome.style.display = 'none';

        const reg = document.createElement('div');
              reg.classList.add('registration');
              reg.innerHTML = `
                <form action="#" class="registration__form">
                    <div class="title title_reg">Enter your name:</div>
                    <input type="text" id="name" class="registration__input modal__input" placeholder="Your name">
                
                </form>
                <button id="submit" class="btn">SUBMIT</button>
              `;
              overlay.appendChild(reg);

        overlay.addEventListener('click', (e) => {
            if (e.target && e.target.matches('#submit')) {
                const name = document.querySelector('#name');
                
                if (name.value !== '') {
                    window.localStorage.setItem('username', name.value);
                    setTimeout(hidden, 1000);
                }
            }
        });
    } else {
        yourName.innerHTML = localStorage;
        setTimeout(hidden, 2000);
    }

    //_____

    const modal = document.querySelector('.modal'),
          close = document.querySelectorAll('#close_modal'),
          start = document.querySelector('#start');

    start.addEventListener('click', () => {
        /* modal.style.visibility = 'visible';
        modals.style.visibility = 'visible';
        modal.style.opacity = '1';
        modals.style.opacity = '1'; */
        modal.style.display = 'block';
        modals.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    function removeForm(weightContent, numberContent) {
        options.forEach(e => {
            e.classList.remove('active');
        });
        selected.innerHTML = 'Type of exercise';
        weightContent.value = '';
        numberContent.value = '';
    }

    //_____

    const addElement = document.querySelector('#add'),
          weight = document.querySelector('#weight'),
          number = document.querySelector('#number'),
          modals = document.querySelector('.modals'),
          modalRepeats = document.querySelector('#modalRepeats'),
          weightRepeats = document.querySelector('#weightRepeats'),
          numberRepeats = document.querySelector('#numberRepeats'),
          minusWeight = document.querySelector('#minusWeight'),
          plusWeight = document.querySelector('#plusWeight'),
          minusNum = document.querySelector('#minusNum'),
          plusNum = document.querySelector('#plusNum'),
          minusWeightRepeats = document.querySelector('#minusWeightRepeats'),
          plusWeightRepeats = document.querySelector('#plusWeightRepeats'),
          minusNumRepeats = document.querySelector('#minusNumRepeats'),
          plusNumRepeats = document.querySelector('#plusNumRepeats');

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

    function closeModal(modalElem, weightElem, numberElem) {
        close.forEach( e => {
            e.addEventListener('click', () => {
                modalElem.style.display = 'none';
                removeForm(weightElem, numberElem);
                removeDropdown();
                modals.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
    }

    closeModal(modal, weight, number);

    function plusInput(plus, weightContent) {
        plus.addEventListener('click', () => {
            let weightValue = +weightContent.value;
            weightContent.value = weightValue + 5;
        });
    }

    plusInput(plusWeight, weight);

    plusInput(plusWeightRepeats, weightRepeats);

    function minusInput(minus, weightContent) {
        minus.addEventListener('click', () => {
            let weightValue = +weightContent.value;
            weightContent.value = weightValue - 5;

            if (weightContent.value <= 1) {
                weightContent.value = '';
            }
        });
    }

    minusInput(minusWeight, weight);

    minusInput(minusWeightRepeats, weightRepeats);

    function plusItemNum(plus, numContent) {
        plus.addEventListener('click', () => {
            numContent.value++;
        });
    }

    plusItemNum(plusNum, number);

    plusItemNum(plusNumRepeats, numberRepeats);

    function minusItemNum(minus, numContent) {
        minus.addEventListener('click', () => {
            numContent.value--;

            if (numContent.value <= 1) {
                numContent.value = '';
            }
        });
    }

    minusItemNum(minusNum, number);

    minusItemNum(minusNumRepeats, numberRepeats);
    
    addElement.addEventListener('click', () => {

        const element = document.createElement('div');
              element.classList.add('content__div');
              element.innerHTML = `
                <h2 class="content__titel">Exercise: ${selected.textContent}</h2>
                <div class="close" id="del_elem">×</div>
                <div class="content__wrapper">
                    <ul class="content__list">
                        <li class="content__item">${+weight.value}kg x ${+number.value}
                            <button class="btn_descr">DELETE</button>
                        </li>
                    </ul>
                </div>
                <button class="btn btn_mini">one more?</button>
              `;

        if (selected.textContent !== 'Type of exercise' && weight.value !== '' && number.value !== '' && weight.value != 0 && number.value != 0) {
            content.appendChild(element);

            modal.style.display = 'none';

            removeForm(weight, number);

            modals.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    content.addEventListener('click', (e) => {
        if (e.target && e.target.matches('button.btn_mini')) {
            modalRepeats.style.display = 'block';
            modals.style.display = 'block';
            document.body.style.overflow = 'hidden';

            const btns = document.querySelectorAll('.btn_mini');
            
            if(e.target.classList.contains('btn_mini')) {
                for (let i = 0; i < btns.length; i++) {
                  btns[i].removeAttribute('id');
                }
                e.target.setAttribute('id','activeBtn');
            }
        }
    });

    closeModal(modalRepeats, weightRepeats, numberRepeats);

    modals.addEventListener('click', (e) => {

        if (e.target && e.target.matches('#addRepeats')) {

            const btnActive = document.querySelector('#activeBtn').previousElementSibling.firstElementChild;

            const item = document.createElement('li');
                  item.classList.add('content__item');
                  item.innerHTML = `
                    ${+weightRepeats.value}kg x ${+numberRepeats.value}
                    <button class="btn_descr">DELETE</button>
                  `;

            if (weightRepeats.value !== '' && numberRepeats.value !== '' && weightRepeats.value != 0 && numberRepeats.value != 0) {
                btnActive.appendChild(item);
    
                modalRepeats.style.display = 'none';
                modals.style.display = 'none';
                document.body.style.overflow = '';
    
                removeForm(weightRepeats, numberRepeats);
            }
        }
    });

    //____


});