import { Divider } from "@mantine/core";
import { useAuthContext } from "../../context/authContext/authContext";
import Form from "./components/Form";
import SocialButtons from "./components/social-buttons/SocialButtons";

export default function AuthPage() {
  const { type } = useAuthContext();
  return (
    <div className="bg-main-1 p-4 rounded-3xl">
      <Form />
      {type === "login" && (
        <div className="bg-main-0 p-4 rounded-3xl mt-4">
          <Divider
            classNames={{ label: "text-sm font-semibold" }}
            label="Login With Your Socials"
            labelPosition="center"
            my="lg"
          />
          <SocialButtons />
        </div>
      )}
    </div>
  );
}
