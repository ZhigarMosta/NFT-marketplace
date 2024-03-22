import Image from "next/image";
import "./listNFT.scss";
import Btn from "../btn/btn";
const ListNFT = ({ img1, img2, btnText }) => {
  return (
    <div className="wrapper_listNFT">
      <Image className="listNFT" src={img1} alt="" />
      <Image className="listNFT" src={img2} alt="" />
      <Btn text={btnText} classBtn="listBtn"></Btn>
    </div>
  );
};

export default ListNFT;
