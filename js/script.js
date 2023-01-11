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
          modalRepeats = document.querySelector('#modalRepeats'),
          addRepeats = document.querySelector('#addRepeats');

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
        
        const list = document.createElement('ul');
              list.classList.add('content__list');
        
        const item = document.createElement('li');
              item.classList.add('content__item');
              item.textContent = `${+weight.value}kg x ${+repeats.value}`;

        const deleteDescr = document.createElement('button');
              deleteDescr.classList.add('btn_descr');
              deleteDescr.textContent = 'DELETE';

        const oneMore = document.createElement('button');
              oneMore.classList.add('btn', 'btn_mini');
              oneMore.textContent = 'one more?';


        if (selected.textContent !== 'Type of exercise' && weight.value !== '' && repeats.value !== '' && weight.value != 0 && repeats.value != 0) {
            element.appendChild(contentElement);
            content.appendChild(element);
            element.appendChild(deleteElement);
            element.appendChild(wrapper);
            wrapper.appendChild(list);
            list.append(item);
            item.appendChild(deleteDescr);
            element.appendChild(oneMore);

            modal.style.display = 'none';

            removeForm(weight, repeats);
        }

        deleteElement.addEventListener('click', () => {
            content.removeChild(element);
        });

        function delDescr() {
            document.querySelectorAll('.btn_descr').forEach((btn) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                });
            });
        }

        delDescr();

        function adddd() {
            document.querySelectorAll('.btn_mini').forEach((btn) => {
                btn.addEventListener('click', () => {
                    modalRepeats.style.display = 'block';
        
                    addRepeats.addEventListener('click', () => {
        
                        const weightRepeats = document.querySelector('#weightRepeats'),
                              repeatsRepeats = document.querySelector('#repeatsRepeats');
                        
                        const item = document.createElement('li');
                              item.classList.add('content__item');
                              item.textContent = `${+weightRepeats.value}kg x ${+repeatsRepeats.value}`;
                
                        const deleteDescr = document.createElement('button');
                              deleteDescr.classList.add('btn_descr');
                              deleteDescr.textContent = 'DELETE';
            
            
                        if (weightRepeats.value !== '' && repeatsRepeats.value !== '' && weightRepeats.value != 0 && repeatsRepeats.value != 0) {
                            list.appendChild(item);
                            item.appendChild(deleteDescr);
                
                            modalRepeats.style.display = 'none';
                
                            removeForm(weightRepeats, repeatsRepeats);
                        }
            
                        delDescr();
            
                    });
                });
            });
        }

        adddd();
    });

    //____


});