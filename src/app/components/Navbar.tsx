import Link from "next/link";
import Search from "./Search";
export default function Navbar(){
    return(
    <header className="bg-zinc-900 sticky top-0 z-10 border border-slate-600 ">
        <nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold :ax-w-6xl mx-auto text-white  ">
            <h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">
                <Link href="/"> Next.js Image Gallery</Link>
                </h1>
                <Search/>
        </nav>
    </header>)
}