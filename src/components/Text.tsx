import { ReactNode } from "react";

type TextProps = {
    title: string
    children: ReactNode;
}

export default function Text({ title, children }: TextProps) {
    return (
        <div className="flex justify-center">
            <div className="bg-secondary-100 w-[40vw] rounded-3xl">
                <div className="text-accent text-2xl font-bold text-center pt-10">{title}</div>
                <div className="p-10 text-text text-base text-start">
                    {children}
                </div>

            </div>
        </div>
        
    )
}