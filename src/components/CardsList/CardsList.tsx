import { TechStackType } from "../Models/TechstackModel";

type CardsListProps = {
  data: TechStackType[];
  className: string;
  grid: string;
  reverse: string;
};

function CardsList({ data, className, grid, reverse }: CardsListProps) {
  return (
    <div className={grid}>
      {data.map((card) => {
        return (
          <div className={className}>
            <p style={{ color: reverse }}>{card.title}</p>
            <img
              src={card.image}
              //dont use percentage for height and width to avoid overflow
              className="h-[50px] w-[50px]  sm:h-[100px] sm:w-[100px] md:h-[140px] md:w-[140px] object-contain"
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardsList;
