password = document.querySelector('#password')
confirmPassword = document.querySelector('#confirm-password')
submitBtn = document.querySelector('button')


submitBtn.addEventListener('click', () => {

        if(password.value === '' && confirmPassword.value === '') {
            alert("Please enter password")
        }
    
        else if(password.value === confirmPassword.value) {
            password.classList.toggle('password-match')
            confirmPassword.classList.toggle("password-match")
             
        }
        else if(password.value !== confirmPassword.value) {
            password.classList.toggle("password-not-match")
            confirmPassword.classList.toggle("password-not-match")
            alert("Passwords do not match")
        }
})