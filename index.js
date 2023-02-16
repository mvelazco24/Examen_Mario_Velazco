const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

//MÉTODOS PARA LA TABLA PRODUCTORA
app.get('/mvelazco/api/productora', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "select * from productora";

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }

});

});

app.post('/mvelazco/api/productora', (req, res)=>{
       let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
        
        let sql = "insert into productora " + "(nombre_productora, pais_origen_productora)" + "values (?, ?)";
        let parametros =[
            req.body.nombre_productora,
            req.body.pais_origen_productora
        ];
        
        con.connect(function(err){
            if (err){
                res.send(err);
            } else{
                con.query(sql, parametros, function(err, result){
                    if(err){
                        res.send(err);
                    }else{
                        res.send(result)
                    }
                });
        
                }
            
        });
        
    })

app.put('/mvelazco/api/productora/:id', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "update productora set nombre_productora = ?," + "pais_origen_productora = ? " + "where id_productora = ?";
let parametros =[
	req.body.nombre_productora,
	req.body.pais_origen_productora,
	req.params.id
];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }   
});

});

app.delete('/mvelazco/api/productora/:id', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "delete from productora where id_productora = ?";
let parametros =[req.params.id];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }
    
});

});

// MÉTODOS PARA LA TABLA PELÍCULA
app.get('/mvelazco/api/pelicula', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
    
    let sql = "select * from pelicula";
    
    con.connect(function(err){
        if (err){
            res.send(err);
        } else{
            con.query(sql, function(err, result){
                if(err){
                    res.send(err);
                }else{
                    res.send(result)
                }
            });

            }
        
    });
    
    });

app.post('/mvelazco/api/pelicula', (req, res)=>{
       let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
        
        let sql = "insert into pelicula " + "(nombre_pelicula, genero_pelicula, duracion_pelicula, clasificacion_pelicula, presupuesto_pelicula, ganancias_taquilla, id_productora) " + "values (?, ?, ?, ?, ?, ?, ?)";
        let parametros =[
            req.body.nombre_pelicula,
            req.body.genero_pelicula,
            req.body.duracion_pelicula,
            req.body.clasificacion_pelicula,
            req.body.presupuesto_pelicula,
            req.body.ganancias_taquilla,
            req.body.id_productora
        ];
        
        con.connect(function(err){
            if (err){
                res.send(err);
            } else{
                con.query(sql, parametros, function(err, result){
                    if(err){
                        res.send(err);
                    }else{
                        res.send(result)
                    }
                });
        
                }
            
        });
        
    });

app.put('/mvelazco/api/pelicula/:id', (req, res)=>{
       let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
        
        let sql = "update pelicula set nombre_pelicula = ?," + "genero_pelicula = ?, " + "duracion_pelicula = ?, " + "clasificacion_pelicula = ?, " + "presupuesto_pelicula = ?, " + "ganancias_taquilla = ?, " + "id_productora = ? " + "where id_pelicula = ?";
        let parametros =[
            req.body.nombre_pelicula,
            req.body.genero_pelicula,
            req.body.duracion_pelicula,
            req.body.clasificacion_pelicula,
            req.body.presupuesto_pelicula,
            req.body.ganancias_taquilla,
            req.body.id_productora,
            req.params.id
        ];
        
        con.connect(function(err){
            if (err){
                res.send(err);
            } else{
                con.query(sql, parametros, function(err, result){
                    if(err){
                        res.send(err);
                    }else{
                        res.send(result)
                    }
                });
        
                }   
        });
        
        });

app.delete('/mvelazco/api/pelicula/:id', (req, res)=>{
           let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
            
            let sql = "delete from pelicula where id_pelicula = ?";
            let parametros =[req.params.id];
            
            con.connect(function(err){
                if (err){
                    res.send(err);
                } else{
                    con.query(sql, parametros, function(err, result){
                        if(err){
                            res.send(err);
                        }else{
                            res.send(result)
                        }
                    });
            
                    }
                
            });
            
            });

//MÉTODOS PARA LA TABLA ACTOR
app.get('/mvelazco/api/actor', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
    
    let sql = "select * from actor";
    
    con.connect(function(err){
        if (err){
            res.send(err);
        } else{
            con.query(sql, function(err, result){
                if(err){
                    res.send(err);
                }else{
                    res.send(result)
                }
            });
    
            }
    
    });
    
    });

app.post('/mvelazco/api/actor', (req, res)=>{
       let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
        
        let sql = "insert into actor " + "(nombre_actor, apellido_actor, fecha_nacimiento_actor)" + "values (?, ?, ?)";
        let parametros =[
            req.body.nombre_actor,
            req.body.apellido_actor,
            req.body.fecha_nacimiento_actor
        ];
        
        con.connect(function(err){
            if (err){
                res.send(err);
            } else{
                con.query(sql, parametros, function(err, result){
                    if(err){
                        res.send(err);
                    }else{
                        res.send(result)
                    }
                });
        
                }
            
        });
        
    });

