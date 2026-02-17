function Header() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 h-[125px] bg-[#3ebfff]">
     
      <h1 className="text-3xl font-bold text-white lowercase tracking-tight">
        sunnyside
      </h1>

   
      <ul className="flex items-center gap-8 text-white font-semibold">
        <li className="cursor-pointer hover:opacity-80">About</li>
        <li className="cursor-pointer hover:opacity-80">Services</li>
        <li className="cursor-pointer hover:opacity-80">Projects</li>
        <li>
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full uppercase text-sm hover:bg-opacity-25 hover:text-white transition-all">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;