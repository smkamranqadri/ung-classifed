let config = {
    jwtSecret: 'superdupersecretofREI',
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/classified',
    port: process.env.PORT || 8000,
};

export default config
