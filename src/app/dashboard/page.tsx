'use client';
import { Button } from "@mui/material";
import { Setting } from "../components/rollet/Setting";
import { useEffect, useState } from "react";
import { UserInterface } from "@/utils/interface";
import { getCookie } from "cookies-next";
import { getSettingData } from "@/api/pubg_api";
import { InitKillState } from "../components/InitKill";

export default function DashBoard() {
  const [user, setUser] = useState<UserInterface>()
  async function fetch() {
    try {
      const random_string = getCookie("random_string");
      console.log(random_string)
      if (random_string) {
        const result = await getSettingData(random_string);
        setUser(result);
        console.log(`result = `, result)
        console.log(`user = `, user)
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetch();
  }, [])

  function moveRouter() {

  }

  return (
    <div className="absolute flex flex-row w-full h-full">
      <div className="flex flex-col w-1/5 h-full border-r border-gray-300">
        <div className="flex w-full h-[10%] justify-center items-center border-b border-gray-300">
          <button className="w-full h-full font-bold" onClick={moveRouter}>Home</button>
        </div>
        <div className="flex w-full h-[7%] justify-center items-center border-b border-gray-300">
          <button className="w-full h-full" onClick={moveRouter}>설정</button>
        </div>
      </div>
      <div className="relative w-full h-full items-center justify-center">
        <div className="absolute flex flex-col w-full h-full items-center justify-center bg-[#313131]">
          <div className="flex flex-col w-[450px] h-[90%] rounded-md border-black border-2 items-center justify-center overflow-auto">
            <div className="h-[25px]" />
            <InitKillState data={user} setStateUser={setUser} />
            <div className="h-[25px]" />
            <Setting data={user} setStateUser={setUser} />
          </div>
        </div>

      </div>
    </div>
  );
}
