'use client';
import { Button } from "@mui/material";
import { Setting } from "../components/rollet/Setting";
import { useEffect, useState } from "react";
import { UserInterface } from "@/utils/interface";
import { getCookie } from "cookies-next";
import { getSettingData } from "@/api/pubg_api";
import { InitKillState } from "../components/InitKill";
import { useRouter } from "next/navigation";

export default function DashBoard() {
    const [user, setUser] = useState<UserInterface>()
    const router = useRouter();
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
        router.push('/')
    }

    return (
        <div className="absolute flex flex-row w-full h-full">
            <div className="w-full h-full justify-center items-center">
                <div className="flex flex-col w-full h-full bg-[#313131] justify-center items-center">
                    <div className="flex flex-col w-[450px] h-[90%] rounded-md border-black border-2 overflow-auto">
                        <div className="relative h-[25px]" />
                        <InitKillState data={user} setStateUser={setUser} />
                        <div className="relative h-[25px]" />
                        <Setting data={user} setStateUser={setUser} />
                    </div>
                </div>
            </div>
        </div>
    );
}
