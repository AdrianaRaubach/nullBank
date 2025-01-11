const nameIn = document.getElementById("name")
const lastNameIn = document.getElementById("last-name")
const emailIn = document.getElementById("email")
const messageIn = document.getElementById("message")
const form1 = document.getElementById("form-1")
const errorLastName = document.getElementsByClassName("error-last-name")
const errorEmail = document.getElementsByClassName("error-email")
const errorMessage = document.getElementsByClassName("error-message")
const errorName = document.getElementsByClassName("error-name")
const listItems = [nameIn, lastNameIn, emailIn, messageIn]

nameIn.addEventListener("input", function(){
    const regexName = /^[a-záàâãéèêíïóôõöúçñ\s]+$/i
    const valueInput = nameIn.value
    const testName = regexName.test(valueInput)

    validateInfos(nameIn, valueInput.length >= 3 && testName, errorName)
})

lastNameIn.addEventListener("input", function(){
    const regexName = /^[a-záàâãéèêíïóôõöúçñ\s]+$/i
    const valueInput = lastNameIn.value
    const testName = regexName.test(valueInput)

    validateInfos(lastNameIn, valueInput.length >= 3 && testName, errorLastName) 
})

emailIn.addEventListener("input", function(){
    const regexEmail = /\w+@\w+\.\w+/;
    const valueInput = emailIn.value
    const testName = regexEmail.test(valueInput)

    validateInfos(emailIn, testName, errorEmail) 
})

messageIn.addEventListener("input", function(){
    const valueInput = messageIn.value

    validateInfos(messageIn, valueInput.length > 20, errorMessage) 
})

function validateInfos(item, boolean, error) {
    if (boolean) {
        item.classList.remove('class-form-validade-false');
        item.classList.add('class-form-validade-true');
        error[0].classList.remove('error-class');
    } else {
        item.classList.remove('class-form-validade-true');
        item.classList.add('class-form-validade-false');
        error[0].classList.add('error-class');
    }  
}

form1.addEventListener("submit", function(event) {
    event.preventDefault()
    let validationPassed = true

    listItems.forEach(element => {
        let classNameEl = element.className
        if(!classNameEl.includes("class-form-validade-false") && !classNameEl.includes("class-form-validade-true")) {
            validationNotPassed = false
        } else if(classNameEl.includes("class-form-validade-false")){
            validationPassed = false
        }
    
    })
    if(validationPassed) {
        this.submit()
    } 
})

nameIn.addEventListener("input", function(){
    nameIn.value = (nameIn.value).toLowerCase()
    const sep = " "
    let formattedValue = ""
    for(let i = 0; i < (nameIn.value).length; i++) {
        if(i == 0 || nameIn.value[i-1] === sep) {
            formattedValue += nameIn.value[i].toUpperCase()
        } else {
            formattedValue += nameIn.value[i]
        } 
    }
    nameIn.value = formattedValue
})

lastNameIn.addEventListener("input", function(){
    lastNameIn.value = (lastNameIn.value).toLowerCase()
    const sep = " "
    let formattedValue = ""
    for(let i = 0; i < (lastNameIn.value).length; i++) {
        if(i == 0 || lastNameIn.value[i-1] === sep) {
            formattedValue += lastNameIn.value[i].toUpperCase()
        } else {
            formattedValue += lastNameIn.value[i]
        } 
    }
    lastNameIn.value = formattedValue
})