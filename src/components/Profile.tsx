// Next utils
import Image from "next/image";
// Assets
import company from "@/svgs/icon-company.svg";
import twitter from "@/svgs/icon-twitter.svg";
import location from "@/svgs/icon-location.svg";
import website from "@/svgs/icon-website.svg";
// Types
import type Profile from "@/types/profile";
// Custom components
import UserInfo from "@/components/UserInfo";

export default function Profile({ profile }: { profile: Profile }) {
    return (
        <div className="container p-9 mobile:p-5">
            <div className="flex items-center gap-12 mobile:gap-3">
                <Image
                    className="aspect-square rounded-full mobile:w-20"
                    src={profile.avatar_url}
                    alt={profile.login}
                    width={110}
                    height={110}
                />
                <div>
                    <p className="mb-1 text-2xl font-bold mobile:text-xl">
                        {profile.name || profile.login}
                    </p>
                    <p className="text-btn">@{profile.login}</p>
                    <p className="mobile:text-sm">
                        Joined{" "}
                        {new Date(profile.created_at).toLocaleDateString(
                            "en-us",
                            {
                                day: "numeric",
                                year: "numeric",
                                month: "short",
                            }
                        )}
                    </p>
                </div>
            </div>
            <p className="my-5 text-sm opacity-75">
                {profile.bio || "There is no bio."}
            </p>
            <div className="flex justify-between rounded-xl bg-[#141D2F] p-6 mobile:p-5">
                <p className="flex-1 text-center mobile:text-xs">
                    Repos
                    <span className="mt-2 block text-xl font-bold mobile:text-lg">
                        {profile.public_repos}
                    </span>
                </p>
                <p className="flex-1 text-center mobile:text-xs">
                    Followers
                    <span className="mt-2 block text-xl font-bold mobile:text-lg">
                        {profile.followers}
                    </span>
                </p>
                <p className="flex-1 text-center mobile:text-xs">
                    Following
                    <span className="mt-2 block text-xl font-bold mobile:text-lg">
                        {profile.following}
                    </span>
                </p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 mobile:grid-cols-1">
                <UserInfo
                    src={location}
                    alt={profile.location}
                    width={14}
                    height={20}
                    gap={5}
                />
                <UserInfo
                    src={website}
                    alt={profile.blog}
                    width={20}
                    height={20}
                    gap={4}
                />
                <UserInfo
                    src={twitter}
                    alt={profile.twitter_username}
                    width={20}
                    height={18}
                    gap={4}
                />
                <UserInfo
                    src={company}
                    alt={profile.company}
                    width={20}
                    height={20}
                    gap={4}
                />
            </div>
        </div>
    );
}
