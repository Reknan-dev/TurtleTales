import Link from "next/link";

const handleScrollToComponent = (e) => {
  e.preventDefault();
  const element = document.getElementById("mapDiv");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Main() {
  return (
    <main className="bg-[url('/images/banner.jpg')] flex w-full h-96 bg-cover bg-center justify-center items-center flex-col">
      <p className="title text-turtle text-5xl">
        <strong>Help us to find them</strong>
      </p>

      <button
        onClick={handleScrollToComponent}
        className="join-button font-bold mt-3 w-28 px-4 py-2 hover:bg-scarlet hover:border-scarlet border-2 border-white rounded-3xl text-white duration-500"
      >
        JOIN
      </button>
    </main>
  );
}
