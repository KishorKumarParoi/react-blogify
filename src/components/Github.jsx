import { NavLink, useLoaderData } from "react-router-dom";

export default function Github() {
    const { login, name, avatar_url, bio, followers } = useLoaderData();

    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mt-10">{name}</h1>
                <p className="text-center mt-4">{bio}</p>
                <NavLink className="block w-20 h-20 mx-auto mt-4">
                    <img src={avatar_url
                        ? avatar_url
                        : "https://www.gravatar.com/avatar/000?d=mp"}
                        className="rounded-full w-full h-full object-cover"
                        alt={login}
                    />
                </NavLink>
                <h1 className="text-4xl font-bold text-center mt-10">{name} has {followers} followers</h1>
                <br />
            </div>
        </>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/KishorKumarParoi');
    return response.json();
}