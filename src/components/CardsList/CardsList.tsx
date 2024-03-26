import { TechStackType } from "../Models/TechstackModel";

type CardsListProps = {
  data: TechStackType[];
  className: string;
  grid: string;
};

function CardsList({ data, className, grid }: CardsListProps) {
  return (
    <div className={grid}>
      {data.map((card) => {
        return (
          <div className={className}>
            <p className="text-white">{card.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CardsList;
