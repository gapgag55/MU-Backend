var admin = require('firebase-admin');
var serviceAccount = require('../config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mubackend-a6782.firebaseio.com"
});

export const database = admin.database();