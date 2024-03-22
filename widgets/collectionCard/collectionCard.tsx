import "./collectionCard.scss";
import LogoNFT from "@/components/logoNFT/logoNFT";
import ListNFT from "@/components/listNFT/listNFT";
const CollectionCard = ({ logoNFT, NFT_img1, NFT_img2, textBnt }) => {
  return (
    <div className="wrapper_collectionCard">
      <LogoNFT img={logoNFT} />
      <ListNFT img1={NFT_img1} img2={NFT_img2} btnText={textBnt} />
    </div>
  );
};

export default CollectionCard;
