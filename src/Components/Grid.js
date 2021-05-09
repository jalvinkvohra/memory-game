import React, { createRef, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMatched } from "../Redux/Actions/Game";
import { setSelectedCard } from "../Redux/Middlewares/Game";

const Grid = () => {
  const { cards, matched } = useSelector((state) => state);
  const dispatch = useDispatch();
  const refs = useRef([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    if (matched === -1) {
      console.log(selectedIds);
      selectedIds.forEach((id) => {
        refs.current[id].current.src = "images/clouds.jpg";
      });
    } else if (matched === 1) {
      selectedIds.forEach((id) => {
        // refs.current[id].current.src = "images/clouds.jpg";
        refs.current[id].current.remove();
      });
    }
    selectedIds.splice(0, selectedIds.length);
    setSelectedIds(selectedIds);
    dispatch(setMatched(0));
  }, [matched, selectedIds, dispatch, refs]);

  const onClick = (index) => {
    refs.current[index].current.src = cards[index].path;
    selectedIds.push(index);
    setSelectedIds(selectedIds);

    dispatch(setSelectedCard(cards[index]));
  };

  if (refs.length !== cards.length) {
    // add or remove refs
    refs.current = Array(cards.length)
      .fill()
      .map((_, i) => refs.current[i] || createRef());
  }

  return (
    <div className="grid">
      {cards.map((_, index) => {
        const key = index;
        return (
          <div className="card">
            <img
              key={key}
              src="images/clouds.jpg"
              alt="card"
              onClick={() => onClick(index)}
              ref={refs.current[index]}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
