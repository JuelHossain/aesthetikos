import { ActionIcon, ScrollArea, Table, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { IconMoodSmile, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function DataTable({ data }) {
  const [selection, setSelection] = useState([]);
  const props = { ...data, selection, setSelection };

  const removeAll = () => {
    openConfirmModal({
      title: "This is a Delete Button",
      children: (
        <Text>
          hence this button will delete all the selected item that's why i am not making this button functional yet. i
          don't want to delete all of my phones yet.
        </Text>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onConfirm: () => showNotification({ title: "nice try, ha ha", icon: <IconMoodSmile /> }),
    });
  };

  return (
    <ScrollArea className="flex-1 ">
      <div className=" bg-sec-1 rounded-[40px] p-4 sm:p-8 h-full">
        <Table sx={{ minWidth: 500 }} verticalSpacing="sm" highlightOnHover className="bg-white rounded-2xl h-full">
          <TableHead {...props} />
          <TableBody {...props} />
        </Table>
        {selection.length > 0 && (
          <ActionIcon size="sm" variant="filled" color="red" className=" absolute top-4 right-4" onClick={removeAll}>
            <IconTrash size={18} />
          </ActionIcon>
        )}
      </div>
    </ScrollArea>
  );
}
