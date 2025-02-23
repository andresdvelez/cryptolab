import { NavigationBar } from "@/modules/landing/components/NavigationBar";
import React, { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <NavigationBar />
      {children}
    </main>
  );
}
