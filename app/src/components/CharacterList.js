import React, { useState } from "react";
import { connect } from "react-redux";

import Character from "./Character";

function CharacterList(props) {
  return (
    <div className="characterBox">
      {props.characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters : state.characters,
  };
};

export default connect(mapStateToProps, {})(CharacterList);
