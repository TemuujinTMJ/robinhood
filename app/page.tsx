import Image from "next/image";
import Logo from '@/public/logo.png'

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center flex-col bg-[#01212b]">
      <Image src={Logo} width={400} height={400} alt="logo"/>
    </div>
  );
}