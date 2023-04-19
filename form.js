const user = {
    name: '',
    email: '',
    phone: '',
    contact: '',
    topic: '',
    message: ''
}

const form = document.querySelector('.form')
const nameInput = document.querySelector( `form[name=name-form] input[name=name]`);
const emailInput = document.querySelector( `form[name=email-form] input[name=email]`);
const phoneInput = document.querySelector( `form[name=phone-form] input[name=phone]`);
const contactInput = document.querySelectorAll( `form[name=contact-form] input[name=contact]`);
const topicInput = document.querySelectorAll( `option[name=topick]`);
const selectInput = document.querySelector( `#topic`);
const messageInput = document.querySelector( `div[class=form] input[name=message]`);
const checkboxInput = document.querySelector( `form[name=checkbox-form] input[name=checkbox]`);
const sendButton = document.querySelector('.send-botton');

const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const phoneError = document.querySelector('.phone-error');
const contactError = document.querySelector('.contact-error');
const topicError = document.querySelector('.topics-error');
const successfulSending = document.querySelector('.successful-sending');

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const PHONE_REGEXP = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

form.addEventListener('keyup', function(elem) {
  const pole = elem.target.getAttribute('name')
  user[pole] = elem.target.value
  console.log(user)
})

sendButton.addEventListener('click', function(event) {
    event.preventDefault();

    for (let i = 0; i < contactInput.length; i++) {
        if (contactInput[i].checked === true) {
          user.contact = contactInput[i].value
        }
    }
    for (let i = 0; i < topicInput.length; i++) {
        if (topicInput[i].selected === true) {
          user.topic = topicInput[i].value
        }
    }
    
    console.log(user)

    if (validForm()) {
        console.log(validForm())
        successfulSending.classList.add("show")
        setTimeout(closeSuccessfulSending, 3000) 
    }
    
})

function closeSuccessfulSending() {
        successfulSending.classList.remove("show") 
}

function validForm() {
  let valid1;
  let valid2;
  let valid3;
  let valid4;
  let valid5;

        if ( user.name == "" )
        {
                valid1 = false;
                nameError.classList.add("show")
                nameInput.style.borderColor = 'red'
        } else {
                valid1 = true;
                nameError.classList.remove("show")
                nameInput.style.borderColor = 'black'
        }

        if ( isEmailValid(emailInput.value))
        {       valid2 = true;
                emailError.classList.remove("show")
                emailInput.style.borderColor = 'black'
                
        } else {
                valid2 = false;
                emailError.classList.add("show")
                emailInput.style.borderColor = 'red'
        }
        
        if (isPhoneValid(phoneInput.value))
        {       valid3 = true;
                phoneError.classList.remove("show")
                phoneInput.style.borderColor = 'black'
                
        } else {
                valid3 = false;
                phoneError.classList.add("show")
                phoneInput.style.borderColor = 'red'
        }  
        
        if ( user.topic == "" )
        {
                valid4 = false;
                topicError.classList.add("show")
                selectInput.style.borderColor = 'red'
        } else {
                valid4 = true;
                topicError.classList.remove("show")
                selectInput.style.borderColor = 'black'
        }

        if ( checkboxInput.checked === false )
        {
                valid5 = false;
                checkboxInput.nextElementSibling.style.border = '1px solid red'
        } else {
                valid5 = true;
                checkboxInput.nextElementSibling.style.border = 'none'  
        }
        console.log(valid1 && valid2 && valid3 && valid4 && valid5)
        return  valid1 && valid2 && valid3 && valid4 && valid5
}

function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
}

function isPhoneValid(value) {
        return PHONE_REGEXP.test(value);
}