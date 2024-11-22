const admin = require('./firebase');

const login = async (request, h) => {
  const { token } = request.payload;

  try {
    // Verifikasi token Firebase
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;

    return h.response({
      message: 'Login berhasil',
      uid,
    }).code(200);
  } catch (error) {
    return h.response({
      message: 'Token tidak valid',
      error: error.message,
    }).code(401);
  }
};

const createUser = async (request, h) => {
    const { email, password } = request.payload;
  
    try {
      const user = await admin.auth().createUser({
        email,
        password,
      });
  
      return h.response({
        message: 'User berhasil dibuat',
        userId: user.uid,
      }).code(201);
    } catch (error) {
      return h.response({
        message: 'Gagal membuat user',
        error: error.message,
      }).code(400);
    }
};

module.exports = { login, createUser };
