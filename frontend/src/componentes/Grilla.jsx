import CardPizza from "./CardPizza"
import { useState, useEffect } from "react";

const Grilla = () => {
        const [pizza, setPizza] = useState([]);
  
  const urlPizza = "http://localhost:5001/api/pizzas/"

  const getData = async () => {
    const response = await fetch(urlPizza);
    const dataPizzas = await response.json();

    console.log('dataPizzas'   , dataPizzas);  
    setPizza(dataPizzas)
   
  };
  useEffect(() => {
    getData();
  }, []);
    return (
          <div className="container productos">
            <div className="row ms-auto" >
                {pizza.map((pizza) => (
                    <div className="col-md-4" key={pizza.id}>
                        <CardPizza
                            img={pizza.img}
                            name={pizza.name}
                            price={pizza.price}
                            ingredientes={pizza.ingredients.join(' , ')}
                            pizza={pizza}
                        />
                    </div>
                ))}
               
            </div>
            </div>
    )
}
export default Grilla