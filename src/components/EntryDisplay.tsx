import { Entry } from "../types";

type Props = {
  entry: Entry;
  index: Number;
};

function EntryDisplay({ entry, index }: Props) {
  return (
    <div className="group mb-2 shrink-0 rounded-lg flex items-center drop-shadow-md bg-zinc-700 w-48 h-20 relative">
      <p className="text-sm text-gray-200 font-bold px-4">{entry.name}</p>
    </div>
  );
}

export default EntryDisplay;
