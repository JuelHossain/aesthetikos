import { Badge } from "@mantine/core";
import moment from "moment/moment";

export default function CreatedTime({ createdAt }) {
  return (
    <Badge size="xs" className="text-[10px] mt-2 mr-2 absolute top-0 right-0">
      {moment(createdAt).startOf("hour").fromNow()}
    </Badge>
  );
}
