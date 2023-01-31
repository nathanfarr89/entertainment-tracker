import { User } from "../types";
import EntryDisplay from "./EntryDisplay";
import EntertainmentGrid from "./EntertainmentGrid";

type Props = {
  user: User;
};

function UserDisplay({ user }: Props) {
  return (
    <div>
      {/* <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
        <p className="text-xl text-gray-200 font-bold">{user.name}</p>
      </div>
      <div>
        {user.entries.map((entry, i) => (
          <EntryDisplay key={i} index={i} entry={entry} />
        ))}
      </div> */}
      <div className="grid gap-24 grid-cols-4 auto-rows-min">
        <EntertainmentGrid entertainment={user.books} />
        <EntertainmentGrid entertainment={user.games} />
        <EntertainmentGrid entertainment={user.movies} />
        <EntertainmentGrid entertainment={user.shows} />
      </div>
    </div>
  );
}

export default UserDisplay;
