"use client";

import { signInWithProvider } from "@/app/actions/auth";
import { Button } from "@heroui/react";

interface Props {
  onShowCredentials: () => void;
}

export const AuthButtons = ({ onShowCredentials }: Props) => {
  const handleProviderSignIn = async (provider: string) => {
    await signInWithProvider(provider);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Button
        fullWidth
        variant="bordered"
        size="lg"
        startContent={
          <i
            className="icon-[logos--google-icon] size-5"
            role="img"
            aria-hidden="true"
          />
        }
        className="text-foreground flex items-center justify-between gap-2"
        onPress={() => handleProviderSignIn("google")}
      >
        <span className="flex-1">Sign in with Google</span>
      </Button>

      {/* <Button
        fullWidth
        variant="bordered"
        size="lg"
        startContent={
          <i
            className="icon-[mdi--apple] size-5"
            role="img"
            aria-hidden="true"
          />
        }
        className="text-foreground flex items-center justify-between gap-2"
        onPress={() => handleProviderSignIn("apple")}
      >
        <span className="flex-1">Sign in with Apple</span>
      </Button> */}

      {/* <Button
        fullWidth
        variant="bordered"
        size="lg"
        startContent={
          <i
            className="icon-[logos--facebook] size-5"
            role="img"
            aria-hidden="true"
          />
        }
        className="text-foreground flex items-center justify-between gap-2"
        onPress={() => handleProviderSignIn("facebook")}
      >
        <span className="flex-1">Sign in with Facebook</span>
      </Button> */}

      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-2 border-gray-800 rounded-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 text-gray-500 bg-background">or</span>
        </div>
      </div>

      <Button
        fullWidth
        size="lg"
        className="text-foreground bg-secondary flex items-center"
        onPress={onShowCredentials}
        startContent={
          <i
            className="icon-[material-symbols--arrow-forward-rounded] size-4 -rotate-180"
            role="img"
            aria-hidden="true"
          />
        }
      >
        Sign in with Credentials
      </Button>
    </div>
  );
};
