import { useState } from "react";
import { useQuery } from "urql";
import { GetUsersDocument } from "./graphql/generated";
import EntertainmentDisplay from "./components/EntertainmentDisplay";

function App() {
  const [results] = useQuery({
    query: GetUsersDocument,
  });
  return (
    <div className="bg-gray-50 flex-col h-screen w-full flex items-center justify-start gap-y-12 overflow-scroll">
      <div className="bg-gray-100 text-2xl text-green-500 font-bold w-full h-24 p-8 flex items-center justify-center">
        <h1>2023 Entertainment</h1>
      </div>
      {results.data?.users.map((user, i) => (
        <EntertainmentDisplay user={user} key={i} />
      ))}
    </div>
  );
}

export default App;
