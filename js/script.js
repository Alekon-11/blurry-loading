'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const blur = document.querySelector('.blur');
    const loader = document.querySelector('.loader');
    const loaderValue = document.querySelector('.loader span');
    const computed = window.getComputedStyle(blur).filter;

    let value = +computed.slice(5,(computed.length - 3));
    let index = 0;

    function calcDecreasingValue(initialValue, i ,subtrahendValue){
        return initialValue - (i * (subtrahendValue / 100));
    }

    function showBackground(activeClass){
        let intID = setInterval(() => {

            index++;

            if(index > 99){
                clearInterval(intID);
                loaderValue.classList.add(activeClass);
            }

            blur.style.filter = `blur(${calcDecreasingValue(value, index, value)}px)`;
            loaderValue.innerHTML = `${index}%`;
            loader.style.opacity = `${calcDecreasingValue(1, index, 0.9)}`;

        }, 20);
    }

    showBackground('hide');

});