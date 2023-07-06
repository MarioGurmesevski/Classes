async function fetchRepo(name) {
  const reponse = await fetch(
    `https://api.github.com/repos/MarioGurmesevski/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const repoInfo = await reponse.json();
  return repoInfo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
    </div>
  );
};

export default Repo;
