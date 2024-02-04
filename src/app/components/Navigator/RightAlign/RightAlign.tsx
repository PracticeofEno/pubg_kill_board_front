'use client';

import { ToggleMode } from "./ToggleMode";

export function RightAlign() {
  return (
    <div className="flex w-full h-full bg-gray-400 justify-end">
		<ToggleMode/>
	</div>
  );
}
