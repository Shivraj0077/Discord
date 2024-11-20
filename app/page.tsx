import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold">Welcome to the App</h1>
      <p className="text-lg mt-2">Please sign in to access your dashboard.</p>
      <Link href="/home">
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Go to Home
        </button>
      </Link>
    </div>
  );
}
