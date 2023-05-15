export default function Loading() {
    return (
        <div className="flex items-center justify-center gap-5">
            {Array.from(Array(3), (_, index) => (
                <div
                    key={index}
                    className={`aspect-square w-[min(80px,_22vw)] animate-loading rounded-full bg-btn`}
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                ></div>
            ))}
        </div>
    );
}
