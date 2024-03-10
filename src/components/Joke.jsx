function Joke({ joke }) {
  return (
    <div className="h-2/6 w-10/12  flex align-middle justify-center font-serif">
      <h3 className="text-2xl">{joke}</h3>
    </div>
  );
}

export default Joke;
