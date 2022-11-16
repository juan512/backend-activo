var XLSX = require("xlsx");

const { createActivo } = require('../services/activoServices')
const { getActivos } = require('../services/activoServices')

const { successMessages, errorMessages } = require('../constants/messages')

exports.createActivoController = async (req, res, next) => {
  const { body } = req;
  let datos = ExcelAJSON();
  const activos = await createActivo(datos)
  if (!activos) {
    res.status(201).json({ message: successMessages.activo.post,  });
  } else {
    return res.status(422).json({
      message: errorMessages.activo.post
    });
  }
}

const ExcelAJSON = () => {
  const excel = XLSX.readFile("E:\\Proyecto de Grado\\SistemaActivo\\backend-activo\\activos.xlsx");
  var nombreHoja = excel.SheetNames;
  let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]])
  const jDatos = [];
  for(let i = 0; i < datos.length; i++) {
    const dato = datos[i];
    jDatos.push({
      ...dato,
      FechaRecepcion: new Date((dato.FechaRecepcion - (25567 + 2)) * 86400 * 1000)
    })
  }
  return jDatos;
}

exports.getActivoController = async (req, res, next) => {
    const activos = await getActivos()
    res.status(200).json({ message: successMessages.activo.get,  Activos: activos });
}