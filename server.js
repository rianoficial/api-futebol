
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    nome: "API Futebol",
    status: "online",
    endpoints: [
      "/jogos/hoje",
      "/jogos/ao-vivo",
      "/jogos/proximos"
    ],
    aviso: "Conecte uma fonte de dados reais para listar partidas."
  });
});

app.get("/jogos/hoje", (req, res) => {
  res.json({ jogos: [], mensagem: "Fonte de dados ainda não conectada." });
});

app.get("/jogos/ao-vivo", (req, res) => {
  res.json({ jogos: [], mensagem: "Fonte de dados ainda não conectada." });
});

app.get("/jogos/proximos", (req, res) => {
  res.json({ jogos: [], mensagem: "Fonte de dados ainda não conectada." });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API rodando na porta ${PORT}`);
});
