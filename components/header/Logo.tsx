import { useRouter } from "next/router";

export const Logo = () => {
    const router = useRouter();



    return (
        <div className="flex py-2 hover:cursor-pointer">
            <img
                src="/images/DB_NETZE_logo.png"
                alt="logo"
                className=" h-[80px]"
                onClick={() => {
                    router.push("/");
                }}
            />
        </div>
    );
}