import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function PlannerContainer() {
  const [search, setSearch] = useState("test");
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log(response.data);
      });
    console.log("Welcome to PlannerContainer!");
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("Component was updated", Math.random() * 100);
  }, [search]);

  useEffect(() => {
    console.log("Count is updated", count);
  }, [count]);

  //   useEffect(() => {
  //     console.log("Input", inputRef);
  //   }, [inputRef]);

  return (
    <div>
      <div>
        <button type="button" onClick={() => setCount(count + 1)}>
          Click Me!
        </button>

        <input
          type="search"
          ref={inputRef}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <h1>{search}</h1>
    </div>
  );
}
