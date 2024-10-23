import { Link } from "react-router-dom";

    export default function Nav() {
        return(
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Sobre'>Sobre</Link></li>
                    <li><Link to='/Produto'>Produto</Link></li>
                    <li><Link to='/Contato'>Contato</Link></li>
                   
                </ul>
            </nav>
        );
    }
