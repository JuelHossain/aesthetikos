import { Paper } from "@mantine/core";
import Logo from "../../../components/shared/Logo";

export default function Wrapper({ content, children, extra }) {
  return (
    <Paper
      radius="xl"
      className="flex  flex-col-reverse sm:flex-row justify-center overflow-hidden bg-sec-6/5 flex-1 p-4 sm:p-8 gap-4 relative "
    >
      <div
        className={`flex-1  justify-center items-center flex bg-sec-2 rounded-[50px] p-3 sm:p-6 relative overflow-hidden z-10 ${
          !content && "hidden sm:flex"
        } ${extra}`}
      >
        {content || <Logo path="fill-main-6" className="p-40 opacity-50" />}
      </div>
      {children}
      {/* <Logo className="opacity-5 max-w-lg absolute bottom-0 rotate-[-35deg] z-0 right-0 " path="fill-main-6" /> */}
    </Paper>
  );
}
