// =========================
//          PUERTO
//==========================

process.env.PORT = process.env.PORT || 3000;

// =========================
  //       ENTORNO
//==========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =========================
  //  ENCIMIENTO DE TOKEN
//==========================
// 60s * 60m * 24h * 30d
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// =========================
  // SEED DE AUTENTICACION
//==========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// =========================
  //     BASE DE DATOS
//==========================

let urlDB;
 if (process.env.NODE_ENV === 'dev')
 {
   urlDB = 'mongodb://localhost:27017/cafe';
 }
 else
 {
  urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// =========================
  //  GOOGLE CLIENT ID
//==========================
process.env.CLIENT_ID = process.env.CLIENT_ID || ' 164138581252-6b1so9k54bai2s89c8ud7dm1o4hrpnhj.apps.googleusercontent.com';
