import { Button } from "@mui/material";
import "./Contactformstyle.css";
function Contactform() {
  return (
    <div className="form-container">
      <h1>Reach Out to Our Team</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone number" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message " rows={4}></textarea>
        <button> Send Message</button>
      </form>
    </div>
  );
}
export default Contactform;
