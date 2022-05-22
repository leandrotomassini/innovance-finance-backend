const { response } = require("express");


const subscribirse = (req, res = response) => {
    
    // Necesito el id del usuario y el id de la subscripcion adquirida, y la 
    // cantidad de meses.

    // Si el usuario ya esta subscripto se actualiza el nombre y la fecha
    // de la subscripcion actual.
    
    // Si el usuario no esta subscripto se crea una nueva subscripcion
    //  guardando el usuario, la subscripcion, y el vencimiento de la misma

    return res.json({
        ok: true,
        msg: 'Usuario subscripto.'
    });
}


module.exports = {
    subscribirse
}