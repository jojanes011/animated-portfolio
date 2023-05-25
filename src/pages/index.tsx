import { Open_Sans } from "next/font/google";
import Profile from "@/components/Profile/Profile";
import Main from "@/components/Main/Main";
import Menu from "@/components/Menu/Menu";

const open = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 space-x-0 sm:space-x-28 min-h-screen p-4 sm:p-8 ${open.className}`}
    >
      <Profile />
      <Main />
      {/* <Menu /> */}
    </main>
  );
}
