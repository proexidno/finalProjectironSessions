import Link from "next/link";

export default function Avatar({ session }) {
    return (
        <div className="flex justify-center sm:justify-end [&>*]:px-3s">
            <Link href={"/auth/login/"} className="rounded-3xl bg-blue-500 text-white px-5 font-light">
                Sign In
            </Link>
        </div>
    )
}