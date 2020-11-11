import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { DataGrid, RowsProp, ColDef } from "@material-ui/data-grid";
import { Redirect, useHistory } from "react-router-dom";
import { ScoreContext } from "../contexts/scoreContext";

export default YourScores = (props) => {
  const history = useHistory();
  const store = useContext(ScoreContext);
  const backToSubmit = () => {
    history.push("/");
  };
  let i = 0;
  const rows: RowsProp = store.scores.map((score) => {
    return {
      id: i++,
      col1: score.title,
      col2: "A",
      col3: score.ex,
      col4: score.score
    };
  });
  console.log(store.scores);

  // [
  //   { id: 1, col1: "Hello", col2: "World" },
  //   { id: 2, col1: "XGrid", col2: "is Awesome" },
  //   { id: 3, col1: "Material-UI", col2: "is Amazing" }
  // ];

  const columns: ColDef[] = [
    { field: "col1", headerName: "Song", width: 175 },
    { field: "col2", headerName: "Grade", width: 100 },
    { field: "col3", headerName: "exScore", width: 100 },
    { field: "col4", headerName: "Score", width: 125 }
  ];
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
  // return store.scores.map((score) => {
  //   return (
  //     <div>
  //       <h3>{score.title}</h3>
  //       <p>marv: {score.marvelous}</p>
  //       <p>perfect: {score.perfect}</p>
  //       <p>great: {score.great}</p>
  //       <p>good: {score.good}</p>
  //       <p>ok: {score.ok}</p>
  //       <p>miss: {score.miss}</p>
  //       <p>ex: {score.ex}</p>
  //     </div>
  //   );
  // });
};
