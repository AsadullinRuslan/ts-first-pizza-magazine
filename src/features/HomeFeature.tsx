import React, { FC, useEffect, useState } from "react";
import AddPizzaForm from "../components/AddPizzaForm";
import TypePizza from "../models/Pizza";
import DisplayPizzas from "../components/DisplayPizzas";

const HomeFeature: FC = () => {
    const [pizzasList, setPizzasList] = useState<TypePizza[]>([]);

    const addPizza = (newPizza: TypePizza) => {
        const newPizzasList = [...pizzasList, newPizza];
        setPizzasList(newPizzasList);
        localStorage.setItem("pizzasState", JSON.stringify(newPizzasList));
    };

    const updatePizza = (newPizza: TypePizza) => {
        const newPizzasList = pizzasList.map((pizza) =>
            pizza.id === newPizza.id ? newPizza : pizza
        );
        setPizzasList(newPizzasList);
        localStorage.setItem("pizzasState", JSON.stringify(newPizzasList));
    };

    const deletePizza = (id: number) => {
        const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id);
        setPizzasList(newPizzasList);
        localStorage.setItem("pizzasState", JSON.stringify(newPizzasList));
    };

    console.log("pizzasList >>>> ", pizzasList);

    useEffect(() => {
      const pizzasList = localStorage.getItem('pizzasState')

      if(pizzasList) {
        setPizzasList(JSON.parse(pizzasList))
      }
    }, [])

    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">Наша пиццерия</span>
                <AddPizzaForm addPizza={addPizza} />
                <DisplayPizzas
                    pizzasList={pizzasList}
                    updatePizza={updatePizza}
                    deletePizza={deletePizza}
                />
            </div>
        </div>
    );
};

export default HomeFeature;
