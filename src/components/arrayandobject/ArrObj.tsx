export default function ArrObj() {
  type user = {
    name: string;
    age: number;
    passion: string;
  };
  // const fruites: string[] = ["apple", "banana", "mango", "orange"];
  const users: user[] = [
    { name: "Bhabesh", age: 40, passion: "coding" },
    { name: "salman", age: 20, passion: "coding" },
    { name: "Vijay", age: 30, passion: "coding" },
  ];
  return (
    <>
      <div>
        {/* <ul>
          {fruites.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul> */}
      </div>
      <br />
      <div>Object looping</div>
      <br />
      <div>
        <ul>
          {users.map((user: user, index: number) => (
            <li key={user.name}>
              <span>{index + 1}</span>
              <div>{user.name}</div>
              <div>{user.age}</div>
              <div>{user.passion}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
