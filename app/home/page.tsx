import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <SignedOut>
        <div className="text-center">
          <h1 className="text-3xl font-bold">You are signed out</h1>
          <SignIn routing="hash" />
        </div>
      </SignedOut>

      <SignedIn>
        <h1 className="text-4xl font-bold">Welcome to Home Page</h1>
        <p className="text-lg mt-2">This is a protected route only accessible by signed-in users.</p>
      </SignedIn>
    </div>
  );
}
