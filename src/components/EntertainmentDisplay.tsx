import { User } from "../types";
import CategoryDisplay from "./CategoryDisplay";

type Props = {
  user: User;
};

function EntertainmentDisplay({ user }: Props) {
  return (
    <div className="flex flex-wrap flex-col justify-between w-10/12 gap-12">
      <CategoryDisplay entertainment={user.books} title="Books" />
      <CategoryDisplay entertainment={user.games} title="Video Games" />
      <CategoryDisplay entertainment={user.movies} title="Movies" />
      <CategoryDisplay entertainment={user.shows} title="TV" />
    </div>
  );
}

export default EntertainmentDisplay;
