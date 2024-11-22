'use client'; // Ensure this component is treated as a Client Component

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/" />
      <h1> This is the main page</h1>
    </div>

  );
}