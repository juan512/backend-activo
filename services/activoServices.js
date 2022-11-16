const { createActivoDB } = require('../dataAccess/activos')
const { getActivosDB } = require('../dataAccess/activos')

exports.createActivo = async (data) => {

    data.forEach(async element => {
        const { Id, Nombre, Descripcion, Tipo, ValorCompra, FechaRecepcion, Estado, TipoEsquemaContable, Responsable } = element
        const createdActivo = {
          Id,
          Nombre,
          Descripcion,
          Tipo,
          ValorCompra,
          FechaRecepcion,
          Estado,
          TipoEsquemaContable,
          Responsable
        };

        const res = await createActivoDB(createdActivo)
        if (res) {
            return createdActivo
          } else {
            return false
          }
    });
}

exports.getActivos = async () => {
    const products = await getActivosDB()
    console.log(products)
    return products
  }