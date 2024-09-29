import express from 'express';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const  __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));

app.get("/colors", (req, res) => {
    res.sendFile(path.join(__dirname, "colors.json"));
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});