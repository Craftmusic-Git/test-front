import ConnectLogo from "@/components/logos/Connect-logo";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <button type="button"
            onClick={() => signIn()}
            className="group flex flex-shrink-0 w-12 h-12 justify-center items-center border-4 border-blue-800 hover:bg-blue-800 transition-colors rounded-lg">
      <ConnectLogo className="w-8 h-8 stroke-blue-800 group-hover:stroke-white" />
    </button>
  );
};

export default LoginButton;