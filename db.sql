Modelo físico
Incluir el script del modelo físico de su PPI (por ahora crear las tablas)

create database cryptoguard;
use cryptoguard;
create table producto
(id int primary key, // es entero porque se guarda un numero
bitcoin varchar(120));es varcgar porque es por letra

create table ventas( id int primary key // es entero porque se guarda un numero
ProductosVendidos int // es un numero porque es la cantidad de productos 
fechaDeVenta datetime // es un numero por la fecha de ventas
ValorDeLaVenta int, // es un numero que es el valor de las ventas
productoPorVender(120))//es varchar porque es un numero

create comprador(documento int primary key,//es entero porque se guarda un numero
	PrimerNombre varchar(50),//es varchar porque es un numero
	apellido varchar(50));es varchar porque es un numero

create table comentarios (id int primary key,//es entero porque se guarda un numero
	comprador varchar(50)//es varchar porque es un numero
vendedor varchar(50),//es varchar porque es un numero
	administrador varchar(50));//es varchar porque es un numero

create table vendedor(documento int primary key,//es entero porque se guarda un numero
nombre varchar(50),//es varchar porque es un numero
	apellido varchar(50))//es varchar porque es un numero



	






     
