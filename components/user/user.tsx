import Animakid from "@/img/Animakid.svg";
import Image from "next/image";
import "./user.scss";
import NftName from "../nftName/nftName";
const User = ({ userWork, UserName, UserImg }) => {
  return (
    <>
      <div className="user_wrapper">
				<NftName>{userWork}</NftName>
        <div className="wrapper_text_botton">
          <Image className="img_animakid" src={UserImg} alt="" />
          <p className="text_animakid">{UserName}</p>
        </div>
      </div>
    </>
  );
};

export default User;
