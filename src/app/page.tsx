'use client';
import { Button } from "@mui/material";
import { Header } from "./components/Navigator/Header";
import { useState } from "react";
import { getUserByApiKeyId } from "@/api/pubg_api";
import { setCookie, } from 'cookies-next';
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
    const [apiKey, setApiKey] = useState("");
    const router = useRouter()

    async function submit() {
        const result = await getUserByApiKeyId(apiKey)
        if (result) {
            console.log(result);
            setCookie("random_string", result.random_string);
            router.push("/dashboard")
        }
        else {
            alert("유효하지 않은 API키입니다");
        }

    }

    return (
        <div className="w-full h-full">
            <div className="fixed w-full h-full bg-test bg-no-repeat bg-center bg-cover brightness-[.3]">
            </div>
            <div className="fixed w-full h-full">
                <div className="flex w-full h-full items-center justify-center">
                    <div className="flex flex-col w-1/2 h-80 justify-center items-center space-y-10">
                        <textarea
                            className="w-full h-40 rounded-md border-black border-2"
                            placeholder="API키 입력하는 곳"
                            onChange={(e) => setApiKey(e.target.value)}
                            value={apiKey}
                        />
                        <Button
                            className="w-1/5 h-10 bg-white border-black border-2 rounded-md hover:bg-gray-500"
                            onClick={submit}
                        >
                            확인
                        </Button>
                        <Link href="/readme"
                            className="w-1/5 h-10 bg-white border-black border-2 rounded-md hover:bg-gray-500 text-center text-align-center"
                        >
                            설명서
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
