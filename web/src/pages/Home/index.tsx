import React from 'react'

// Libs
import { Link } from 'react-router-dom'

// Styles
import './styles.css'
import { FiLogIn } from 'react-icons/fi'

// Assets
import Logo from '../../assets/logo.svg'

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={Logo} alt="Logo Ecoleta" />
                </header>
                <main>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>
                            Cadastre um ponto de coleta
                        </strong>
                    </Link>
                </main>
            </div>  
        </div>
    )
}

export default Home