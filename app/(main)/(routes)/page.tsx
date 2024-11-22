'use client'; // Ensure this component is treated as a Client Component

import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/" />
      <br/>
      <ModeToggle/>
    </div>

  );
}