"use client";

import { Link } from "@/modules/translations/i18n/routing";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@heroui/react";

export const GetStartedBtn = () => {
  return (
    <div className="flex items-center gap-4">
      <SignedIn>
        <Link href="/manage-plan">
          <Button variant="light" className="text-blue-600 hover:text-blue-700">
            Manage Plan
          </Button>
        </Link>
        <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors">
            Join waitlist
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};
