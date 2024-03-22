"use client";
import "./footer.scss";
import Link from "@/node_modules/next/link";
import { ROUTER } from "@/router/router.enum";
import InputSubscribe from "@/widgets/inputSubscribe/inputSubscribe";
import { useRef, useEffect } from "react";
import anime from "animejs";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pageHeight = document.documentElement.scrollHeight;
  const block = useRef(null);
  let countAnim = 0;
  useEffect(() => {
    const handleScroll = () => {
      if (
        block.current &&
        window.scrollY + window.innerHeight >
          block.current.getBoundingClientRect().top + 5500 &&
        countAnim === 0
      ) {
        countAnim = 1;
        anime({
          targets: block.current,
          translateY: [pageHeight, 0],
          delay: anime.stagger(100),
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const router = usePathname();
  return (
    <div className="container_footer">
      <div className="width_footer">
        <div className="wrapper_footer" ref={block}>
          <div className="container_navigation_footer">
            <div className="main_navigation_footer">
              <p className="main_footer">Explore</p>
            </div>
            <div className="navigation_footer">
              <Link href={ROUTER.MARKETPLACE}>
                <p
                  className={`link_footer ${
                    router == ROUTER.MARKETPLACE ? "active" : ""
                  }`}
                >
                  Marketplace
                </p>
              </Link>
              <Link href={ROUTER.RANKINGS}>
                <p
                  className={`link_footer ${
                    router == ROUTER.RANKINGS ? "active" : ""
                  }`}
                >
                  Rankings
                </p>
              </Link>
              <Link href={ROUTER.CONNECT}>
                <p
                  className={`link_footer ${
                    router == ROUTER.CONNECT ? "active" : ""
                  }`}
                >
                  Connect a wallet
                </p>
              </Link>
            </div>
          </div>
          <div className="container_input_footer">
            <div className="text_input_footer">
              <p className="main_footer">Join our weekly digest</p>
              <p className="deck_footer">
                Get exclusive promotions & updates straight to your inbox.
              </p>
            </div>
            <InputSubscribe classBtn={"Noimginput"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
