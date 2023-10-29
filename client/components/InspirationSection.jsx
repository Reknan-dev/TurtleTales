import Link from "next/link";

export default function InspirationSection() {
  return (
    <div className="bg-sand w-full h-96 flex justify-center items-center text-base">
      <Link href="https://unric.org/it/obiettivo-14-conservare-e-utilizzare-in-modo-durevole-gli-oceani-i-mari-e-le-risorse-marine-per-uno-sviluppo-sostenibile/">
        <img className="w-40 mr-2.5 rounded-md" src="/images/nu.png" alt="nu" />
      </Link>
      <p className="w-1/2">
        Inspired by goal number 14 of the UN Agenda 2030: Conserve and
        sustainably use the oceans, seas and marine resources to sustainable
        development
      </p>
    </div>
  );
}
