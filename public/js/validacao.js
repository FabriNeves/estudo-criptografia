
const loginAPI = new methodsHTTP("http://localhost:3000/");

const form = document.querySelector('#registration-form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');


// document.onclick =async function () {
//     try {
//         const response = await loginAPI.get();
//         console.log(response);
//         // faz algo com a resposta
//       } catch (error) {
//         console.error(error);
//         // lida com o erro
//       }
// };

class postUser {
    constructor(username,email,password){
        this.username = username,
        this.email = email,
        this.password= password
    }
}
function handleSubmit(event) {
    event.preventDefault();
    // código para enviar os dados do formulário para o servidor
  }

form.addEventListener('submit',async (event) => {
    // Cria objeto para envio 
    const newUser = new postUser(username.value,email.value,password.value); 

   
    // Valida o nome de usuário
    // trim() remove os espaços do valor de username deixando somente letras e numeros(no começo e no fim)
    if (username.value.trim() === '') {
        alert('Por favor, preencha o nome de usuário.');
        return;
    } else if (username.value.trim().indexOf(" ") > 0) {
        alert('Por favor o nome do usuário não pode conter espaços.');
        return;
    }

    // Valida o endereço de email
    if (!email.checkValidity()) {
        alert('Por favor, insira um endereço de email válido.');
        return;
    }

    // Valida a senha
    if (password.value.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }

    // Valida a confirmação da senha
    if (password.value !== confirmPassword.value) {
        document.querySelector('#confirm-password-error').textContent = 'As senhas não conferem.';
        return;
    }

    // Se todos os campos estiverem válidos, envia o formulário
    try {
        const response = await loginAPI.post(newUser,"http://localhost:3000/register");
        console.log(response);
        // faz algo com a resposta
      } catch (error) {
        console.error(error);
        // lida com o erro
      }
    //form.submit();
});

