'use client';

import Image from "next/image";
import Link from "next/link";

export default function ReadMe({ params }: { params: { rs: string } }) {
    return (
        <div className="flex flex-col px-2">
            <div className="text-2xl">1. https://developer.pubg.com 에서 개인 사용 API키를 발급받는다</div>
            <a className="flex text-blue-400" href="https://developer.pubg.com">https://developer.pubg.com/</a><br />
            <Image src={"/images/11.png"} alt="" width={500} height={300} /><br />
            <Image src={"/images/22.png"} alt="" width={500} height={300} /><br />
            <Image src={"/images/33.png"} alt="" width={500} height={300} /><br />
            <div className="text-2xl">2. http://panda-manager.com:8082/로 가서 발급받은 API키를 입력한다</div>
            <a className="flex text-blue-400" href="http://panda-manager.com:8082">https://panda-manager.com:8082</a><br />
            <Image src={"/images/44.png"} alt="" width={500} height={300} /><br />
            <div className="text-2xl">3. 이동된 창에서 세팅 한 후 [현재킬] 밑의 링크를 Xsplit에서 링크하면 시작되며, 2시간동안 새 게임이 없을 경우 종료된다</div>
            <Image src={"/images/55.png"} alt="" width={500} height={300} /><br />
            <div className="text-2xl">4. (옵션) 킬룰렛 기능까지 연동하려면 팬더 매니저 서비스에 등록 후 배그 웹훅 선택한 후 </div>
            <div className="text-2xl">5. http://panda-manager.com:8082/current/ 뒤에 나오는 랜덤10자리 문자열을 입력하면 킬룰렛 설정해놓은대로 연동됨 </div>
        </div >
    );
}
