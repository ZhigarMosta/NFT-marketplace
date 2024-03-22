import Image from "next/image";
import "./logoNFT.scss";
const LogoNFT = ({ img }) => {
  return <Image className="logoNFT" src={img} alt="" />;
};

export default LogoNFT;
