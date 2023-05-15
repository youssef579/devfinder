// Next utils
import { revalidatePath } from "next/cache";
import Image from "next/image";
// Assets
import searchIcon from "@/svgs/icon-search.svg";
// Types
import type Profile from "@/types/profile";
// Components
import GithubProfile from "@/components/Profile";

let profile: Profile;
let error: string;

export default async function Home() {
    async function getUserGithub(formData: FormData) {
        "use server";

        const response = await fetch(
            "https://api.github.com/users/" + formData.get("username")
        );

        if (response.status === 404) error = "The user is not found";
        else {
            profile = await response.json();
            error = "";
        }

        revalidatePath("/");
    }

    return (
        <>
            <header className="font-mono text-3xl font-extrabold">
                devfinder
            </header>
            <form
                action={getUserGithub}
                className="container mb-9 mt-7 flex items-center justify-between gap-4 pl-5"
            >
                <Image src={searchIcon} alt="Search" width={20} />
                <input
                    className="w-full text-lg placeholder:text-white"
                    type="text"
                    placeholder="username"
                    name="username"
                    required
                />
                <input
                    className="rounded-xl bg-btn px-7 py-3 font-bold transition-opacity hover:opacity-75 mobile:px-5"
                    type="submit"
                    value="Search"
                />
            </form>
            {error && <p className="text-red-700 text-lg">{error}</p>}
            {profile && <GithubProfile profile={profile} />}
        </>
    );
}
