import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { AppLogo } from "../components/Logo";
export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900 rounded-md shadow-sm">
        <AppLogo />
        <p>
          The AI-powerd SaaS solution to generate SEO-optimized blog posts in
          minutes
        </p>
        <Link
          href="/post/new"
          className="bg-blue-800 tracking-wider w-full text-center text-white font-bold cursor-pointer uppercase px-4 py-2 my-5 rounded-md hover:bg-blue-900 transition-colors block"
        >
          Lets Start !
        </Link>
      </div>
    </div>
  );
}
