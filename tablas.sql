create table productora (
id_productora int primary key auto_increment,
nombre_productora varchar (200),
pais_origen_productora varchar (100)
);

create table pelicula(
id_pelicula int primary key auto_increment,
nombre_pelicula varchar (200),
genero_pelicula varchar (50),
duracion_pelicula int (3),
clasificacion_pelicula varchar (10),
presupuesto_pelicula float,
ganancias_taquilla float,
id_productora int,
constraint foreign key fk_productora (id_productora) references productora (id_productora)
);

create table director(
id_director int primary key auto_increment,
nombre_director varchar (50),
apellido_director varchar (50),
fecha_nacimiento date
);

create table actor(
id_actor int primary key auto_increment,
nombre_actor varchar (50),
apellido_actor varchar (50),
fecha_nacimiento_actor date
);

create table reconocimiento (
id_reconocimiento int primary key auto_increment,
nombre_reconocimiento varchar (200),
institucion varchar (200),
pais_origen_reconocimiento varchar (50)
);

create table actor_pelicula(
id_actor_pelicula int primary key auto_increment,
id_pelicula int,
constraint foreign key fk_pelicula_actor (id_pelicula) references pelicula (id_pelicula),
id_actor int,
constraint foreign key fk_actor (id_actor) references actor (id_actor)
);

create table director_pelicula(
id_director_pelicula int primary key auto_increment,
id_pelicula int,
constraint foreign key fk_pelicula_director (id_pelicula) references pelicula (id_pelicula),
id_director int,
constraint foreign key fk_director (id_director) references director (id_director)
);

create table reconocimiento_pelicula(
id_reconocimiento_pelicula int primary key auto_increment,
id_pelicula int,
constraint foreign key fk_pelicula_reconocimiento (id_pelicula) references pelicula (id_pelicula),
id_reconocimiento int,
constraint foreign key fk_reconocimiento (id_reconocimiento) references reconocimiento (id_reconocimiento)
);