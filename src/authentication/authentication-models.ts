const User = require('../models/User');
const  jwt  =  require('jsonwebtoken');
const  bcrypt  =  require('bcryptjs');
const validateRegisterInput=require('../validation/register')
const validateLoginInput = require('../validation/login');

let infoClient = {};
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

export async function authenticationLogin(req: any, res: any) {
        // const token = req.headers.authorization.split(" ")[1]
        // console.log(token)    por si lo quiero leer del headers el token, enviarlo en authorization typo bearer en vez de boy o prarams
        const { errors, isValid } = validateLoginInput(req.body);
        if(!isValid) {
            return res.status(400).json(errors);
        }
        
        const email = req.body.email;
        const password = req.body.password;
        await  User.findOne({email})
            .then((user:any) => {
                if(!user) {
                    errors.email = 'Userio no encontrado'
                    return res.status(404).json(errors);
                }
                
                bcrypt.compare(password, user.password)
                        .then((isMatch:boolean) => {
                            if(isMatch) {
                                const payload = {
                                    id: user._id,
                                    email: user.email,
                                    password: user.password
                                }
                                jwt.sign(payload, 'asasas', {
                                    expiresIn: 60
                                }, ( err:any, token:any) => {
                                    if(err) console.error('hubo un problema en el token', err);
                                    else {
                                        res.json({
                                            success: true,
                                            token: `Bearer ${token}`
                                        });
                                    }
                                });
                            }
                            else {
                                errors.password = 'Incorrecta Password';
                                return res.status(401).json(errors);
                            }
                        });
            });

    //return res.json({'marco':1211113});
}


export async function authenticationRegister(req: any, res: any) {
    
        const { errors, EsValido } = validateRegisterInput(req.body);
        if(!EsValido) {
            return res.status(400).json(errors);
        }
       User.findOne({
           email: req.body.email
       }).then((user:any) => {
           if(user) {
               return res.status(400).json({
                   email: 'Email ya existe'
               });
           }
           else {
               const newUser = new User({
                   nombre: req.body.nombre,
                   email: req.body.email,
                   password: req.body.password
               });
   
               bcrypt.genSalt(10, (err:any, salt:any) => {
                   if(err) console.error('hubo un error', err);
                   else {
                       bcrypt.hash(newUser.password, salt, (err:any, hash:any) => {
                           if(err) console.error('hubo un error', err);
                           else {
                               newUser.password = hash;
                               newUser
                                   .save()
                                   .then((user:any) => {
                                       res.json(user)
                                   });
                           }
                       });
                   }
               });
           }
       });
   
}

export async function authenticationMe(req: any, res: any) {
    console.log('verEmail',req.body)
        const token = req.headers.authorization.split(" ")[1]
           if (! token) {
                return res.status (401) .json ({mensaje: 'Debe pasar el token'});
                }
                
           jwt.verify (token,'asasas', function (err:any, decifradoToken:any) { //el token trae datos usuario
            console.log('paso el token!',decifradoToken)
             if(err){  //al almacenar en front end el tiempo pregunta en backend y jwt.verify lanza error de expired no hacer nada mas
                if(err.message==='jwt expired'){console.log('tiempo expirado de jwt')}
                res.status(500).json('errorcillo raro')
             }else{
                 User.findById ( decifradoToken.id, function (err:any, usuario:any) {
                 if (err) throw err;
                 console.log(usuario);
                 return res.status(200).send(usuario);
             })
            }
          })
}

export async function authenticationGame(req: any, res: any) {
    console.log('verEmail',req.body)
        const token = req.headers.authorization.split(" ")[1]
           if (! token) {
                return res.status (401) .json ({mensaje: 'Debe pasar el token'});
                }
                
           jwt.verify (token,'asasas', function (err:any, decifradoToken:any) { //el token trae datos usuario
            console.log('paso el token!',decifradoToken)
             if(err){  //al almacenar en front end el tiempo pregunta en backend y jwt.verify lanza error de expired no hacer nada mas
                if(err.message==='jwt expired'){console.log('tiempo expirado de jwt')}
                res.status(500).json('No acceso por expiracion!')
             }else{
                 User.findById ( decifradoToken.id, function (err:any, usuario:any) {
                 if (err) throw err;
                 console.log(usuario);
                 return res.status(200).send('juego 3 de 6 para '+usuario);
             })
            }
          })
}