'use client';

import Image from "next/image";
import Link from "next/link";

export default function ReadMe({ params }: { params: { rs: string } }) {
    return (
        <div className="flex flex-col px-2">
            <div className="text-3xl">1. https://developer.pubg.com 에서 개인 사용 API키를 발급받는다</div>
            <a className="flex text-blue-400" href="https://developer.pubg.com">https://developer.pubg.com/</a><br />
            <Image src={"/images/11.png"} alt="" width={500} height={300} /><br />
            <Image src={"/images/22.png"} alt="" width={500} height={300} /><br />
            <Image src={"/images/33.png"} alt="" width={500} height={300} /><br />
            <div className="text-3xl">2. http://panda-manager.com:8082/로 가서 발급받은 API키를 입력한다</div>
            <a className="flex text-blue-400" href="http://panda-manager.com:8082">https://panda-manager.com:8082</a><br />
            <Image src={"/images/44.png"} alt="" width={500} height={300} /><br />
            <div className="text-3xl">3. 이동된 창에서 세팅 한 후 [현재킬] 밑의 링크를 Xsplit에서 링크하면 메크로가 시작되며, 1시간동안 게임이 없을 경우 종료된다</div>
            <Image src={"/images/55.png"} alt="" width={500} height={300} /><br />
        </div >
    );
}
