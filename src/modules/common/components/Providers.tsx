"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ClerkProvider>
          <HeroUIProvider>{children}</HeroUIProvider>
        </ClerkProvider>
      </QueryClientProvider>
    </>
  );
};
