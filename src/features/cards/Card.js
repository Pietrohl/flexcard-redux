import React, { useState } from "react";
import { useSelector } from "react-redux";
import { cardsSelector } from "./cards.slice";

export default function Card({ id }) {
  const cards = useSelector(cardsSelector)
    const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
