import React, { useState, useReducer } from "react";

import { itemReducer, initialItemState } from "../reducers/itemReducer";

const Items = () => {
  const [newItemText, setNewItemText] = useState();
  const [state, dispatch] = useReducer(itemReducer, initialItemState);
 
  const handleChanges = e => {
    setNewItemText(e.target.value);
  };

  return (
      
    <div>
      {!state.editing ? (
        <h1>
          {state.item}{" "}
          <button
            className="far fa-edit"
            onClick={e => {
              //console.log(e);
              dispatch({ type: "TOGGLE_EDITING" });
            }}
          />
        </h1>
      ) : (
        <div>
          <input
            className="item-input"
            type="text"
            name="newItemText"
            value={newItemText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_ITEM", payload: newItemText });
            }}
          >
            Update Item
          </button>
          <button
            onClick={() => {
              dispatch({ type: "DELETE_ITEM" });
            }}
          >
            Delete Item
          </button>
        </div>
      )}
    </div>
  );
};

export default Items;