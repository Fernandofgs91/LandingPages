function PerguntaResposta({pergunta, resposta}) {
    return (
        <>
            <details>
                <summary>{pergunta}</summary>
                <p>{resposta}</p>
            </details>
        </>
    );
}

export default PerguntaResposta;