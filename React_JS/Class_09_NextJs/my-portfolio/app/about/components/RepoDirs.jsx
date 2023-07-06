async function fetchRepoContents(name) {
  const reponse = await fetch(
    `https://api.github.com/repos/MarioGurmesevski/${name}/contents`
  );

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const repoContents = await reponse.json();
  return repoContents || [];
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((c) => c.type === "dir");

  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => {
          <li key={dir.path}>{dir.path}</li>;
        })}
      </ul>
    </div>
  );
};
export default RepoDirs;
