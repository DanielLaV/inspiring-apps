import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useState } from "react";
import "~/styles/global.css";

export default function Index() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [cards, setCards] = useState([])

  const meta: MetaFunction = () => {
    return [
      { title: "Flamingo Bingo" },
      { name: "description", content: "Let's play!" },
    ];
  };

  const handleSignIn = async () => {
    //TODO Make call to get-cards lambda and pass along email
    // const response = await fetch(api, { 'email': email });
    // const data = response.json();
    // const cardOrder = data['cardOrder'];
    // const cardStatus = data['cardStatus'];
    // setCards([]) //TODO Match the status with the order to be displayed.
    setIsSignedIn(true);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  function BingoCard() {
    return (
      <div>
        <p> Hello World</p>
        <ul>{cards.map((card, idx) => <li key={idx}>{card}</li>)}</ul>
      </div>
    );
  }

  function SignIn() {
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Flamingo Bingo</h1>
        <h3>Please enter your email:</h3>
        <form
          onSubmit={handleSignIn}
        >
          <input
            placeholder="email"
            type="text"
            name="email"
            onChange={updateEmail}
            required={true}
            value={email}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      {!isSignedIn ? <SignIn /> : <BingoCard />}
    </div>
  );
}
