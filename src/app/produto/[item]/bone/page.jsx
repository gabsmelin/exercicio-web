import Image from "next/image"
import Link from "next/link"

export default function Bone({params}) {
    return(
        <div>
            <div>
                <h1>BONÉ {params.Bone}</h1>
                <h5>AS BONÉ MAIS BONITAS DA QUEBRADA VOCÊ SÓ ENCONTRA AQUI!</h5>
            </div>
            <ul>
                <li>
                    <Image src="/img/bone1.avif" alt="Boné." width={350} height={350}/>
                    <p>Boné</p>
                    <p>R$199,00</p>
                    <p>Boné da nike na cor branca com logo preta.</p>
                    <button>Esgotado.</button>
                </li>
            </ul>
        </div>
    )
}