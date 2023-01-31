import { Book, Game, Movie, Show } from "../types";

type Props = {
  entertainment: Book[] | Game[] | Movie[] | Show[];
};

function EntertainmentGrid({ entertainment }: Props) {
  return (
    <div className="bg-gray-400 rounded-lg grid gap-4 grid-cols-2">
      {entertainment.map((entry, i) => (
        <div className="bg-gray-200 rounded-lg flex items-center justify-center h-16">
          {entry.name}
        </div>
      ))}
    </div>
  );
}

export default EntertainmentGrid;
