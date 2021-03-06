const jwt = require('jsonwebtoken');

//==================
// VERIFICA ADMINROL
//==================
let verificaAdmin_Role = (req, res, next) =>
{
  let usuario = req.usuario;

  if (usuario.role === 'ADMIN_ROLE')
  {
    next();
  }
  else
  {
    return res.json({
      ok: false,
      err:
      {
        message: 'el usuario no es administrador'
      }
    });
  }
};

//==================
//  VERIFICAR TOKEN
//==================

let verificaToken = (req, res, next) =>
{
  let token = req.get('token');

  jwt.verify(token, process.env.SEED, (err, decoded) =>
  {
     if (err)
     {
       return res.status(401).json(
         {
           ok: false,
           err:
           {
             message: 'token no válido'
           }
         });
     }
     req.usuario = decoded.usuario;
     next();
  });
};

module.exports = {
  verificaToken,
  verificaAdmin_Role
}
