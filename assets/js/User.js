let apiUsers = "http://localhost:3000/api/users"

class User{
    constructor(fullname, email, password, confirmPassword){
        this.fullname = fullname
        this.email = email
        this.password = password
        this.confirmPassword = confirmPassword
    }

    async save(){
        // Validar senha
        if(this.password !== this.confirmPassword){
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