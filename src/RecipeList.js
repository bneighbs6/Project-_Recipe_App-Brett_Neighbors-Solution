import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({recipes, deleteRecipe}) { //uses recipes and RecipeDelete as props
  const rows = recipes.map((recipe, index) => ( //create the table rows using map and the RecipeViewer information
    <RecipeView
      key={index}
      recipe={recipe}
      deleteRecipe={() => deleteRecipe(index)}/>
  )); 

  return ( //return the table headers and use rows in tbody to finish table
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableRows">
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;



  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked