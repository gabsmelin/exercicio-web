import Image from "next/image"

export default function Oculos() {
    return(
        <div>
             <div>
                <h1>ÔCULOS</h1>
                <h5>OS ÔCULOS MAIS BONITAS DA QUEBRADA VOCÊ SÓ ENCONTRA AQUI!</h5>
            </div>
            <ul>
                <li>
                    <Image src="/img/oculos1.jpg" alt="oculos" width={350} height={400}/>
                    <p>Ôculos</p>
                    <p>R$299,00</p>
                    <p>Ôculos da oakley!</p>
                    <button>Esgotado.</button>
                </li>
            </ul>
        </div>
    )
}