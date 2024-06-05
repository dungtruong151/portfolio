import { DownloadIcon } from "@radix-ui/react-icons";
import SocialsGroup from "@/components/socials-group";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full mt-20">
      <div className="mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 ">
          <div className="text-center xl:text-left">
            <p className="text-base my-5">Fullstack Developer</p>
            <h1 className="text-5xl max-w-80 leading-tight">
              Hello I&apos;m
              <span className="text-orange-500 "> Tri Dung</span>
            </h1>
            <p className="text-sm mt-5 mb-2 text-white/80 max-w-sm">
              I&apos;m a software developer based in Vietnam.
            </p>
            <p className="text-sm mb-10 text-white/80 max-w-sm ">
              I specialize in building exceptional digital experiences.
            </p>
            <div className="flex gap-8">
              <a
                href="/CV_TruongTriDung.pdf"
                download
                className="flex bg-transparent text-orange-500 px-4 py-2 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-black transition-all"
              >
                Download CV
                <DownloadIcon className="mx-2 mt-1 size-5"></DownloadIcon>
              </a>
              <SocialsGroup></SocialsGroup>
            </div>
          </div>
          <div className="bg-orange-500 w-80 h-80 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
