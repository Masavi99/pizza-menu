import React from "react"
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];
function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}


function Header() {
    // const style = { color: "red", fontSize: '44px', textTransform: "uppercase " };
    const style = {};

    return (
        <header className="header">
            <h1 style={style}> React Pizza Co.</h1>
        </header>
    )
}

function Menu() {
    const pizzas = pizzaData;
    //const pizzas = [];
    const numPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>our menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian Cuisine.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name}
                            />
                        ))}
                    </ul>
                </>
            ) : <p>
                <p>We're still working on our menu.
                    Please Come back in few hours</p>
            </p>}
        </main>
    );
}
function Pizza({ pizzaObj }) {
    console.log(pizzaObj);
    // if (pizzaObj.soldOut)
    //     return null;
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>

            </div>
        </li>
    );
}
function Footer() {
    //logic 
    const hour = new Date().getHours();
    const openHour = 3;
    const closeHour = 24;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour) alert("we are currently open");
    // else alert("Sorry We are Closed");

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />
            ) :
                <p>
                    Sorry We are closed now.
                    store opens at {openHour}:00 am
                </p>
            }
            {/* {new Date().toLocaleTimeString()}.We're Currently Open */}
        </footer >

    );
    //return React.createElement("footer", null, "We are Currently Open !!")
}

function Order({ closeHour }) {
    return (
        <div className="order">
            <p>
                We're open Untill {closeHour}:00
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);