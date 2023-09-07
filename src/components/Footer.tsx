import logo from "../assets/ntwistlight.png";
import { AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai";
export const Footer = () => {
  return (
    <section className="flex flex-col items-center gap-7 p-10 bg-[var(--footer-color)]">
      <img className=" w-40 h-auto" src={logo} alt="NTWIST" />
      <ul className="text-white flex flex-row flex-wrap justify-around gap-3">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Site Map</a>
        </li>
      </ul>
      <p className="text-stone-400">
        9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
      </p>
      <div className="flex flex-row invert">
        <AiFillTwitterSquare size={30} />
        <AiFillLinkedin size={30} />
      </div>
      <p className="text-stone-400">© 2022. Ntwist Inc.</p>
    </section>
  );
};
