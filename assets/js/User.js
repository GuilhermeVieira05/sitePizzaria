let apiUsers = "http://localhost:3000/api/users"

export default class User{
    constructor(fullname, email, password, confirmPassword){
        this.fullname = fullname
        this.email = email
        this.password = password
        this.confirmPassword = confirmPassword
    }

    validateEmail(email){
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return re.test(String(email).toLowerCase())
    }

    async save(){
        //Validar campo vazio
        if (!this.fullname) {
            alert("O campo Nome Completo precisa estar preenchido!")
            throw new Error("O campo Nome Completo precisa estar preenchido!");
        }
        if (!this.email) {
            alert("O campo Email precisa estar preenchido!")
            throw new Error("O campo Email precisa estar preenchido!");
        }
        if (!this.password) {
            alert("O campo Senha precisa estar preenchido!")
            throw new Error("O campo Senha precisa estar preenchido!");
        }
        if (!this.confirmPassword) {
            alert("O campo Confirmar Senha precisa estar preenchido!")
            throw new Error("O campo Confirmar Senha precisa estar preenchido!");
        }

        // Validar email
            // if(!this.validateEmail(this.email)){
            //     alert("O email fornecido não é válido!")
            //     throw new Error("O email fornecido não é válido!")
            // }

        // Validar senha
        if(this.password !== this.confirmPassword){
            alert("As senhas não coincidem!")
            throw new Error("As senhas não coincidem!")
        }

        const userData = {
            fullname: this.fullname,
            email: this.email,
            password: this.password
        }

        try{
            const response = await fetch(apiUsers, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })

            if(!response.ok){
                throw new Error("Erro ao criar usuário")
            }

            const result = await response.json()
            console.log("Usuário criado com sucesso!", result)
        }catch (error){
            console.error("Erro: ", error)
        }
    }
}