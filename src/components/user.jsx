export default function User({ user }) {
  // destructuring
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);
  console.log(createdDate.toLocaleString("en-us"));

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="user" />
      </div>
      <div className="profile-name">
        <a href={`https://github.com/${login}`}> {name || login}</a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p className="heading">Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p className="heading">Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p className="heading">Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
