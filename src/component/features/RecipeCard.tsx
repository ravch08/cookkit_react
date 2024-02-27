import { Link } from "react-router-dom";
import { RecipeProps } from "../../context";

const RecipeCard = ({ id, image_url, title, publisher }: RecipeProps) => {
  return (
    <div className="w-[30%] rounded-md bg-slate-200 p-4">
      <figure className="mb-6 h-44 w-full overflow-hidden">
        <img src={image_url} alt={title} className="w-full" />
      </figure>
      <div className="flex flex-col items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <h4 className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm uppercase">{publisher}</span>
          </h4>
        </div>
        <hr className="h-[2px] w-full bg-slate-300 " />
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          autem labore! Cumque.
        </p>
        <Link to={`products/${id}`} className="btn-recipe">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
