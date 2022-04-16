import styles from "../styles/Formulario.module.css";
import Card from "../components/Card";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <EntradaNumerica
            text="Qtde Portas?"
            value={qtdePortas}
            onChange={(novaQtde) => setQtdePortas(novaQtde)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <EntradaNumerica
            text="Porta com Presente?"
            value={comPresente}
            onChange={(novaPortaComPresente) =>
              setComPresente(novaPortaComPresente)
            }
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
