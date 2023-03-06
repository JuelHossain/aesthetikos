import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function ProductPhotos({ imageLinks }) {
  const slides = imageLinks?.map((image) => (
    <Carousel.Slide key={image}>
      <PhotoView src={image}>
        <Image src={image} height={220} />
      </PhotoView>
    </Carousel.Slide>
  ));
  return (
    <div className="rounded-[33px] overflow-hidden">
      {imageLinks && imageLinks.length > 0 ? (
        <PhotoProvider>
          <Carousel withIndicators loop>
            {slides}
          </Carousel>
        </PhotoProvider>
      ) : (
        <div className=" w-full h-44 bg-neu-3 flex justify-center items-center tracking-widest text-3xl text-sec-0">
          <p>200 x 160</p>
        </div>
      )}
    </div>
  );
}
