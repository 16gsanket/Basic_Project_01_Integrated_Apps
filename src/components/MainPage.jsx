function MainPage({ children }) {
  return (
    <div className="h-5/6 w-full bg-slate-150 flex align-middle justify-center ">
      <div className="isolate aspect-video w-7/12 h-full rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 py-1 my-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default MainPage;
