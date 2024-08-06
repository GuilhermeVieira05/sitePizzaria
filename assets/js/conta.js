// Pegando dados do formulário
const fullname = document.querySelector('#fullname')
const signupEmail = document.querySelector('#signupEmail')
const signupPassword = document.querySelector("#signupPassword")
const loginEmail = document.querySelector('#loginEmail')
const loginPassword = document.querySelector("#loginPassword")
const confirmPassword = document.querySelector("#confirmPassword")

// Pegando os butões
const loginButton = document.querySelector('.login_button')
const signupButton = document.querySelector('.signup_button')
const toLoginButton = document.querySelector('.toLoginButton')
const toSignupButton = document.querySelector('.toSignupButton')

// Pegando os formulários
const loginForms = document.querySelector('.login_forms')
const signupForms = document.querySelector('.signup_forms')

// signupButton.addEventListener('click', (ev)=>{
//     ev.preventDefault()

    //const newUser = new User(fullname, signupEmail, signupPassword, confirmPassword)
    
    
// })

toLoginButton.addEventListener('click', (ev)=>{
    ev.preventDefault()

    loginForms.classList.remove('hidden')
    signupForms.classList.add('hidden')
})

toSignupButton.addEventListener('click', (ev)=>{
    ev.preventDefault()

    loginForms.classList.add('hidden')
    signupForms.classList.remove('hidden')
})