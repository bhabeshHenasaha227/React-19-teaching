export default function ArrObj() {
  const fruites: string[] = ["apple", "banana", "mango", "orange"];
  return (
    <>
      <ul>
        {fruites.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
