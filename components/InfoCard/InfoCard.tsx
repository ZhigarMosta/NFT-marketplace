import Image from "next/image";
import "./infoCard.scss";
const InfoCard = ({ img, text, deck }) => {
  return (
    <div className="wrapper_infoCard">
      <Image src={img} alt="" />
      <div className="wrapper_text_infoCard">
        <p className="text_infoCard">{text}</p>
        <p className="deck_infoCard">{deck}</p>
      </div>
    </div>
  );
};

export default InfoCard;
