export default function Header() {
  return (
    <header className="bg-white text-black p-1 shadow-md flex justify-between sm:flex-col md:flex-row items-center gap-4">
      <img src="/logo.jpg" alt="Logo" className="h-30" />
      <h1 className="text-3xl font-bold my-auto font-[Titr]">
        بازیکنان فوتبال
      </h1>
      <nav className="flex my-auto gap-5 font-[Titr] p-5 text-lg">
      <a href="#info">معلومات</a>
      <a href="#players">بازیکنان</a>
      <a href="#contact">تماس</a>
      </nav>
    </header>
  );
}
