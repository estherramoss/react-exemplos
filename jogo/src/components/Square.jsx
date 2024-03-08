import React from "react";

//Componente funcional Square, representa um quadrado no tabuleiro
function Square({ value, onClick }) {
    return (
        //botão que exibe o valor do quadrado e chama a função onClixk ao ser clicado
        <button className="square" onClick={onClick}>
        {value} 
        </button>
    );
}

// Exporta o componente Square como padrão
export default Square;