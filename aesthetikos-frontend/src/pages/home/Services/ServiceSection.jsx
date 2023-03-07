// all imports

import SectionTitle from "../../../components/sidebar/SectionTitle";
import ServiceCard from "./ServiceCard";

export default function ServiceSection({ title, data }) {
  const servicesElements = data?.map((item) => <ServiceCard key={data.title} {...item} />);

  return (
    <div className="my-5 sm:py-10 flex flex-col container mx-auto gap-10 sm:gap-20">
      <SectionTitle>{title}</SectionTitle>
      <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4 ">{servicesElements}</div>
    </div>
  );
}
