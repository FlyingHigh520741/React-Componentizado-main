import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "Node",
      nivel: "noob",
      tempoxp: "1 mes",
      color: "orange",
      link: "google.com",
      textoLink: "google"
    },
    {
      titulo: "CSS",
      nivel: "master",
      tempoxp: "10 anos",
      color: "green"
    },
    {
      titulo: "JAVA",
      nivel: "triste",
      tempoxp: "prefiro nao comentar",
      color: "red"
    }
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dados={habilidades} />

    </div>
  );
}

export default Skills;