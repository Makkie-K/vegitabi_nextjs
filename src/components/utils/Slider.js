import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）

export default function Slider() {
  return (
    <>
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: false, // 自動再生を有効
          interval: 3000, // 自動再生の間隔を3秒に設定
          type: "loop",
        }}
      >
        <SplideSlide>
          <img
            className="slide-img"
            src="https://www.vegitabi.com/images/posts/1/2.webp"
            alt="vegitabi1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="slide-img"
            src="https://www.vegitabi.com/images/posts/1/2.webp"
            alt="vegitabi2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="slide-img"
            src="https://www.vegitabi.com/images/posts/1/3.webp"
            alt="vegitabi3"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="slide-img"
            src="https://www.vegitabi.com/images/posts/1/4.webp"
            alt="vegitabi4"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="slide-img"
            src="https://www.vegitabi.com/images/posts/1/5.webp"
            alt="vegitabi5"
          />
        </SplideSlide>
      </Splide>

      {/* 画像の高さを揃えて表示させるために以下スタイルを適用 */}
      <style jsx>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
}
