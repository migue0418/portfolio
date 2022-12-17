import 'src/assets/PortfolioImageText.css'

function PortfolioImageText(props) {
    return (
      <>
      <div className='portfolio-image-text'>
        <img src={props.img} alt={props.alt} />
        <h3>{props.title}</h3>
        <span className='text-description'>{props.description}</span>
      </div>
      </>
    );
  }
  
  export default PortfolioImageText;