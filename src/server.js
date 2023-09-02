// Importação das dependências necessárias
import express from "express";
// import { router } from "./routes";

// Instanciação do servidor
const app = express();

// Configurações da aplicação
const PORT = process.env.PORT || 3000;

// Configuração do express para lidar com JSON
app.use(express.json());
// app.use(router);

// Rota inicial
app.get("/", (req, res) => {
    res.status(200).send("Olá, mundo!");
})

// Inicialização do servidor
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));