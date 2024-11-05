import ApolloKino from "@/components/api-req/apollokino";
import Artis from "@/components/api-req/artis";
import Forum from "@/components/api-req/forum";
import Thule from "@/components/api-req/thule";
import Viimsi from "@/components/api-req/viimsi";

export default async function Index() {
  return (
    <>
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
        <hr />
        <h1 className="bold text-pink-500">Forum</h1>
        <Forum />
      </main>
    </>
  );
}
