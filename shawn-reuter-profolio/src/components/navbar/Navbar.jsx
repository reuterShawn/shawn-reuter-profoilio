import Link from "next/link";

const Navbar = async () => {
  return (
    <div className="-bg--bgLight2 h-50 flex justify-end p-5">
      <Link
        href="/"
        className="absolute left-0 font-bold text-xl pl-5 sm:sm-md: hidden"
      >
        Reuter
      </Link>
      <div className="flex space-x-5 pr-5 justify-end text-1xl font-medium">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <button type="switch" onClick="">
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
