import { LoadingOverlay } from "@mantine/core";

export default function Loading({ visible, ...props }) {
  return (
    visible && (
      <div className="h-screen w-screen relative bg-transparent">
        <LoadingOverlay visible {...props} overlayBlur={2} />
      </div>
    )
  );
}
