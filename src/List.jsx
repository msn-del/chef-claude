
export default function List(props){
    
    return (
        <>
        {props.list.length > 0 && <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{props.list}</ul>
                    {props.list.length> 3 && <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={props.getRecipe}>Get a recipe</button>
                    </div>}
                </section>}
            
    
        </>
    )
    
}