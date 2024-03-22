"use client";
import React, { useRef, useEffect } from "react";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import logoHeafer from "@/img/headerSection/Storefront.svg";
import { ROUTER } from "@/router/router.enum";
import "./header.scss";
import Btn from "../../components/btn/btn";
import anime from "animejs";
import { usePathname } from "next/navigation";

const Header = ({ text, img }) => {
  const headerRef = useRef(null);
  useEffect(() => {
    anime({
      targets: headerRef.current,
      translateY: [-100, 0],
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, []);
  const router = usePathname();
  return (
    <>
      <header ref={headerRef}>
        <input id="menu-toggle" type="checkbox" />
        <div className="head">
          <div className="wrapper_header">
            <div className="container_logo">
              <Link href={ROUTER.HOME}>
                <div className="logoHeader">
                  <Image src={logoHeafer} alt="" />
                  <p
                    className={`logoTextHeder textLink ${
                      router == ROUTER.HOME ? "active" : ""
                    }`}
                  >
                    NFT Marketplace
                  </p>
                </div>
              </Link>
            </div>
            <label className="menu-button-container" htmlFor="menu-toggle">
              <div className="menu-button"></div>
            </label>
            <div className="menu wrapper_link">
              <Link href={ROUTER.MARKETPLACE} className="link">
                <p
                  className={`link textLink textNavigate ${
                    router == ROUTER.MARKETPLACE ? "active" : ""
                  }`}
                >
                  Marketplace
                </p>
              </Link>
              <Link href={ROUTER.RANKINGS} className="link">
                <p
                  className={`link textLink textNavigate ${
                    router == ROUTER.RANKINGS ? "active" : ""
                  }`}
                >
                  Rankings
                </p>
              </Link>
              <Link href={ROUTER.CONNECT} className="link">
                <p
                  className={`link textLink textNavigate ${
                    router == ROUTER.CONNECT ? "active" : ""
                  }`}
                >
                  Connect a wallet
                </p>
              </Link>
              <Link href={ROUTER.CREATE} className="link">
                <Btn img={img} text={text} classBtn={"btn_singUp"} />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
