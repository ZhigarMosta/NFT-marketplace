"use client";
import Input from "@/components/input/input";
import "./create.scss";
import logo from "@/img/create/logo.png";
import Btn from "@/components/btn/btn";
import Image from "next/image";
import H from "@/components/h/h";
import userIcon from "@/img/create/icon1.svg";
import emaiIicon from "@/img/create/icon2.svg";
import passwordIcon from "@/img/create/icon3.svg";
import { useRef, useEffect } from "react";
import anime from "animejs";
export default function Create() {
  const pageWidthMin = document.documentElement.scrollWidth;
  const pageHeight = -document.documentElement.scrollHeight;
  const block = useRef([]);
  const Img = useRef(null);
  useEffect(() => {
    anime({
      targets: block.current,
      translateX: [pageWidthMin, 0],
      delay: anime.stagger(100),
    });
    anime({
      targets: Img.current,
      translateY: [pageHeight, 0],
      easing: "easeInOutExpo",
      delay: anime.stagger(100),
    });
  }, []);
  return (
    <>
      <div className="containerCreate">
        <div className="wrapperCreate">
          <div className="imgCreare" ref={Img}>
            <Image src={logo} alt="" />
          </div>
          <div className="wrapperRightSide">
            <div
              className="textBlockCreate"
              ref={(el) => (block.current[0] = el)}
            >
              <H classH={"h2"}>Create account</H>
              <H classH={"h4"}>
                Welcome! enter your details and start creating, collecting and
                selling NFTs.
              </H>
            </div>
            <form className="containerInputBtn">
              <div className="wrapper_input_create">
                <div ref={(el) => (block.current[1] = el)}>
                  <Input
                    placeholder={"User name"}
                    img={userIcon}
                    type={"text"}
                    typeClass={"light"}
                  />
                </div>
                <div ref={(el) => (block.current[2] = el)}>
                  <Input
                    placeholder={"Email Address"}
                    img={emaiIicon}
                    type={"email"}
                    typeClass={"light"}
                  />
                </div>
                <div ref={(el) => (block.current[3] = el)}>
                  <Input
                    placeholder={"Password"}
                    img={passwordIcon}
                    type={"password"}
                    typeClass={"light"}
                  />
                </div>
                <div ref={(el) => (block.current[4] = el)}>
                  <Input
                    placeholder={"Confirm Password"}
                    img={passwordIcon}
                    type={"password"}
                    typeClass={"light"}
                  />
                </div>
              </div>
              <div ref={(el) => (block.current[5] = el)}>
                <Btn text={"Create account"} classBtn={"longBtn"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
