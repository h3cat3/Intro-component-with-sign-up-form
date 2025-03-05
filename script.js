const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password0")
const send = document.getElementById("btn");
const form = document.getElementById("form");

const message = document.querySelectorAll(".error")
const inputs = document.querySelectorAll("input");

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

  let inputIsValid = true;
inputs.forEach((input,index) => {
    // checking if firstName is empty using the input index to access the error message div
    if (input.value.trim() === "") {
        input.style.border = "2px solid hsl(0, 100%, 74%)";
        message[index].innerHTML = `
            <p class="error-text">${input.placeholder} cannot be empty</p>`;
        input.style.background = 'url("images/icon-error.svg") no-repeat right 15px top 5px';
        inputIsValid = false;
          } else {
            input.style.border = "1px solid hsl(246, 25%, 77%)";
            message[index].innerHTML = "";
            input.style.background = "";
            inputIsValid = true;
          }
})



 
  //if all inputs ar valid we will have a message to show that the form is submited
    if (inputIsValid) {
        alert( 
            `First Name: ${firstName.value} 
            \nLast Name: ${lastName.value} 
            \nEmail: ${email.value}
            `);
            document.getElementById("form").reset()
    }

})