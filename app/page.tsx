import ApolloKino from "@/components/api-req/cinemas/apollokino";
import Artis from "@/components/api-req/cinemas/artis";
import Thule from "@/components/api-req/cinemas/thule";
import Viimsi from "@/components/api-req/cinemas/viimsi";
import SearchComponent from "@/components/search/search";

export default async function Index() {
  return (
    <>
      <SearchComponent />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h1 className="bold text-pink-500">Apollokino</h1>
        <ApolloKino />
        <hr />
        <h1 className="bold text-pink-500">Artis</h1>
        <Artis />
        <hr />
        <h1 className="bold text-pink-500">Viimsi</h1>
        <Viimsi />
        <hr />
        <h1 className="bold text-pink-500">Thule</h1>
        <Thule />
      </main>
    </>
  );
}
