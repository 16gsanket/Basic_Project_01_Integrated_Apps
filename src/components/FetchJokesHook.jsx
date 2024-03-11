import { useEffect, useState } from "react";

function FetchJokesHook() {
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
    // deduce_coins;
  }
  return { joke, count, isLoading, NewJoke };
}

export default FetchJokesHook;
