"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.replace(/[\s:]+/g, "").toLowerCase()) {
      router.push(`/search/${query.replace(/[\s:]+/g, "").toLowerCase()}`);
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

      <Button type="submit" className="ml-2 p-2">
        Search
      </Button>
    </form>
  );
};

export default SearchComponent;