app.put('/mvelazco/api/actor/:id', (req, res)=>{
       let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
        
      let sql = "update actor set nombre_actor = ?," + "apellido_actor = ?," + " fecha_nacimiento_actor = ? where id_actor = ?";
        let parametros =[
            req.body.nombre_actor,
            req.body.apellido_actor,
            req.body.fecha_nacimiento_actor,
            req.params.id
        ];
        
        con.connect(function(err){
            if (err){
                res.send(err);
            } else{
                con.query(sql, parametros, function(err, result){
                    if(err){
                        res.send(err);
                    }else{
                        res.send(result)
                    }
                });
        
                }   
        });
        
        });

app.delete('/mvelazco/api/actor/:id', (req, res)=>{
           let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
            
            let sql = "delete from actor where id_actor = ?";
            let parametros =[req.params.id];
            
            con.connect(function(err){
                if (err){
                    res.send(err);
                } else{
                    con.query(sql, parametros, function(err, result){
                        if(err){
                            res.send(err);
                        }else{
                            res.send(result)
                        }
                    });
            
                    }
                
            });
            
            });

//MÉTODOS PARA LA TABLA DIRECTOR
app.get('/mvelazco/api/director', (req, res)=>{
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
    
    let sql = "select * from director";
    let parametros = [req.params.id];
    
    con.connect(function(err){
        if (err){
            res.send(err);
        } else{
            con.query(sql, parametros, function(err, result){
                if(err){
                    res.send(err);
                }else{
                    res.send(result)
                }
            });
    
            }
    
    });
    
    });

app.post('/mvelazco/api/director', (req, res)=>{
       let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
        
        let sql = "insert into director " + "(nombre_director, apellido_director, fecha_nacimiento)" + "values (?, ?, ?)";
        let parametros =[
            req.body.nombre_director,
            req.body.apellido_director,
            req.body.fecha_nacimiento
        ];
        
        con.connect(function(err){
            if (err){
                res.send(err);
            } else{
                con.query(sql, parametros, function(err, result){
                    if(err){
                        res.send(err);
                    }else{
                        res.send(result)
                    }
                });
        
                }
            
        });
        
    });

app.put('/mvelazco/api/director/:id', (req, res)=>{
       let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
        
      let sql = "update director set nombre_director = ?," + "apellido_director = ?," + " fecha_nacimiento = ? where id_director = ?";
      
        let parametros =[
            req.body.nombre_director,
            req.body.apellido_director,
            req.body.fecha_nacimiento,
            req.params.id
        ];
        
        con.connect(function(err){
            if (err){
                res.send(err);
            } else{
                con.query(sql, parametros, function(err, result){
                    if(err){
                        res.send(err);
                    }else{
                        res.send(result)
                    }
                });
        
                }   
        });
        
        });

app.delete('/mvelazco/api/director/:id', (req, res)=>{
           let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
            
            let sql = "delete from director where id_director = ?";
            let parametros =[req.params.id];
            
            con.connect(function(err){
                if (err){
                    res.send(err);
                } else{
                    con.query(sql, parametros, function(err, result){
                        if(err){
                            res.send(err);
                        }else{
                            res.send(result)
                        }
                    });
            
                    }
                
            });
            
            });

//MÉTODOS PARA LA TABLA RECONOCMIENTO
app.get('/mvelazco/api/reconocimiento', (req, res)=>{
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
    
    let sql = "select * from reconocimiento";
    
    con.connect(function(err){
        if (err){
            res.send(err);
        } else{
            con.query(sql, function(err, result){
                if(err){
                    res.send(err);
                }else{
                    res.send(result)
                }
            });
    
            }
    
    });
    
    });
    
    app.post('/mvelazco/api/reconocimiento', (req, res)=>{
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
    
    let sql = "insert into reconocimiento " + "(nombre_reconocimiento, institucion, pais_origen_reconocimiento) " + "values (?, ?, ?)";
    let parametros =[
        req.body.nombre_reconocimiento,
        req.body.institucion,
        req.body.pais_origen_reconocimiento
    ];
    
    con.connect(function(err){
        if (err){
            res.send(err);
        } else{
            con.query(sql, parametros, function(err, result){
                if(err){
                    res.send(err);
                }else{
                    res.send(result)
                }
            });
    
            }
        
    });
    
    });
    
