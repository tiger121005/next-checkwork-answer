import Image from "next/image";
import { ReactNode } from "react";

type RequireProps = {
    src: string;
    children: ReactNode;
}

export default function Require({ src, children }: RequireProps) {
    return (
        <div>
            <div className="flex flex-col items-center w-[15vw]">
                <Image src={src} alt="" width={150} height={150} className="" />
                <div className="text-center text-sm text-text pt-5">{children}</div>
            </div>
        </div>
    )
}