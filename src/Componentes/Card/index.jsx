export default function Card({ dados }) {

    return (
        <>
            {
                dados.map((pegaDados, index) => (
                    <div
                        class="skill-card"
                        key={index}
                        style={
                            {
                                backgroundColor: pegaDados.color
                            }
                        }>
                        <h3>Titulo: {pegaDados.titulo}</h3>
                        <p>Nível: {pegaDados.nivel}</p>
                        <p>Tempo de xp: {pegaDados.tempoxp}</p>
                        <a href={pegaDados.link}>{pegaDados.textoLink}</a>
                    </div>
                ))
            }

        </>
    )
}