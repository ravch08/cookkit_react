import { Link, useParams } from "react-router-dom";
import { number, string, z } from "zod";
import useFetch from "../../hooks/useFetch";

export const IngredientSchema = z.object({
  unit: string(),
  quantity: number().gte(0),
  description: string(),
});

export type IngredientProps = z.infer<typeof IngredientSchema>;

const RecipeDetail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
  );

  if (!data) return null;

  const {
    title,
    publisher,
    ingredients,
    servings,
    source_url,
    cooking_time,
    image_url,
  } = data.data.recipe;

  console.log(data.data.recipe);

  return (
    <main>
      <section aria-labelledby="Recipe Details">
        <div className="container">
          {error ? <h2>{error}</h2> : null}
          {isLoading ? <h2>Loading...</h2> : null}

          {data ? (
            <div className="flex items-start gap-12">
              <figure>
                <img src={image_url} alt={title} />
              </figure>

              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">{title}</h2>
                <div className="mt-2 flex items-center gap-2">
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
                  <span>{publisher}</span>
                </div>

                <h3>
                  <span className="text-lg font-semibold">Servings:</span>{" "}
                  {servings}
                </h3>
                <h3>
                  <span className="text-lg font-semibold">Cooking Time:</span>{" "}
                  {cooking_time} mins
                </h3>
                <h3 className="text-lg font-semibold">Ingredients:</h3>
                <ol className="list-decimal pl-6">
                  {ingredients && ingredients.length
                    ? ingredients?.map((item: IngredientProps, idx: number) => (
                        <li key={idx} className="py-2">
                          {item.description} :{" "}
                          <span className="font-semibold">
                            {item.quantity} qty
                          </span>
                        </li>
                      ))
                    : null}
                </ol>

                <Link to={source_url} target="_blank" className="btn-recipe">
                  Know More
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default RecipeDetail;
