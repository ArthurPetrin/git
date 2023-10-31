import { Link } from 'react-router-dom';
//importando o o componente para ser estilizando
import { NavDiv } from '../css/nav';

function Nav() {
  return (
    // abertura do componente de estilização
    <NavDiv>
      <header className="header">
        <nav className="headerMenu">
          <ul>
            <Link to="/" className="tlink">
              Home
            </Link>{' '}
            {''}
            <Link to="/escola" className="tlink">
              Escola
            </Link>
            <Link to="/listarAlunos" className="tlink">
              Listar Alunos
            </Link>
          </ul>
        </nav>
      </header>
    </NavDiv>
    //fechamento do componente de estilização
  );
}
export default Nav;
