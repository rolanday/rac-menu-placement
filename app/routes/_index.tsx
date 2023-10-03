import type { MetaFunction } from "@remix-run/node";
import { HMenu } from "~/components/menu.tsx";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center gap-2">
      <div className="bg-red-300 h-full w-1/5 flex relative"><div className="absolute bottom-2 left-4"><HMenu /></div></div>
      <div className="bg-orange-300 h-full w-1/5 flex relative"><div className="absolute bottom-4 left-4"><HMenu /></div></div>
      <div className="bg-cyan-300 h-full w-1/5 flex relative"><div className="absolute bottom-8 left-4"><HMenu /></div></div>
      <div className="bg-blue-300 h-full w-1/5 flex relative"><div className="absolute bottom-12 left-4"><HMenu /></div></div>
      <div className="bg-green-300 h-full w-1/5 flex relative"><div className="absolute bottom-20 left-4"><HMenu /></div></div>
      <div className=" flex-1 bg-green"/>
    </div>
  );
}
