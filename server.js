require('dotenv').config();
const app = require('./app');


const PORT = process.env.PORT || 3001;


console.log(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USER, process.env.DB_PASSWORD);


app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}/register`);
});

// http://interchange.proxy.rlwy.net:44188/register

//  http://mysql.railway.internal:3306/register
