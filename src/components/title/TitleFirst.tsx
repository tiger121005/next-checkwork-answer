import { ReactNode } from "react";
import Image from "next/image";

type TitleFirstProps = {
    children: ReactNode;
}

export default function TitleFirst({ children }: TitleFirstProps) {
    return (
        <div className="sm:h-[140px] lg:h-[160px] z-10 lg:mb-[1vw] overflow-hidden">
            <div className="relative -left-16 -top-44">
                <Image src="/titleFirstBG.svg" width="100" height="100" alt="" className="absolute w-auto h-96 min-w-[380px]" />
                <h1 className="absolute text-3xl w-96 h-36 top-[10.75rem] left-10 flex justify-center items-center font-body font-bold text-center text-white break-words">{children}</h1>
            </div>
        </div>
    )
}