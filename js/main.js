//Template Name : Fylo Landing Page 
//Author Name : Maedeh Alizadeh

// Call To Action Section
const emailInput = document.querySelector('.cta-email');
const ctaMsg = document.querySelector('.cta-msg');
const ctaButton = document.querySelector('.cta-btn');
let ifSendData = true;
ctaMsg.innerText = '';

ctaButton.addEventListener('click' , callToAction);

function callToAction(event) {
    event.preventDefault();
    const userEmail = emailInput.value;
    const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/); // for validation email

    if (userEmail.length === 0) {
        ctaMsg.innerText = 'Please enter your email address.';
        ifSendData = false;
    }  else if ( !emailRegex.test(userEmail) ) {
        ctaMsg.innerText = 'Plaese enter a valid email address.';
        ifSendData = false;
    } 

    // fetch data to fake api
    if( ifSendData ) {
        const body = JSON.stringify({
            email : userEmail
        });
        const headers = {
            "content-type" : "application/json"
        };
        fetch ( 'https://jsonplaceholder.typicode.com/users' , {
            method: "POST",
            body: body,
            headers: headers 
        })
            .then( response => {
                if(response.ok){
                    ctaMsg.innerText ="";
                }
            });
    };

    emailInput.value = '';
}

