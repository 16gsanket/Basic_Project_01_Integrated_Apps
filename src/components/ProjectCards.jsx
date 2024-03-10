function ProjectCards({ name }) {
  return (
    <div className="h-60 w-60 bg-indigo-300 rounded-2xl overflow-hidden flex justify-center align-middle flex-col">
      <img
        className="w-full h-5/6 object-cover"
        src="https://images.ctfassets.net/lzny33ho1g45/O6Ns6DttUzJym7rhGiD36/b1cc4e063288e5161b14edad3569c5cb/best-to-do-list-apps.jpg?w=1520&fm=avif&q=30&fit=thumb&h=760"
        alt=""
      />
      <h3 className="items-center pl-4 text-bold">{name}</h3>
    </div>
  );
}

export default ProjectCards;
