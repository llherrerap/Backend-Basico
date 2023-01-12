function saludar(nombre, edad){
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`
}

function saludarHolaMundo(){
    return `Hola mundo`
}

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};