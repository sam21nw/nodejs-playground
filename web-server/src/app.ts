import path from "path";
import * as dotenv from 'dotenv';
import express from "express";

// console.log(__dirname);

// Load environment variables from .env file 
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const publicDirPath = path.join(__dirname, "../public");
console.log(publicDirPath);
app.use(express.static(publicDirPath));

// app.get('/weather', (req, res) => {
//     res.send('Weather page!');
// });

app.listen(PORT, () => {
    console.log(`Server is up and running! Open your browser and navigate to: http://localhost:${PORT}`);
});