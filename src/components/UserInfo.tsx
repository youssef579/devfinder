import Image from "next/image";

interface Props {
    src: any;
    alt: string | null;
    width: number;
    height: number;
    gap: number;
}

export default function UserInfo({ src, alt, width, height, gap }: Props) {
    return (
        <p
            className={`flex items-center gap-${gap} brightness-[1000%]${
                alt ? "" : " opacity-50"
            }`}
        >
            <Image
                src={src}
                alt={alt || "Not available"}
                width={width}
                height={height}
            />
            <span className=" overflow-hidden text-ellipsis text-[15px]">
                {alt || "Not available"}
            </span>
        </p>
    );
}
