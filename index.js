
const sit = document.getElementsByClassName('sit');
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
            sits.setAttribute('disabled', 'true');
            // sit list add..........
            const sitList = document.getElementById('sit-list');
            const p = document.createElement('p');
            p.innerText = `C ${count}`;
            sitList.appendChild(p);

            // Your sit add
            const sitClass = document.getElementById('sit-class');
            const p2 = document.createElement('p');
            const sitsText = sits.innerText;
            p2.innerText = sitsText;
            sitClass.appendChild(p2);

            const sitPrise = document.getElementById('sit-prise');
            const p3 = document.createElement('p');
            p3.innerText = `550Tk`;
            sitPrise.appendChild(p3);

            const toTalPrise = document.getElementById('total-prise');
            const grandTotalPrise = document.getElementById('grand-prise');
            toTalPrise.innerText = prise;
            grandTotalPrise.innerText = prise;


            
            console.log(prise)
            prise += 550;
        }



        console.log(count)



    })
}


// const set = document.getElementsByClassName('sit');
// for(const sets of set){
//     sets.addEventListener('click', function (e) {
//         sets.setAttribute('disabled', 'true')
//     }
// )}