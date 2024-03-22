"use client";
import "./browseCategories.scss";
import H from "@/components/h/h";
import ArrData from "@/data/home/browseCategories/json";
import CategoryCard from "@/widgets/categoryCard/categoryCard";
import { useRef, useEffect } from "react";
import anime from "animejs";
const BrowseCategories = () => {
  const pageWidthMin = -document.documentElement.scrollWidth;
  const block = useRef(null);
  let countAnim = 0;
  useEffect(() => {
    const handleScroll = () => {
      if (
        block.current &&
        window.scrollY + window.innerHeight >
          block.current.getBoundingClientRect().top + 2500 &&
        countAnim === 0
      ) {
        countAnim = 1;
        anime({
          targets: block.current,
          translateX: [pageWidthMin, 0],
          delay: anime.stagger(100),
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container_browseCategories">
      <div className="wrapper_browseCategories">
        <div className="wrapper_nameSection" ref={block}>
          <H classH="h3">Browse Categories</H>
        </div>
        <div className="wrapp_CategoryCard">
          {ArrData.categories.map((item) => (
            <div>
              <CategoryCard
                img={item.img}
                icon={item.icon}
                categories_name={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseCategories;
