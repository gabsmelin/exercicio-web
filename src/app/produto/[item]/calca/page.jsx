import Image from "next/image"
import '../../../components/ScssProdutos/produtos.scss'

export default function Calca({params}) {


    return(
        <div className="container-prod">
            <div>
                <h1>CALÇAS</h1>
                <h5>AS CALÇAS MAIS BONITAS DA QUEBRADA VOCÊ SÓ ENCONTRA AQUI!</h5>
            </div>
            <ul>
                <li>
                    <Image src="/img/calca.png" alt="Calça cargo verde." width={350} height={400}/>
                    <p>Calça Cargo</p>
                    <p>R$100,00</p>
                    <p>Calça Cargo na cor verde lodo, estica na cintura e é super confortavel.</p>
                    <button>Esgotado.</button>
                </li>
            </ul>
        </div>
    )
}