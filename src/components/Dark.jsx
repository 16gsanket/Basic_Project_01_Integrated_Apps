import { useEffect, useState } from "react";
import Joke from "./Joke";
import { useParams } from "react-router-dom";
import FetchJokesHook from "./FetchJokesHook";

function Dark({ deduce_coins }) {
  const { joke, NewJoke } = FetchJokesHook();

  function dual_action() {
    NewJoke();
    deduce_coins();
  }

  return (
    <div className="h-5/6 w-full flex align-middle justify-center items-center flex-col gap-1">
      <h1>Dark joke</h1>
      <Joke joke={joke}></Joke>

      <button
        className="h-fir w-fit bg-purple-700 rounded-2xl px-6 py-2 hover:bg-purple-800 text-slate-200"
        onClick={dual_action}
      >
        New Joke
      </button>
      {/* <h1>{number_jokes}</h1> */}
    </div>
  );
}

export default Dark;
