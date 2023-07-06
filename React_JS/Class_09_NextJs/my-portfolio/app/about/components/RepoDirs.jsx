async function fetchRepoContents(name) {
  const response = await fetch(
    `https://api.github.com/repos/MarioGurmesevski/${name}/contents`
  );

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const repoContents = await response.json();
  return repoContents || [];
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  console.log(contents);

  const dirs = contents.filter((c) => c.type === "dir");

  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>{dir.path}</li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
