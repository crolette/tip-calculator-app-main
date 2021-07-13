function checkboxRequired () {
    const radios = [...document.getElementsByName("tip")]
    let checked = false
    radios.forEach(checkbox => {
        if(checkbox.checked) {
            console.log(checkbox.id + " true")
            checked = true
        }
    })
    return checked
}

checkboxRequired()



let tipPercent = 0
let amountBill = 0
let nbPeople = 0
const bill = document.getElementById("bill")
const people = document.getElementById("people")
const tips = [...document.getElementsByName("tip")]
const amountTip = document.getElementById("tip")
const amountTotal = document.getElementById("total")
const reset = document.getElementById("resetBtn")
const form = document.querySelector("form")
const custom = document.querySelector(".custom")



bill.addEventListener("change", (e) => {
    amountBill = parseInt(bill.value, 10)
})
people.addEventListener("change", (e) => {
    nbPeople = parseInt(people.value, 10)
    calculateAmount()
})

tips.forEach(tip => {
    tip.addEventListener("click", (e) => {
        tipPercent = tip.value
        calculateAmount()
    })
})

custom.addEventListener("change", (e) => {
    tipPercent = parseInt(custom.value, 10)/100
    tips.forEach(tip => {
        tip.checked = false
    })
    calculateAmount()
})


function calculateAmount() {

    if(nbPeople === 0 ) {
        nbPeople = 1
    }
    let sumTip = (amountBill * (tipPercent))
    let tipPerPerson = (sumTip / nbPeople)
    let sumTotal = ((amountBill + sumTip) / nbPeople)
    
    console.log("tipperperson " + typeof(tipPerPerson))
    console.log("sumTip " + typeof(sumTip))
    console.log("sumTotal " + typeof(sumTotal));
    console.log(sumTotal);
    
    amountTip.innerText = `$ ${tipPerPerson.toFixed(2)}`
    amountTotal.innerText = `$ ${sumTotal.toFixed(2)}`

    reset.classList.add("reset")
}


reset.addEventListener("click", (e) => {
    form.reset()
    reset.classList.remove("reset")
    amountTip.innerText = `$0.00`
    amountTotal.innerText = `$0.00`
})

