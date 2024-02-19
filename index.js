const applyButton = document.getElementById('apply-button');
const sit = document.getElementsByClassName('sit');
const nextButtons = document.getElementById('next-button');
const sitNumber = document.getElementById('sit-number');
let sitInteger = parseInt(sitNumber.innerText);
let count = 0;
let prise = 550;

for (const sits of sit) {
    sits.addEventListener('click', function (e) {
        if (count < 4) {
            count++
            sitInteger -= 1;
            sitNumber.innerText = sitInteger;
            // bg color change and disabled ADD;
            sits.classList.add('bg-[#1DD100]');
            // sit list add..........
            const sitList = document.getElementById('sit-list');
            const sitsText = sits.innerText;
            const p = document.createElement('p');
            p.innerText = sitsText;
            sitList.appendChild(p);
            const sitCount = document.getElementById('sit-count');
            sitCount.innerText = count;
            sitCount.classList.add('bg-[#1DD100]')
            sitCount.classList.add('px-2')
            sitCount.classList.add('rounded-[50%]')
            sitCount.classList.add('text-xl')
            sitCount.classList.add('ml-2')
            sitCount.classList.add('text-white')

            // Your sit add
            const sitClass = document.getElementById('sit-class');
            const p2 = document.createElement('p');
            p2.innerText = `Economoy`;
            sitClass.appendChild(p2);

            // prise add
            const sitPrise = document.getElementById('sit-prise');
            const p3 = document.createElement('p');
            p3.innerText = `550Tk`;
            sitPrise.appendChild(p3);
            // total prise add
            const toTalPrise = document.getElementById('total-prise');
            const grandTotalPrise = document.getElementById('grand-prise');
            toTalPrise.innerText = prise;
            grandTotalPrise.innerText = prise;

            nextButtons.removeAttribute('disabled')
            prise += 550;

            sits.classList.remove('sit');


            if (count === 4) {
                applyButton.removeAttribute('disabled', 'true')
            }
        }



        else {
            alert("আপনি চারটার বেসি টিকিট নিতে পারবেন না")
        };



    });
};


// cupon calculator

const inputField = document.getElementById('input-field');
applyButton.addEventListener('click', function () {
    const finalTotal = document.getElementById('grand-prise');
    const finalInnerText = finalTotal.innerText;
    const finalPriseFloat = parseFloat(finalInnerText);
    if (inputField.value === 'NEW15') {
        const discountPrise = finalPriseFloat * 15 / 100;
        const discount = finalPriseFloat - discountPrise;
        finalTotal.innerText = discount;
        applyButton.setAttribute('disabled', 'true')

    }
    else if (inputField.value === 'Couple 20') {
        const discountPrise = finalPriseFloat * 20 / 100;
        const discount = finalPriseFloat - discountPrise;
        finalTotal.innerText = discount;
        applyButton.setAttribute('disabled', 'true')

    }
    else {
        alert('Your cupon is wrong!')

    }


    inputField.value = '';
});


// const mainSection = document.getElementById('main-section');
// const success = document.getElementById('success');

// nextButtons.addEventListener('click', function () {

//     const inputName = document.getElementById('input-name').value;
//     const inputNumber = document.getElementById('input-number').value;
//     const inputEmail = document.getElementById('input-email').value;

//     if (inputName && !isNaN(inputNumber) && inputEmail) {
//         success.classList.remove('hidden');
//         mainSection.classList.add('hidden');
//     } else {
//         alert(`please input`)
//     }
// })



const nextButton = document.getElementById('next-button');
const mainSection = document.getElementById('main-section');
const success = document.getElementById('success');

nextButton.addEventListener('click', function () {
    const inputName = document.getElementById('input-name').value;
    const inputNumber = document.getElementById('input-number').value;
    const inputEmail = document.getElementById('input-email').value;

    // Validation logic
    if (inputName && !isNaN(inputNumber) && inputEmail) {
        success.classList.remove('hidden');
        mainSection.classList.add('hidden');
        inputName = '';
        inputNumber = 0;
        inputEmail = '';
    } else {
        // Handle invalid inputs, show error messages, etc.
    }
});


// fainal input section


// const nextButton = document.getElementById('next-button');

// nextButton.addEventListener('click', function () {
//     console.log('good')
// })





// const set = document.getElementsByClassName('sit');
// for(const sets of set){
//     sets.addEventListener('click', function (e) {
//         sets.setAttribute('disabled', 'true')
//     }
// )}