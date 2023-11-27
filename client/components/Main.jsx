import Link from "next/link";

export default function Main() {
  return (
    <main className="bg-[url('https://images.unsplash.com/photo-1599076312253-36399e9f157e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex w-full h-96 bg-cover bg-center justify-center items-center flex-col">
      <p className="title text-turtle text-5xl">
        <strong>Help to find them</strong>
      </p>
      <Link href="#mapDiv">
        <button className="join-button font-bold mt-3 w-28 px-4 py-2 hover:bg-scarlet hover:border-scarlet border-2 border-white rounded-3xl text-white duration-500">
          JOIN
        </button>
      </Link>
    </main>
  );
}
