import "./inputSubscribe.scss";
import Btn from "@/components/btn/btn";
const InputSubscribe = ({ img, classBtn }) => {
  return (
    <form className="wrapper_inputSubscribe">
      <input
        className="inputSubscribe"
        type="email"
        placeholder="Enter your email here"
      />
      <div className="Btn_inputSubscribe">
        <Btn
          img={img}
          text={"Subscribe"}
          classBtn={`btn_in_input ${classBtn}`}
        />
      </div>
    </form>
  );
};

export default InputSubscribe;
