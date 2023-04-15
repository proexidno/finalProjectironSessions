import Link from "next/link";
import Logo from "./logo";
import Avatar from "./avatar";


export default function Navbar() {
    return (
        <>
        <header className="grid fixed grid-rows-1 sm:grid-cols-[30%_50%_20%] md:grid-cols-[20%_60%_20%] px-10 box-border py-1">
            <Logo className="leading-loose" />
            <div className="flex justify-center [&>*]:px-3 leading-loose">
                <Link href="/">Home</Link>
                <Link href="/docs" className="border-l-2">Documentation</Link>
                <Link href="/docs" className="border-l-2">Games</Link>
            </div>
            <Avatar />
        </header>
        <div className="h-28 sm:h-12" />
        </>
    )
}