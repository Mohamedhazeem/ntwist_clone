import { CardContent } from "../pages/Home";
import { Link } from "react-router-dom";

export const CardLeft = (props: CardContent) => {
  return (
    <section className="flex lg:flex-row flex-col lg:px-20 px-10 lg:py-10 gap-8">
      <img
        className="lg:w-[50%] w-screen h-auto lg:p-0 p-6"
        src={props.image}
        alt=""
      />
      <div className="flex flex-col items-start justify-center">
        <div>
          <p className="pb-6 text-5xl font-semibold text-[var(--card-titles-color)]">
            {props.title}
          </p>
          <p className="leading-7">{props.description}</p>
          <br />
          <p className="leading-7">{props.subDescription}</p>
        </div>
        {props.showButton && (
          <Link
            to={props.linkTo || ""}
            className="bg-[var(--readmore-button-color)] px-4 py-2 rounded-sm text-white font-semibold"
          >
            {props.buttonDescription}
          </Link>
        )}
      </div>
      <div></div>
    </section>
  );
};
