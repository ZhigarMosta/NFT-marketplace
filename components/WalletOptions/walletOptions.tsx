import Image from "next/image";
import "./walletOptions.scss";
const WalletOptions = ({ img, text }) => {
  return (
    <button className="wrapper_WalletOptions">
      <Image src={img} alt="" />
      <p className="name_wrapper_WalletOptions">{text}</p>
    </button>
  );
};

export default WalletOptions;
