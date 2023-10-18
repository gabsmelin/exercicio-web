import Image from "next/image"
import '../../../components/ScssProdutos/produtos.scss'

export default function Camisa({params}) {
    return(
        <div className="container-prod">
            <div>
                <h1>CAMISETAS</h1>
                <h5>AS CAMISETAS MAIS BONITAS DA QUEBRADA VOCÊ SÓ ENCONTRA AQUI!</h5>
            </div>
            <ul>
                <li>
                    <Image src="/img/camiseta1.png" alt="Camiseta." width={350} height={400}/>
                    <p>Camiseta   </p>
                    <p>R$79,99</p>
                    <p>Camiseta na cor branca, estampada.</p>
                    <button>Esgotado.</button>
                </li>
            </ul>
        </div>
    )
}