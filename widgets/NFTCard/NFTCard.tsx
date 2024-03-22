import Image from "next/image";
import "./NFTCard.scss";
import User from "@/components/user/user";
const NFTCard = ({
  nft_img,
  nft_name,
  user_name,
  user_avatar,
  prise,
  highestBid,
  background,
}) => {
  return (
    <>
      <Image className="NFTCard_img" src={nft_img} alt="" />
      <div className={`wrapper_NFTCard_text ${background}`}>
        <User userWork={nft_name} UserName={user_name} UserImg={user_avatar} />
        <div className="wrapper_NFTCard_prise">
          <div className="NFTCard_prise">
            <p className="NFTCard_prise_text">Prise</p>
            <p className="NFTCard_values">{prise} ETH</p>
          </div>
          <div className="NFTCard_prise">
            <p className="NFTCard_prise_text">Highest Bid</p>
            <p className="NFTCard_values">{highestBid} wETH</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTCard;
