'use client';

import { UserInterface } from "@/utils/interface";
import { CopyString } from "./CopyString";

export function InitKillState({ data, setStateUser }: { data: UserInterface | undefined, setStateUser: (updatedUser: UserInterface) => void }) {
    return (
        <div className="relative flex flex-col w-full space-y-2 border-b border-gray-400">
            <div className="flex flex-row w-full space-x-10">
                <p className="text-white">현재 킬</p>
                <input
                    className="border-white border rounded-md bg-[#252525] text-white"
                    type="number"
                    value={data?.currentKill}
                    onChange={(e) => {
                        if (data) {
                            setStateUser({
                                ...data,
                                currentKill: Number(e.target.value)
                            })
                        }
                    }}
                >
                </input>
            </div>
            <CopyString data={`http://panda-manager.com:8082/current/${data?.randomString}`} />
            <div className="block flex flex-row w-full space-x-10">
                <p className="text-white">목표 킬</p>
                <input
                    className="border-white border rounded-md bg-[#252525] text-white"
                    type="number"
                    value={data?.targetKill}
                    onChange={(e) => {
                        if (data) {
                            setStateUser({
                                ...data,
                                targetKill: Number(e.target.value)
                            })
                        }
                    }}
                >
                </input>
            </div>
            <CopyString data={`http://panda-manager.com:8082/target/${data?.randomString}`} />
            <div className="block flex flex-row w-full space-x-10">
                <p className="text-white">닉네임</p>
                <input
                    className="border-white border rounded-md bg-[#252525] text-white"
                    type="text"
                    value={data?.nickname}
                    onChange={(e) => {
                        if (data) {
                            setStateUser({
                                ...data,
                                nickname: String(e.target.value)
                            })
                        }
                    }}
                >
                </input>
            </div>
            <div className="relative h-[25px]" />
        </div>
    );
}
