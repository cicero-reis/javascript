// refatorando callback usuando callback

// sem promisse
const http = require('http')

const getTurma = (letra, callback) => {

    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {

        http.get(url, res => {
            
            let resultado = ''
            
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
    
        })
    })
}

Promise.all([
    getTurma('A'),
    getTurma('B'),
    getTurma('C')
])
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(alunos => alunos.nome))
.then( resultado => console.log(resultado))
.catch(e => console.log(e.message))


getTurma('D').catch(e => console.log(e.message))
