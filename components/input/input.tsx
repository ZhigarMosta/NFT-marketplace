import Image from "next/image";
import "./input.scss";
const Input = ({ img, placeholder, type, typeClass, func }) => {
  return (
    <div className={`wrapper_input-${typeClass}`}>
      <Image src={img} alt="" />
      <input
        className={`input-${typeClass}`}
        type={type}
        placeholder={placeholder}
        onChange={func}
      />
    </div>
  );
};

export default Input;
