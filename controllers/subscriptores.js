const { response } = require("express");

const { Subscriptor } = require("../models");


const subscribirse = async (req, res = response) => {

    const { subscripcion, meses, usuario } = req.body;

    // Si ya tiene subscripción:

    const subscripcionActual = await Subscriptor.findOne({ usuario });

    if (subscripcionActual) {

        if (subscripcionActual.vencimiento > new Date()) {

            nuevoVencimiento = subscripcionActual.vencimiento.setMonth(subscripcionActual.vencimiento.getMonth() + meses);

            await Subscriptor.findByIdAndDelete(subscripcionActual._id);

            const nuevoSubscriptor = new Subscriptor({ subscripcion, usuario, vencimiento: nuevoVencimiento });
            await nuevoSubscriptor.save();

            return res.json({
                ok: true,
                msg: 'Subscripción actualizada.',
            });
        }

        if (subscripcionActual.vencimiento < new Date()) {

            await Subscriptor.findByIdAndDelete(subscripcionActual._id);

            let vencimiento = new Date();
            vencimiento = vencimiento.setMonth(vencimiento.getMonth() + 12);

            const nuevaSubscripcion = new Subscriptor({ subscripcion, usuario, vencimiento });
            await nuevaSubscripcion.save();

            return res.json({
                ok: true,
                msg: 'Subscripción actualizada y reactivada.'
            });
        }
    }

    let vencimiento = new Date();
    vencimiento = vencimiento.setMonth(vencimiento.getMonth() + 12);

    const nuevaSubscripcion = new Subscriptor({ subscripcion, usuario, vencimiento });
    await nuevaSubscripcion.save();

    return res.json({
        ok: true,
        msg: 'Subscripción realizada.'
    });
}


module.exports = {
    subscribirse
}