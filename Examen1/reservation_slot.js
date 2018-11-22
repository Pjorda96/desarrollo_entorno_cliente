/* PON EL CODIGO DE LA CLASE A PARTIR DE AQUÍ */
class ReservationSlot {

    /**
     * 
     * @param {String} autor 
     * @param {String} clase 
     * @param {String} fecha_reserva 
     * @param {String} hora_inicio 
     * @param {String} duracion
     * @param {String} descripcion 
     * @throws {Error} fuera de los horarios de disponibilidad de las aulas (de 08:00 a 21:00)
     * @throws {Error} fuera de los horarios de disponibilidad de las aulas (de 08:00 a 21:00)
     */
    constructor(autor, clase, fecha_reserva, hora_inicio, duracion, descripcion) {

        this.autor = autor;
        this.clase = clase;
        this.fecha_reserva = fecha_reserva;

        let duracionH = parseInt(duracion) / 60;
        if (parseInt(duracion) > 180 || parseInt(duracion) < 0) {
            throw Error('Duración demasiado larga o número negativo');
        } else {
            this.duracion = parseInt(duracion); /*Int*/
        }

        let hora = parseInt(hora_inicio.substring(0, 2));
        let minutos = parseInt(hora_inicio.substring(3, hora_inicio.length));
        if (hora < 8 || hora + duracionH > 21 || (hora + duracionH === 21 && minutos !== 0)) {
            throw Error('Hora mal introducida');
        } else {
            this.hora_inicio = hora_inicio;
        }

        this.descripcion = descripcion;
    }

    /**
     * @returns {String} hh:mm
     */
    getEndTime() {
        let hora = parseInt(this.hora_inicio.substring(0, 2));
        let minutos = parseInt(this.hora_inicio.substring(3, this.hora_inicio.length));

        return String(hora + ':' + minutos);
    }

    /**
     * 
     * @param {Object} ReservationSlot1 
     * @param {Object} ReservationSlot2 
     * @returns {Boolean}
     */
    static overlaps(ReservationSlot1, ReservationSlot2) {
        if (ReservationSlot1.clase !== ReservationSlot2.clase) {
            return false;
        }
        if (parseInt(ReservationSlot1.getEndTime.substring(0, 2)) > parseInt(ReservationSlot2.hora_inicio.substring(0, 2)) ||
            (parseInt(ReservationSlot1.getEndTime.substring(0, 2)) === parseInt(ReservationSlot2.hora_inicio.substring(0, 2)) &
                parseInt(ReservationSlot1.getEndTime.substring(3, this.hora_inicio.length)) === parseInt(ReservationSlot2.hora_inicio.substring(3, this.hora_inicio.length)))) {
            return true;
        }
        if (parseInt(ReservationSlot2.getEndTime.substring(0, 2)) > parseInt(ReservationSlot1.hora_inicio.substring(0, 2)) ||
            (parseInt(ReservationSlot2.getEndTime.substring(0, 2)) === parseInt(ReservationSlot1.hora_inicio.substring(0, 2)) &
                parseInt(ReservationSlot2.getEndTime.substring(3, this.hora_inicio.length)) === parseInt(ReservationSlot1.hora_inicio.substring(3, this.hora_inicio.length)))) {
            return true;
        }
        return false;
    }
}
/* FIN DEL CÓDIGO DE LA CLASE */

/* PON EL CÓDIGO DEL EJERCICIO 3 A PARTIR DE AQUÍ */
function getMostPopularUser(ReservationSlots) {
    let myMap = undefined;

    if (ReservationSlots.length > 0){
        myMap = new Map();

        ReservationSlots.forEach(element => {
            if (myMap.has(element.autor)) {
                myMap.set(element.autor, myMap.get(element.autor) + 1);
            } else {
                myMap.set(element.autor, 1);
            }
        });
    }

    return myMap;
}
/* FIN DEL EJERCICIO 3 */

/* PON EL CÓDIGO DEL EJERCICIO 4 A PARTIR DE AQUÍ */
/**
 * 
 * @param {Number} minutos 
 * @param {Array} ReservationSlots 
 * @returns {Array} new ReservationSlots
 * 
 * @throws {Error} minutos negativos
 */
function delayReservation(minutos, ReservationSlots) {
    if (minutos < 0) {
        throw Error('Minutos incorrectos');
    }

    let array = [];

    ReservationSlots.forEach(element => {
        let hora = parseInt(element.hora_inicio.substring(0, 2));
        let mins = parseInt(element.hora_inicio.substring(3, element.hora_inicio.length));

        let nueva_horaI = hora + (mins / 60);
        let nueva_horaS = String(nueva_horaI + ':' + mins);

        array.push(new ReservationSlot(element.autor, element.clase, element.fecha_reserva, nueva_horaS, String(element.duracion), element.descripcion));
    });

    return array;
}

function getReservationsFromUser(usuario, ReservationSlots) {
    return ReservationSlots.filter(element => {
        if (element.autor === usuario) {
            return true;
        }
    });
}
/* FIN DEL EJERCICIO 4 */

if (typeof (module) !== 'undefined' && module.exports) {
    exports.ReservationSlot = ReservationSlot;
    exports.getMostPopularUser = getMostPopularUser;
    exports.delayReservations = delayReservations;
    exports.getReservationsFromUser = getReservationsFromUser;
}

if (document.body.hasChildNodes()) {
    /* PON AQUÍ EL CÓDIGO DEL EJERCICIO 5 */
    // Pon aquí el código para cambiar la tabla
    let filas = document.body.firstElementChild.tBodies[0].rows;

    filas[2].style = 'background-color: red';
    filas[6].style = 'background-color: red';
    filas[10].style = 'background-color: red';

    //Pon aquí tu código para cambiar el código del párrafo, de forma que muestre el usuario que más reservas ha realizado
    let p = document.body.lastElementChild.previousElementSibling.textContent;
    document.body.lastElementChild.previousElementSibling.textContent = p + ' chinpokomon';

    /* FIN DEL EJERCICIO 5 */
}