import Link from "next/link"

export const Nav = () => {
    return(
        <div className="esquerda">
        <nav className="nav">
        <div className="name-and-type">
            Alvaro Olazar 
            <br></br>
            Web Development
        </div>
        <div className="redes">
            <ul>
                <li>
                <i class="fa-brands fa-instagram"></i>
                    <text className="insta">Instagram</text>
                </li>
                <li>
                <i class="fa-brands fa-whatsapp"></i>
                    <text className="whats">Whatsapp</text>
                </li>
                <li>
                <i class="fa-brands fa-github"></i>
                    <text className="git">GitHub</text>
                </li>
            </ul>
        </div>
        </nav>
        <div className="container">
        <div className="card">
                <div className="img-i1">
                    <span>
                        <Link className="mens" href="/mens" style={{fontFamily:"Poppins', sans-serif"}}>Homens</Link> 
                    </span>
                </div>

                <div className="content">
                    <span className="title">Roupas masculinas</span>
                    <p className="desc">Produtos tecnologicos você encontra aqui, desde peças para computadores até periféricos</p>
                </div>

                <div className="arrow">
                    <i className="fa-solid fa-circle-chevron-down"></i>
                </div>
            </div>
            <div className="card">
                <div className="img-i2">
                    <span>
                        <Link className="womens" href="/womens" style={{fontFamily:"Poppins', sans-serif"}}>Mulheres</Link>
                    </span>
                </div>

                <div className="content">
                    <span className="title">Roupas femininas</span>
                    <p className="desc">Produtos tecnologicos você encontra aqui, desde peças para computadores até periféricos</p>
                </div>

                <div className="arrow">
                    <i className="fa-solid fa-circle-chevron-down"></i>
                </div>
            </div>

            <div className="card">
                <div className="img-i3">
                    <span>
                        <Link className="jewerely" href="/jewelery" style={{fontFamily:"Poppins', sans-serif"}}>Joias</Link>
                    </span>
                </div>

                <div className="content">
                    <span className="title">Anéis</span>
                    <p className="desc">Produtos tecnologicos você encontra aqui, desde peças para computadores até periféricos</p>
                </div>

                <div className="arrow">
                    <i className="fa-solid fa-circle-chevron-down"></i>
                </div>
            </div>

            <div className="card">
                <div className="img-i4">
                    <span>
                        <Link className="tecnologic" href="/tecnologic" style={{fontFamily:"Poppins', sans-serif"}}>Tecnologia</Link>
                    </span>
                </div>

                <div className="content">
                    <span className="title">Tecnologia</span>
                    <p className="desc">Produtos tecnologicos você encontra aqui, desde peças para computadores até periféricos</p>
                </div>

                <div className="arrow">
                    <i className="fa-solid fa-circle-chevron-down"></i>
                </div>
            </div>
        </div>
    </div>
    )
}