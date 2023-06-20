export default function RegionInput({ name, setRegion }) {
  return (
    <>
      <input
        type="radio"
        name="region"
        id={name}
        value={name}
        onChange={(e) => setRegion(e.target.value)}
      />
      <label htmlFor={name}>{name || "None"}</label>
    </>
  );
}
