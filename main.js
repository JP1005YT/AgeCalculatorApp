const dayInput = document.querySelector("#day")
const monthInput = document.querySelector("#month")
const yearInput = document.querySelector("#year")

const buttonConvert = document.querySelector("button")

const Data = new Date()

dayInput.addEventListener("keydown",() => {
    const dayError = document.querySelector("#error-day")
    const dayTitle = document.querySelector("#dayTitle")
    dayInput.classList.remove("active")
    dayError.classList.remove("active")
    dayTitle.classList.remove("active")
})
monthInput.addEventListener("keydown",() => {
    const monthError = document.querySelector("#error-month")
    const monthTitle = document.querySelector("#monthTitle")
    monthInput.classList.remove("active")
    monthError.classList.remove("active")
    monthTitle.classList.remove("active")
})
yearInput.addEventListener("keydown",() => {
    const yearError = document.querySelector("#error-year")
    const yearTitle = document.querySelector("#yearTitle")
    yearInput.classList.remove("active")
    yearError.classList.remove("active")
    yearTitle.classList.remove("active")
})
buttonConvert.addEventListener("click",(e) => {
    e.preventDefault()
    const day = dayInput.value
    const month = monthInput.value
    const year = yearInput.value

    const dayError = document.querySelector("#error-day")
    const dayTitle = document.querySelector("#dayTitle")
    const monthError = document.querySelector("#error-month")
    const monthTitle = document.querySelector("#monthTitle")
    const yearError = document.querySelector("#error-year")
    const yearTitle = document.querySelector("#yearTitle")

    dayInput.classList.remove("active")
    dayError.classList.remove("active")
    dayTitle.classList.remove("active")
    monthInput.classList.remove("active")
    monthError.classList.remove("active")
    monthTitle.classList.remove("active")
    yearInput.classList.remove("active")
    yearError.classList.remove("active")
    yearTitle.classList.remove("active")


    if(day.length === 0 || day < 0 || day > 31){
        dayInput.classList.add("active")
        dayError.classList.add("active")
        dayTitle.classList.add("active")
    }else if(month.length === 0 || month < 0 || month > 12){
        monthInput.classList.add("active")
        monthError.classList.add("active")
        monthTitle.classList.add("active")
    }else if(year.length === 0 || year < 0 || year > Data.getFullYear()){
        yearInput.classList.add("active")
        yearError.classList.add("active")
        yearTitle.classList.add("active")
    }else{
        RealiseMath()
    }
})

function RealiseMath(){
    const day = dayInput.value
    const month = monthInput.value
    const year = yearInput.value
    const DateOfBirth = new Date(year,month - 1,day)
    const TimeStamp = Data.getTime() - DateOfBirth.getTime()

    const ageDate = new Date(TimeStamp);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1; // Ajuste para começar em 0
    
    document.querySelector("#years-count").innerHTML = years
    document.querySelector("#months-count").innerHTML = months
    document.querySelector("#days-count").innerHTML = days

    console.log(`Idade: ${years} anos, ${months} meses, ${days} dias`);
}   