/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

//写真数をカウントしてスライドのsrcを生成
function generateSlides(id, length) {
  return Array.from({ length }).map((value, index) => {
    return {
      src: `/images/posts/${id}/${index + 1}.webp`,
      alt: `Image-${index + 1}`,
    };
  });
}

export default function Solider({ id, length }) {
  const slider1 = useRef();
  const slider2 = useRef();
  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);
  const slides = generateSlides(id, length);
  const mainOptions = {
    type: "loop",
    width: 513,
    height: 513,
  };
  const thumbsOptions = {
    type: "slide",
    rewind: true,
    pagination: false,
    width: 513,
    fixedWidth: 123,
    fixedHeight: 86,
    cover: true,
    isNavigation: true,
    // arrows: false,
    focus: "center",
  };

  return (
    <section id="postSlides">
      <Splide
        options={mainOptions}
        ref={(slider) => (slider1.current = slider)}
      >
        {slides.map((slide) => {
          return (
            <SplideSlide key={slide.src} css={bgColor}>
              <Image
                src={slide.src}
                alt={slide.alt}
                css={img}
                width={513}
                height={513}
              />
            </SplideSlide>
          );
        })}
      </Splide>
      <Splide
        options={thumbsOptions}
        ref={(slider) => (slider2.current = slider)}
        // css={thumbs}
      >
        {slides.map((slide) => {
          return (
            <SplideSlide key={slide.src}>
              <img src={slide.src} alt={slide.alt} />
              <Image
                src={slide.src}
                alt={slide.alt}
                css={img}
                width={123}
                height={86}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}

const container = css`
  display: flex;
`;

const img = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const bgColor = css`
  /* background-color: black; */
  background-color: rgba(220, 220, 220, 0.2);
`;

const thumbs = css`
  ul {
    flex-wrap: wrap;
  }
  li {
    border: 0px solid !important;
    margin-top: 6px;
    margin-right: 6px;
    opacity: 0.7;
  }
  li:nth-of-type(6n) {
    margin-right: 0;
  }
  li.is-active {
    opacity: 1;
  }
`;
