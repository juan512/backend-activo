const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017/Activos';
const client = new MongoClient(url);

exports.createActivoDB = async (activo) => {
	await client.connect();
	const collection = client.db().collection('activos');
	const res = await collection.insertOne(activo)
	return res
}

exports.getActivosDB = async () => {
	await client.connect();
	const collection = client.db().collection('activos');
	const res = await collection.find({})
	let result = []
	await res.forEach(element => {
		result.push({ 
            Id: element.id, 
            Nombre: element.Nombre,
            Descripcion: element.Descripcion,
            Tipo: element.Tipo,
            ValorCompra: element.ValorCompra,
            FechaRecepcion: element.FechaRecepcion,
            Estado: element.Estado,
            TipoEsquemaContable: element.TipoEsquemaContable,
            Responsable: element.Responsable
        })
	})
	return result
}