type SectionTitleProps = {
    children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
    return (
        <div className="text-primary font-bold text-4xl text-center">
            <div>{children}</div>
        </div>
    )
}