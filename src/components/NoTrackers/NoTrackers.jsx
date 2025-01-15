export default function NoTrackers() {
  return (
    <div className="flex flex-col gap-8 items-center text-white font-serif justify-center h-3/4">
      <p className="">No trackers yet... :(</p>
      <button className="flex flex-col items-center border border-dashed rounded-2xl px-32 py-24 hover:bg-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <p>Create your first one here!</p>
      </button>
    </div>
  );
}
