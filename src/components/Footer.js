import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Explorify</h1>
          <p>Choose your fav Destination</p>
        </div>
        <div>
          <a href="/">
            <i class="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>project</h4>
          <a href="/">Chanelog</a>
          <a href="/">status</a>
          <a href="/">licens</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Issues</a>
          <a href="/">projects</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Issues</a>
          <a href="/">projects</a>
          <a href="/">Twitter</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
