import { Paper, SimpleGrid, Stack } from "@mantine/core";
import { useProfileContext } from "./profileContext";

import Logo from "../../components/shared/Logo";
import Wrapper from "../../pages/dashboard/shared/Wrapper";
import Address from "./inputs/Address";
import DisplayName from "./inputs/DisplayName";
import Email from "./inputs/Email";
import PhoneNumber from "./inputs/PhoneNumber";
import PhotoUrl from "./inputs/PhotoUrl";
import Role from "./inputs/Role";
import SubmitButton from "./inputs/SubmitButton";

export default function ProfileForm() {
  const { submitHandler } = useProfileContext();
  return (
    <Wrapper extra="hidden">
      <Paper
        onSubmit={submitHandler}
        component="form"
        className="max-w-3xl flex flex-col justify-center gap-4 w-full p-6 items-start relative  bg-white overflow-hidden  rounded-[40px] "
      >
        <div className="w-full z-10">
          <Role />
          <Stack>
            <PhotoUrl />
            <DisplayName />
          </Stack>

          <SimpleGrid className="w-full xs:grid-cols-2">
            <Email />
            <PhoneNumber />
          </SimpleGrid>
          <Address />
          <SubmitButton />
        </div>
        <Logo className="opacity-5 max-w-lg absolute bottom-0 rotate-[-35deg] z-0 right-0 " path="fill-main-6" />
      </Paper>
    </Wrapper>
  );
}
