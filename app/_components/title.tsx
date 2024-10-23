"use client"
interface TitleProps {
    title: string;
    subTitle?: string;
    description?: string;
    active?: boolean;
}
export const Title = ({
    title,
    description,
    active,
    subTitle
}: TitleProps) => {
    return (
        <div className="flex justify-center pt-20 text-5xl text-center font-normal">
            <div>
                <h1>{title} <span className="text-[#455be7]">{subTitle}</span> </h1>
                <div>
                    <sub className="text-lg flex items-center justify-center gap-x-2 text-slate-200">
                        {
                            active && <div className="w-3 h-3 md:flex hidden rounded-full bg-[#3b53f2] opacity-75"></div>
                        }
                        {description}
                    </sub>
                </div>
            </div>
        </div>
    )
}