app.put('/mvelazco/api/reconocimiento/:id', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "update reconocimiento set nombre_reconocimiento = ?, " + "institucion = ?, " + "pais_origen_reconocimiento = ? " + "where id_reconocimiento = ?";
let parametros =[
	req.body.nombre_reconocimiento,
	req.body.institucion,
	req.body.pais_origen_reconocimiento,
	req.params.id
];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }   
});

});

app.delete('/mvelazco/api/reconocimiento/:id', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "delete from reconocimiento where id_reconocimiento = ?";
let parametros =[req.params.id];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }
    
});

});

    //MÉTODOS PARA LA TABLA ACTOR PELÍCULA
app.get('/mvelazco/api/actorpelicula', (req, res)=>{
     let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
        
        let sql = "select * from actor_pelicula";
        let parametros = [req.params.id];
        
        con.connect(function(err){
            if (err){
                res.send(err);
            } else{
                con.query(sql, parametros, function(err, result){
                    if(err){
                        res.send(err);
                    }else{
                        res.send(result)
                    }
                });
        
                }
        
        });
        
        });
        
app.post('/mvelazco/api/actorpelicula', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "insert into actor_pelicula " + "(id_pelicula, id_actor) " + "values (?, ?)";
let parametros =[
    req.body.id_pelicula,
    req.body.id_actor
];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }
    
});

});

app.put('/mvelazco/api/actorpelicula/:id', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "update actor_pelicula set id_pelicula = ?," + "id_actor = ? " + "where id_actor_pelicula = ?";
let parametros =[
	req.body.id_pelicula,
	req.body.id_actor,
	req.params.id
];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }   
});

});

app.delete('/mvelazco/api/actorpelicula/:id', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "delete from actor_pelicula where id_actor_pelicula = ?";
let parametros =[req.params.id];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }
    
});

});

// MÉTODOS PARA LA TABLA DIRECTOR PELÍCULA
app.get('/mvelazco/api/directorpelicula', (req, res)=>{
     let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
        
        let sql = "select * from director_pelicula";
        let parametros = [req.params.id];
        
        con.connect(function(err){
            if (err){
                res.send(err);
            } else{
                con.query(sql, parametros, function(err, result){
                    if(err){
                        res.send(err);
                    }else{
                        res.send(result)
                    }
                });
        
                }
        
        });
        
        });
        
app.post('/mvelazco/api/directorpelicula', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

 let sql = "insert into director_pelicula " + "(id_pelicula, id_director)" + "values (?, ?)";
let parametros =[
    req.body.id_pelicula,
    req.body.id_director
];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }
    
});

});

app.put('/mvelazco/api/directorpelicula/:id', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "update director_pelicula set id_pelicula = ?," + "id_director = ? " + "where id_director_pelicula = ?";
let parametros =[
	req.body.id_pelicula,
	req.body.id_director,
	req.params.id
];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }   
});

});

app.delete('/mvelazco/api/directorpelicula/:id', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "delete from director_pelicula where id_director_pelicula = ?";
let parametros =[req.params.id];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }
    
});

});

//MÉTODOS PARA LA TABLA RECONOCIMIENTO PELICULA
app.get('/mvelazco/api/reconocimientopelicula', (req, res)=>{
  let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });
    
    let sql = "select * from reconocimiento_pelicula order by id_reconocimiento_pelicula asc";
    
    con.connect(function(err){
        if (err){
            res.send(err);
        } else{
            con.query(sql, function(err, result){
                if(err){
                    res.send(err);
                }else{
                    res.send(result)
                }
            });
    
            }
    
    });
    
    });
    
app.post('/mvelazco/api/reconocimientopelicula', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "insert into reconocimiento_pelicula " + "(id_pelicula, id_reconocimiento) " + "values (?, ?)";
let parametros =[
req.body.id_pelicula,
req.body.id_reconocimiento
];

con.connect(function(err){
if (err){
    res.send(err);
} else{
    con.query(sql, parametros, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.send(result)
        }
    });

    }

});

});

app.put('/mvelazco/api/reconocimientopelicula/:id', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "update reconocimiento_pelicula set id_pelicula = ?," + "id_reconocimiento = ? " + "where id_reconocimiento_pelicula = ?";
let parametros =[
	req.body.id_pelicula,
	req.body.id_reconocimiento,
	req.params.id
];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }   
});

});

app.delete('/mvelazco/api/reconocimientopelicula/:id', (req, res)=>{
let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_mvelazco",
        password: "Hola12345$",
        database: "desfhyeb_mvelazco"
    });

let sql = "delete from reconocimiento_pelicula where id_reconocimiento_pelicula = ?";
let parametros =[req.params.id];

con.connect(function(err){
    if (err){
        res.send(err);
    } else{
        con.query(sql, parametros, function(err, result){
            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
        });

        }
    
});

});


app.listen();