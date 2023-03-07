import { Button, Group, Text, Title } from "@mantine/core";
import moment from "moment";
import { Link } from "react-router-dom";

export default function AdPreview({ product }) {
  const { imageLinks, productName, subCategory, adWillEnd, description } = product || {};

  return (
    <div className="max-w-screen-xl mt-10 sm:mt-20 mx-auto ">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 sm:gap-8 bg-main-2  rounded-3xl">
        <div className="flex-1 rounded-3xl p-5 sm:p-10 space-y-5">
          <Title className="">Your Ad Will End {moment(adWillEnd).endOf().fromNow()}</Title>
          <Text weight={500} size="lg" mb={5}>
            {`${productName} ${subCategory}`}
          </Text>
          <Text size="sm">{description}</Text>
          <Group>
            <Button component={Link} to="/#ad" variant="light">
              See Your Ad live On home page
            </Button>
            <Button component={Link} to="/dashboard/manage-ads" className="">
              Manage Your Ads
            </Button>
          </Group>
        </div>
        <div className="flex-1">
          <img
            src={imageLinks[0]}
            alt=""
            className="w-full h-full  max-lg:rounded-b-3xl lg:rounded-r-3xl max-h-[50vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
