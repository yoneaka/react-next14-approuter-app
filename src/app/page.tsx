import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link href='/dashboard'>Dashboard</Link>
      </div>
    </>
  );
}
