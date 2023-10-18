import Image from "next/image"
import '../../../components/ScssProdutos/produtos.scss'

export default function Bone({params}) {
    return(
        <div className="container-prod">
            <div>
                <h1>BONÉ</h1>
                <h5>AS BONÉ MAIS BONITAS DA QUEBRADA VOCÊ SÓ ENCONTRA AQUI!</h5>
            </div>
            <ul>
                <li>
                    <Image src="/img/bone.jpg" alt="Boné." width={350} height={350}/>
                    <p>Boné</p>
                    <p>R$199,00</p>
                    <p>Boné da nike na cor branca com logo preta.</p>
                    <button>Esgotado.</button>
                </li>
            </ul>
        </div>
    )
}