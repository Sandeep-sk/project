//----------Regular Expression used for validation------

// -----------------------------------for name-------------------------------------
let name = document.getElementById('name');
let nameError = document.getElementById('nameError');
nameError.style.visibility = 'hidden';
var nameStorevalue;
name.addEventListener('blur', (event) => {
    event.preventDefault();
    let str = name.value;
    let regex = /^[_a-zA-Z]([_a-zA-Z0-9\s]+){2,20}$/;
    let regForSpace = /(\s){2,20}/g;
    if (regex.test(str)) {
        let replacedValue = str.replace(regForSpace, " ");
        nameStorevalue = replacedValue; // global var to store the value of correct name
        name.style.borderColor = 'grey';
        console.log('matched');
        nameError.style.visibility = 'hidden';
    }
    if (regex.test(str) == false) {
        nameError.style.visibility = 'visible';
        name.style.borderColor = 'red';
        nameError.style.color = 'red';
    }
})
//-----------------------------------for email----------------------------------------------
let email = document.getElementById('email');
let emailError = document.getElementById('emailError');
emailError.style.visibility = 'hidden';
var emailStorevalue;
email.addEventListener('blur', (event) => {
    event.preventDefault();
    let str = email.value;
    let regex = /^[a-zA-Z_]([a-zA-Z0-9_\-\.]+)@([a-zA-Z]+)\.([a-z]){2,4}$/;
    if (regex.test(str)) {
        console.log('matched');
        email.style.borderColor = 'grey';
        emailError.style.visibility = 'hidden';
        emailStorevalue = str; // global var to store the value of correct email
    }
    else {
        email.style.borderColor = 'red';
        emailError.style.color = 'red';
        emailError.style.visibility = 'visible';
    }

})
//----------------------------- for phone --------------------------------------------------
let phone = document.getElementById('phone');
let phoneError = document.getElementById('phoneError');
phoneError.style.visibility = 'hidden';
var phoneStorevalue;
phone.addEventListener('blur', (event) => {
    event.preventDefault();
    let str = phone.value;
    let regex = /^[1-9]([0-9]){9}$/;
    if (regex.test(str)) {
        console.log('matched');
        phone.style.borderColor = 'grey';
        phoneError.style.visibility = 'hidden';
        phoneStorevalue = parseInt(str); // global var to store the value of correct phone
    }
    else {
        phone.style.borderColor = 'red';
        phoneError.style.visibility = 'visible';
        phoneError.style.color = 'red';
    }
})
//-------------------------for date,transportation,country and address -----------------------
let date = document.getElementById('date');
let medium = document.getElementById('medium');
let country = document.getElementById('country');
let address = document.getElementById('textarea');
//--------------------submit -----------------------------------
document.getElementById('btn').addEventListener('click', submit);
function submit(event) {
    event.preventDefault();
    if (nameStorevalue && emailStorevalue && phoneStorevalue && medium.value && country.value && address.value && date.value) {
        //use this object for get request and store it in any otherfile as you wish
        // let formDetails={
        //     name:nameStorevalue,
        //     email:emailStorevalue,
        //     phone:phoneStorevalue,
        //     date:date.value,
        //     transportation:medium.value,
        //     contunry:country.value,
        //     address:address.value
        // }
        displaymessage('Success');
        document.getElementById('formId').reset();
        document.querySelector('.formdiv').style.border='none';

    }
    else {
        displaymessage('Fail');
        document.querySelector('.formdiv').style.border='2px solid red';

    }

}
//-------------message show success or faliure on submit----
function displaymessage(args) {
    let messageField = document.querySelector('.messageComes');
    let message;
    if (args == 'Success') {
        message =
            `<div class="message">
        <h3><bold>${args}</bold>:Your Form has been submitted Sucessfully</h3>
        </div>`;
    }
    else {
        message =
            `<div class="message">
        <h3><bold>${args}</bold>:Your Form has not  Submitted some error occured</h3>
        </div>`;
    }
    messageField.innerHTML = message;
    setTimeout(() => {
        messageField.innerHTML = "";
    }, 4000);
}
//----------------------------------------------------------