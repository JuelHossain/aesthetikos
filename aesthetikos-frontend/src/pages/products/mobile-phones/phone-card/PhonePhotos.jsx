import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function PhonePhotos({ imageLinks }) {
  const slides = imageLinks?.map((image) => (
    <Carousel.Slide key={image}>
      <PhotoView src={image}>
        <Image src={image} height={220} />
      </PhotoView>
    </Carousel.Slide>
  ));
  return (
    <PhotoProvider>
      <Carousel withIndicators loop>
        {slides}
      </Carousel>
    </PhotoProvider>
  );
}
