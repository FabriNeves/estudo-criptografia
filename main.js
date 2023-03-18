const jwt = require('jsonwebtoken');

// gerar um token JWT
const token = jwt.sign({
    id: 1,
    username: 'Username',
    body:"Mensagem do Corpo"
},
    'chave_secreta',
    { expiresIn: '1h' }
);

// verificar um token JWT
jwt.verify(token, 'chave_secreta', (err, decoded) => {
    if (err) {
        console.log('Token inválido');
    } else {
        console.log(decoded);
    }
});
