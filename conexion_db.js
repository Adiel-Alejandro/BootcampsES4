const mysql = require('mysql'); 

const conexion = mysql.createConnection({ 
    host: 'localhost',
    database: 'ejemplo_db', 
    user: 'root', 
    password: '12345678' 
     
});

conexion.connect((error) => {
    if (error) {
        console.error ('error al conectar a la base de datos: ', error);
        return;
    }
    console.log('conexion a la base de datos exitosa!');

})

conexion.query ('select * from usuarios', (error, resultados, campos) => {
    if(error){
        console.error('Error al ejecutar la consulta: ', error);
    return ;
}
    console.log('Resultados de la Consulta: ', resultados);
});