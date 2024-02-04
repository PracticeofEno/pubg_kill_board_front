import { Button } from "@mui/material";
import { Header } from "./components/Navigator/Header";

export default function Home() {
  return (
    <div className="w-full h-full">
		<Header />
      <div className="fixed w-full h-full bg-test bg-no-repeat bg-center bg-cover brightness-[.3]">
      </div>
	  <div className="fixed w-full h-full">
	  	<div className="flex w-full h-full items-center justify-center">
          <div className="flex flex-col w-1/2 h-80 justify-center items-center space-y-10">
            <textarea
              className="w-full h-40 rounded-md border-black border-2"
              placeholder="API키 입력하는 곳"
            />
            <Button
              className="w-1/5 h-10 bg-white border-black border-2 rounded-md hover:bg-gray-500 "
            >
              확인
            </Button>
          </div>
        </div>
      </div>
	  
    </div>
  );
}
