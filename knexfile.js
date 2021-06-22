module.exports = {
    development: {
        client: "pg",
        connection: "postgres:///games-collection"
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL
    }
};
