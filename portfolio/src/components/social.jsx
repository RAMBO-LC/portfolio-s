import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Social.css";
export default function Social() {
  return (
    <>
      <div className="social-box">
        <a href="https://github.com/RAMBO-LC/">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/raj-ambolikar-9734b4326/">
          <FaLinkedin />
        </a>
        <a href="https://x.com/CodeRambo15238">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/rambo.1.07/">
          <FaInstagram />
        </a>
      </div>
    </>
  );
}
