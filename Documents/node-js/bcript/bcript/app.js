// criptografa (hash) a senha com BCript

// criptografia pode ser revertida (descriptografar)

// Hash nao pode reverter, é uma via de mão unica.
// a senha informada pelo usuario é convertida em Hash utilizando a mesma tecnica do cadastro e comparada com senha que ja esta armazenada no Banco de Dados.

import bcrypt from 'bcrypt'

const saltRounds = 10 ; // numeros de "camadas" de segurança
const senhaInformada = "12345";

bcrypt.hash(senhaInformada, saltRounds, (erro, hashGerado) => {
    // se der erro mostra uma mensagem
    if (erro) {
        throw erro;
    }

    console.log('Hash BCrypt', hashGerado);


    // verifica/compara a senha 
    bcrypt.compare(senhaInformada, hashGerado, (erro, resultado) => {
        if (erro) {
            throw erro;
        }

        console.log('senha correta', resultado);
        
    })
    
});