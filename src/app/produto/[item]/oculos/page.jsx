import Image from "next/image"
import '../../../components/ScssProdutos/produtos.scss'

export default function Oculos({params}) {
    return(
        <div className="container-prod">
             <div>
                <h1>ÔCULOS</h1>
                <h5>OS ÔCULOS MAIS BONITAS DA QUEBRADA VOCÊ SÓ ENCONTRA AQUI!</h5>
            </div>
            <ul>
                <li>
                    <Image src="/img/oculos.jpg" alt="oculos" width={350} height={400}/>
                    <p>Ôculos</p>
                    <p>R$299,00</p>
                    <p>Ôculos da oakley!</p>
                    <button>Esgotado.</button>
                </li>
            </ul>
        </div>
    )
}