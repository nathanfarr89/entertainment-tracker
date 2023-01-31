import { Book, Game, Movie, Show } from "../types";

type Props = {
  entertainment: Book[] | Game[] | Movie[] | Show[];
  title: string;
};

function CategoryDisplay({ entertainment, title }: Props) {
  return (
    <div className="flex flex-col justify-start flex-wrap p-4">
      <div className="ml-4 mb-6">
        <h2 className="text-lg text-green-600 font-bold">{title}</h2>
      </div>
      <div className="flex">
        {entertainment.map((entry, i) => (
          <div className="bg-gray-800 text-white filter drop-shadow-lg rounded-lg flex items-center justify-center h-32 w-24 ml-4 p-2">
            {entry.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryDisplay;
