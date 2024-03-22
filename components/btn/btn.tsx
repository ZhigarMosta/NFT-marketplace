import Image from "@/node_modules/next/image";
import "./btn.scss";
const Btn = ({ text, img, classBtn }) => {
  return (
    <>
      <button className={classBtn}>
        <Image className="btn_img" src={img} alt="" />
        <p className="btn_text">{text}</p>
      </button>
    </>
  );
};

export default Btn;
