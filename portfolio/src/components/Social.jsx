import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Hero.css";
export default function Social() {
  return (
    <>
      <div className="social-box">
        <a href="https://github.com/RAMBO-LC/" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/raj-ambolikar-9734b4326/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://x.com/CodeRambo15238" target="_blank">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/rambo.1.07/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://discord.com/users/1203988845633347639" target="_blank">
          <FaDiscord />
        </a>
      </div>
    </>
  );
}
