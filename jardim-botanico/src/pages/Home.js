// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [exposicao, setExposicao] = useState([]);

  useEffect(() => {
    fetch("/Data/data.json")            // <-- Lê do public/Data/data.json
      .then((response) => response.json())
      .then((data) => {
        // data.exposicao é o array dentro do seu JSON
        setExposicao(data.exposicao);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao Jardim Botânico</h1>
      <ul>
        {exposicao.map((item, index) => (
          <li key={index}>
            {/*
              Link para /planta/0, /planta/1, etc.
              Pode usar nome_comum em vez de index, se preferir,
              mas nesse exemplo vamos usar index.
            */}
            <Link to={`/planta/${index}`}>{item.nome_comum}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
