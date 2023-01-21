const user = {
    name: '',
    email: '',
    phone: '',
    contact: '',
    topic: '',
    message: ''
}

const nameInput = document.querySelector( `form[name=name-form] input[name=name]`);
const emailInput = document.querySelector( `form[name=email-form] input[name=email]`);
const phoneInput = document.querySelector( `form[name=phone-form] input[name=phone]`);
const contactInput = document.querySelectorAll( `form[name=contact-form] input[name=contact]`);
const topicInput = document.querySelectorAll( `option[name=topick]`);
const messageInput = document.querySelector( `div[class=form] input[name=message]`);
const checkboxInput = document.querySelector( `form[name=checkbox-form] input[name=checkbox]`);
const sendButton = document.querySelector('.send-botton');

sendButton.addEventListener('click', function(event) {
    event.preventDefault();
    user.name = nameInput.value
    user.email = emailInput.value
    user.phone = phoneInput.value

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
    user.message = messageInput.value
    const checkbox = checkboxInput.checked
    // console.log(checkbox)
    console.log(user)
    
})