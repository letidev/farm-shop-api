module.exports = {
  ssl: true,
  type: 'postgres',
  rejectUnauthorized: true,
  url: process.env.DATABASE_URL,
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  logging: 'all',
  ssl: {
    sslmode: 'require',
    rejectUnauthorized: false,
  },
};
