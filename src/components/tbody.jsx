const tbody = [
    {
        id:1,
        nombre: 'Oliver',
        apellido: 'Charry',
        edad: 26,
        estado: true
    },
    {
        id:2,
        nombre: 'Luli',
        apellido: 'Argentina',
        edad: 23,
        estado: true
    },
    {
        id:3,
        nombre: 'Cesar',
        apellido: 'Aurra',
        edad: 23,
        estado: false
    },
    {
        id:4,
        nombre: 'Camilo',
        apellido: 'Perez',
        edad: 23,
        estado: true
    }
];

const tbodyMap = tbody.map((value) => 
    {
        return(
            <tbody>
                <td>{value.id}</td>
                <td>{value.nombre}</td>
                <td>{value.apellido}</td>
                <td>{value.edad}</td>
                <td>{(value.estado) ? <span class="badge bg-success">Activo</span> : <span class="badge bg-danger">Inactivo</span>}</td>
            </tbody>
           
        )
    }
)

export default tbodyMap;