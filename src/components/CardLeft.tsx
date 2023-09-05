import { CardContent } from "../App";

export const CardLeft = (props: CardContent) => {
  return (
    <section className="flex lg:flex-row flex-col lg:px-20 px-10 py-10 gap-8">
      <img
        className="lg:w-[50%] w-screen h-auto lg:p-0 p-6"
        src={props.image}
        alt=""
      />
      <div className="flex flex-col items-start justify-center">
        <div>
          <p className="pb-6 text-5xl font-semibold text-[#ff4e43]">
            {props.title}
          </p>
          <p className="leading-7">{props.description}</p>
          <br />
          <p className="leading-7">{props.subDescription}</p>
        </div>
        <button className="bg-[#ff3a2d] px-4 py-2 mt-5 rounded-sm text-white">
          {props.buttonDescription}
        </button>
      </div>
      <div></div>
    </section>
  );
};
