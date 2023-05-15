type NullableString = string | null;

export default interface Profile {
    name: string;
    login: string;
    bio: NullableString;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: Date;
    location: NullableString;
    company: NullableString;
    blog: NullableString;
    twitter_username: NullableString;
}
