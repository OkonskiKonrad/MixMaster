import {useLoaderData, Link} from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage.js";

const singleCocktailUrl =
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async({params}) => {
    const {id} = params
    const response = await axios.get(`${singleCocktailUrl}${id}`);
    console.log(response)
    return null;
};

const Cocktail = () => {
    return (
        <h1>Cocktail</h1>
    )
}
export default Cocktail;