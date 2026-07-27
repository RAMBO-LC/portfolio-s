import "./social.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Social() {
  return (
    <>
      <div className="social-box">
        <a href="https://github.com/RAMBO-LC/">
          <FaGithub />
        </a>
        <a href="https://github.com/RAMBO-LC/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/rambo.1.07/">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/rambo.1.07/">
          <FaInstagram />
        </a>
      </div>
    </>
  );
}
