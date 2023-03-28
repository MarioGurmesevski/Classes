const fetchUsersAsync = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
  );
  const data = await res.json();

  return data;
};

const sum = users.reduce(() => {
  return data.age + num;
}, 0);

const app = async () => {
  const users = await fetchUsersAsync();
};
