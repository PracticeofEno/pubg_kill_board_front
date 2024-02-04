'use client';

import { LeftAlign } from "./LeftAlign/LeftAlign";
import { RightAlign } from "./RightAlign/RightAlign";

export function Header() {
  return (
    <div className="flex flex-row w-full h-[10%] bg-gray-400 z-99 border-white">
		<LeftAlign/>
		<RightAlign/>
	</div>
  );
}
