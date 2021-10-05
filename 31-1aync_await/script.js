const getIDs = async() =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);
        }, 1500);
    });

const getRecipe = async(recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (ID) => {
                const recipe = {
                    title: "Fresh tomato pasta",
                    publisher: "Pinchas Hodadad",
                };
                resolve(`${ID}: ${recipe.title}`);
            },
            1500,
            recipeID
        );
    });
};
async function order() {
    try {
        const ids = await getIDs();
        console.log(ids);
        const recipe = await getRecipe(ids[0]);
        console.log(recipe);
    } catch (error) {
        console.log(error);
    }
}
order();