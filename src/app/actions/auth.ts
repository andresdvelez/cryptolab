"use server";

import { signIn } from "@/modules/auth/auth";

export const signInWithProvider = async (
  provider: string,
  callbackUrl = "/"
) => {
  try {
    return await signIn(provider, { callbackUrl });
  } catch (error) {
    console.error(`Error signing in with ${provider}:`, error);
    throw error;
  }
};

export const signInWithCredentials = async (
  email: string,
  password: string,
  callbackUrl = "/"
) => {
  try {
    return await signIn("credentials", {
      email,
      password,
      callbackUrl,
    });
  } catch (error) {
    console.error("Error signing in with credentials:", error);
    throw error;
  }
};
