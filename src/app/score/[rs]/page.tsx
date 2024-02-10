'use client';
import { useEffect, useState } from "react";
import { UserInterface } from "@/utils/interface";
import { getCookie } from "cookies-next";
import { getSettingData } from "@/api/pubg_api";
import { CircularProgress } from "@mui/material";

const io = require('socket.io-client');
export default function Score({ params }: { params: { rs: string } }) {
    const [socket, setSocket] = useState();
    const [user, setUser] = useState<UserInterface>()

    async function fetch() {
        const result = await getSettingData(params.rs);
        if (result)
            setUser(result);
        console.log(`result = `, result)
        console.log(`user = `, user)
    }

    useEffect(() => {
        fetch();
    }, [])

    useEffect(() => {
        var tmp = io('ws://panda-manager.com:8083', { transports: ['websocket'] });
        setSocket(tmp)
        console.log(tmp)
        tmp.on('pong2', function (message: any) {
            fetch();
        });

        tmp.on('connect', function () {
            console.log('tmp connected');
            tmp.emit('random_string', params.rs);
        });
        return () => {
            tmp.disconnect();
            console.log("소켓 끊어짐")
        }
    }, [])

    return (
        <div className="absolute flex flex-row w-full h-full bg-gray-400 justify-center items-center">
            {user ? <div className="text-6xl">{user.currentKill} / {user.targetKill} </div> : <CircularProgress />}
        </div>
    );
}
