"use client";

import { signInWithCredentials } from "@/app/actions/auth";
import { Button, Input } from "@heroui/react";

interface Props {
  onShowProviders: () => void;
}

export const CredentialsForm = ({ onShowProviders }: Props) => {
  interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
  }

  interface CredentialsFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }

  const handleSubmit = async (e: React.FormEvent<CredentialsFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    await signInWithCredentials(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 w-full flex flex-col gap-4">
      <Input
        type="email"
        name="email"
        placeholder="Email"
        variant="bordered"
        className="w-full"
        radius="sm"
        size="lg"
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        variant="bordered"
        className="w-full"
        radius="sm"
        size="lg"
      />
      <Button
        type="submit"
        endContent={
          <i
            className="icon-[material-symbols--arrow-forward-rounded] size-4"
            role="img"
            aria-hidden="true"
          />
        }
        size="lg"
        className="w-full bg-secondary text-white p-2 items-center text-lg"
      >
        Continue
      </Button>

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
        variant="bordered"
        size="lg"
        className="text-foreground"
        onPress={onShowProviders}
      >
        Sign in with other methods
      </Button>
    </form>
  );
};
