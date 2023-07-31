import './footer.css';
import githubImage from '/images/github1.png';
import linkedinImagem from '/images/linkedin.png';

function Footer(){
  return (
    <footer className="foot">
      <div className='div-icon'>
        <a className = "icon-image" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img className ="icon-image" src={linkedinImagem} alt="LinkedIn" />
        </a>
    </div>
      <div className='div-icon'>
        <a className = "icon-image" href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img className ="icon-image" src={githubImage} alt="GitHub" />
          </a>
      </div>
      <div className="line"></div>
      <span className="info"> João Cláudio Ribeiro de Sousa</span>
  </footer>
  );
}

export default Footer;