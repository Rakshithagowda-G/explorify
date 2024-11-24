import "./Herostyles.css";

function Hero(props) {
  return (
    <>
      <div className={props./*any variable van use*/ cName}>
        <img alt="Hero-image" src={props.heroimg} />
        <div className="hero-txt">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnclass}>
            {props.btntxt}
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;
