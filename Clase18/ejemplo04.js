function getNombreDiasForMes(mes) {
    if (Number.isNaN(mes)) return false;//si o si tiene que ser numerico

    if (mes < 1 || mes > 12) return false; //mes tiene que estar comprendido entre 1 y 12

    mes--; //10 > 9 asi octubre seria el elemento 9 porque arranca desde 0

    const data = [
        {
            nombre: 'enero',
            dias: 31
        },

        {
            nombre: 'febrero',
            dias: 28
        },

        {
            nombre: 'marzo',
            dias: 31
        },

        {
            nombre: 'abril',
            dias: 30
        },

        {
            nombre: 'mayo',
            dias: 31
        },

        {
            nombre: 'junio',
            dias: 30
        },

        {
            nombre: 'julio',
            dias: 31
        },

        {
            nombre: 'agosto',
            dias: 30
        },

        {
            nombre: 'septiembre',
            dias: 31
        },

        {
            nombre: 'octubre',
            dias: 30
        },


        {
            nombre: 'noviembre',
            dias: 31
        },

        {
            nombre: 'diciembre',
            dias: 31
        },

    ]
    return data[mes];

}

const numMes = parseInt(prompt('Ingrese el mes del año', ''))

const resultado = getNombreDiasForMes(numMes);

if(resultado) {
    alert(`El mes ${resultado.nombre} tiene ${resultado.dias}`)
    // alert('El mes ' + resultado.nombre + 'tiene' + resultado.dias + '.')

} else {
    alert(`Mes invalido`);
}
