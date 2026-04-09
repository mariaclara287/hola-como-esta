Modelo físico
Incluir el script del modelo físico de su PPI (por ahora crear las tablas)

create database cryptoguard;
use cryptoguard;
create table producto (   id int primary key, bitcoin varchar(120));

create table ventas( id int primary key, ProductosVendidos int,
fechaDeVenta datetime, ValorDeLaVenta int, productoPorVender(120))

create comprador(documento int primary key, PrimerNombre varchar(50),apellido varchar(50));

create table comentarios (id int primary key, comprador varchar(50),
vendedor varchar(50), administrador varchar(50));

create table vendedor(documento int primary key,
nombre varchar(50),apellido varchar(50))



	






     
