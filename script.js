const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
// btn.addEventListener("click", function(){
//     console.log("CLICK");
// });
btn.addEventListener('click', function(){
    if(form.classList.contains('hidden')){
        form.classList.remove('hidden');
        btn.textContent = "Close";
    }
    else{
        form.classList.add('hidden')
        btn.textContent = "Share a fact";
    }
})

function ageCalc(year){
    const currentYear = 2023;
    const age = currentYear - year;
    return age;
}

const age = ageCalc(1997);

if(age < 20){
    console.log("You're yong");
}

else if(age < 30){
    console.log("You're in the middle");
}

else{
    console.log("You're old");
}
console.log(ageCalc(1997));