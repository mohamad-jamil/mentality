import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import conf from "../../../configuration";

export default function Header() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const database = getDatabase(conf);
    const quotesRef = ref(database, "quotes");

    const fetchData = () => {
      onValue(quotesRef, (snapshot) => {
        const dataItem = snapshot.val();
        if (dataItem) {
          const quoteItem = Object.values(dataItem);
          setQuote(quoteItem[Math.floor(Math.random() * quoteItem.length)]);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <header className="bg-sky-200 p-4 flex justify-between">
      <div className="text-sky-950 font-serif text-3xl font-black px-2">
        Mentality
      </div>
      <div className="flex gap-4 items-center justify-center">
        <div className="font-serif font-black text-2xl">"{quote}"</div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      <div className="buttons flex items-center justify-center gap-4">
        <div className="relative">
          <input
            type="text"
            className="pl-9 pr-4 py-1 border rounded-lg"
            placeholder="Search"
          />
          <div
            className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        <button className="border border-sky-950 rounded px-4 py-1 hover:bg-white">
          + Add Tracker
        </button>
      </div>
    </header>
  );
}
