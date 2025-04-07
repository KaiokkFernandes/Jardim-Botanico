// src/pages/PlantPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QrCodeGenerator from "../components/QrCodeGenerator";

function PlantPage() {
  const { index } = useParams();  // "index" é o que definimos em /planta/:index
  const [exposicao, setExposicao] = useState([]);
  const [planta, setPlanta] = useState(null);

  // 1) Carrega o data.json para ter acesso ao array completo
  useEffect(() => {
    fetch("/Data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setExposicao(data.exposicao);
      })
      .catch((error) => console.error(error));
  }, []);

  // 2) Quando o array for carregado, pegamos o item pela posição [index]
  useEffect(() => {
    if (exposicao.length > 0) {
      setPlanta(exposicao[index]);
    }
  }, [exposicao, index]);

  // Se ainda não carregou, exibe algo temporário
  if (!planta) {
    return <div>Carregando...</div>;
  }

  // Montamos o caminho da imagem. 
  // Exemplo: se "nome_comum" = "Amanita-muscaria"
  // e no disco a imagem está como "Amanita_muscaria.jpg",
  // podemos substituir hífens por underscores:
  const imageName = planta.nome_comum.replace(/-/g, "_") + ".jpg";
  const imageUrl = `/imagens/${imageName}`;

  // Valor do QR Code. Pode ser a URL atual, ou uma URL fixa, etc.
  const currentUrl = window.location.href;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>
        {planta.nome_comum} ({planta.nome_cientifico})
      </h2>
      
      <img 
        src={imageUrl} 
        alt={planta.nome_comum} 
        style={{ maxWidth: "300px", display: "block", margin: "1rem 0" }}
      />

      <p><strong>Categoria:</strong> {planta.categoria}</p>
      <p>{planta.descricao}</p>
      <p><strong>Habitat:</strong> {planta.habitat}</p>
      
      {planta.curiosidades && planta.curiosidades.length > 0 && (
        <div>
          <h3>Curiosidades:</h3>
          <ul>
            {planta.curiosidades.map((curiosidade, i) => (
              <li key={i}>{curiosidade}</li>
            ))}
          </ul>
        </div>
      )}

      {/* QR Code gerado dinamicamente */}
      <QrCodeGenerator value={currentUrl} />
    </div>
  );
}

export default PlantPage;
