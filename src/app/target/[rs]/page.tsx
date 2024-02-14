'use client';
import { useEffect, useState } from "react";
import { UserInterface } from "@/utils/interface";
import { getCookie } from "cookies-next";
import { getSettingData } from "@/api/pubg_api";
import { CircularProgress } from "@mui/material";

const io = require('socket.io-client');
export default function Target({ params }: { params: { rs: string } }) {
    const [socket, setSocket] = useState();
    const [user, setUser] = useState<UserInterface>()

    async function fetch() {
        const result = await getSettingData(params.rs);
        if (result) {
            setUser(result);
        }

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
            console.log(message);
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
        <div className="absolute flex flex-row px-2 ">
            {user ? <div className="flex text-5xl text-red-400">
                {user.targetKill}
            </div> : <CircularProgress />}
        </div>
    );
}
