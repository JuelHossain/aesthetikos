import { Notification, Paper } from "@mantine/core";

export default function NotFound(props) {
  return (
    <Paper p={50} className="flex justify-center items-center w-full bg-sec-1 rounded-[40px] p-4 sm:p-8">
      <Notification
        classNames={{
          body: "bg-sec-2 p-4 rounded-2xl",
          description: "text-sec-9",
          root: "rounded-2xl bg-neu-0",
        }}
        withCloseButton={false}
        {...props}
      />
    </Paper>
  );
}
