"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { removeSpecialCharacters } from "@/lib/utils";

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (removeSpecialCharacters(query)) {
      router.push(`/search/${removeSpecialCharacters(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border rounded p-2 w-full"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
