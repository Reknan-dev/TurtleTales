export default function Footer() {
  return (
    <footer className="bg-deepblue w-full h-32 flex items-center">
      <div className="flex justify-between w-full px-4">
        <div>
          <img src="/images/logo.png" alt="Logo" className="w-20" />
        </div>

        <div className="flex items-center">
          <small>Benedetto Caiazzo 2023. All rights reserved</small>
        </div>

        <div>
          <img className="w-72" src="/images/s2i-logo.png" />
        </div>
      </div>
    </footer>
  );
}
