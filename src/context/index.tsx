import { ReactNode, createContext, useState } from "react";
import { string, z } from "zod";
import useDebounce from "../hooks/useDebouce";
import useFetch from "../hooks/useFetch";

const searchList = [
  "carrot",
  "broccoli",
  "asparagus",
  "cauliflower",
  "corn",
  "cucumber",
  "green",
  "pepper",
  "lettuce",
  "mushrooms",
  "onion",
  "potato",
  "pumpkin",
  "red",
  "pepper",
  "tomato",
  "beetroot",
  "brussel",
  "sprouts",
  "peas",
  "zucchini",
  "radish",
  "sweet",
  "potato",
  "artichoke",
  "leek",
  "cabbage",
  "celery",
  "chili",
  "garlic",
  "basil",
  "coriander",
  "parsley",
  "dill",
  "rosemary",
  "oregano",
  "cinnamon",
  "saffron",
  "green",
  "bean",
  "bean",
  "chickpea",
  "lentil",
  "apple",
  "apricot",
  "avocado",
  "banana",
  "blackberry",
  "blackcurrant",
  "blueberry",
  "boysenberry",
  "cherry",
  "coconut",
  "fig",
  "grape",
  "grapefruit",
  "kiwifruit",
  "lemon",
  "lime",
  "lychee",
  "cheese",
  "mandarin",
  "mango",
  "melon",
  "nectarine",
  "orange",
  "papaya",
  "passion",
  "fruit",
  "peach",
  "pear",
  "pineapple",
  "plum",
  "pomegranate",
  "quince",
  "raspberry",
  "strawberry",
  "watermelon",
  "salad",
  "pizza",
  "pasta",
  "popcorn",
  "lobster",
  "steak",
  "bbq",
  "pudding",
  "hamburger",
  "pie",
  "cake",
  "sausage",
  "tacos",
  "kebab",
  "poutine",
  "seafood",
  "chips",
  "fries",
  "masala",
  "paella",
  "som",
  "tam",
  "chicken",
  "toast",
  "marzipan",
  "tofu",
  "ketchup",
  "hummus",
  "chili",
  "maple",
  "syrup",
  "parma",
  "ham",
  "fajitas",
  "champ",
  "lasagna",
  "poke",
  "chocolate",
  "croissant",
  "arepas",
  "bunny",
  "chow",
  "pierogi",
  "donuts",
  "rendang",
  "sushi",
  "ice",
  "cream",
  "duck",
  "curry",
  "beef",
  "goat",
  "lamb",
  "turkey",
  "pork",
  "fish",
  "crab",
  "bacon",
  "ham",
  "pepperoni",
  "salami",
  "ribs",
];

export type GlobalContextProps = {
  searchTerm: string;
  searchList: string[];
  searchTermDebounced: string;
  setSearchTerm: (term: string) => void;
  searchRecipes: RecipeProps[] | undefined;
  isLoading: boolean;
  error: string | null;
};

export const RecipeSchema = z.object({
  id: string(),
  title: string().min(5, {
    message: "Title must be atleast 5 characters long!",
  }),
  publisher: string().min(5, {
    message: "Title must be atleast 5 characters long!",
  }),
  image_url: string().url(),
});

export type RecipeProps = z.infer<typeof RecipeSchema>;

export const GlobalContext = createContext<GlobalContextProps | null>(null);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchTermDebounced = useDebounce(searchTerm, 500);

  const { data, error, isLoading } = useFetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchTermDebounced}`,
  );

  const searchRecipes = data?.data?.recipes;

  return (
    <GlobalContext.Provider
      value={{
        searchTerm,
        searchList,
        setSearchTerm,
        searchRecipes,
        searchTermDebounced,
        isLoading,
        error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
