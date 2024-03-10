import { useEffect, useState } from "react";
import Joke from "./Joke";

function Clean() {
  const [joke, setJoke] = useState("Hello World");
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function joke() {
        setIsLoading(true);
        try {
          const raw_joke = await fetch("https://icanhazdadjoke.com/slack");
          const data = await raw_joke.json();
          const joke = data.attachments[0].fallback;
          setJoke(joke);
        } catch (err) {
          throw new Error(err);
        } finally {
          setIsLoading(false);
        }
      }
      joke();
    },
    [count]
  );

  function NewJoke() {
    setCount(count + 1);
  }
  return (
    <div className="h-5/6 w-full flex align-middle justify-center items-center flex-col gap-1">
      <h1>Clean joke</h1>
      <Joke joke={joke}></Joke>

      <button
        className="h-fir w-fit bg-purple-700 rounded-2xl px-6 py-2 hover:bg-purple-800 text-slate-200"
        onClick={NewJoke}
      >
        New Joke
      </button>
    </div>
  );
}

export default Clean;
