import React, { useState, useEffect, useContext } from "react";
import { Button } from "@material-ui/core";
import { useHistory, Redirect, Link } from "react-router-dom";
import { ScoreContext } from "../contexts/scoreContext";
import { yellow } from "@material-ui/core/colors";

export default function SubmitForm(){
  const history = useHistory();
  const store = useContext(ScoreContext);

  const [score, setScore] = useState({
    title: "",
    score: 0,
    marvelous: 0,
    perfect: 0,
    great: 0,
    good: 0,
    ok: 0,
    ex: 0,
    image: null
  });

  const handleChange = (event) => {
    setScore({
      ...score,
      [event.target.name]: event.target.value
    });
    console.log(score);
    console.log(store.setScores);
  };
  const onFileChange = (event) => {
    setScore({
      ...score,
      image: URL.createObjectURL(event.target.files[0])
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const exscore =
      score.marvelous * 3 + score.perfect * 2 + score.great * 1 + score.ok * 3;
      //check if valid score
    if (score.ex && exscore == score.ex) {
      console.log(`you submitted ${score}`);
      store.setScores(() => {
        return [...store.scores, score];
      });
      //store scores in localStorage
      localStorage.setItem("scores", JSON.stringify(store.scores))
      console.log("scores:", store.scores);
      history.push("/YourScores");
    } else if (score.ex) {
      console.log(`your score is invalid ${score.ex}`);
    } else {
      setScore({
        ...score,
        ex: exscore
      });
    }
  };

  return (
    <form>
      <h1>Submit a Score</h1>
      <div className="form">
        <div className="formLabels">
          <label for="title">Song Title</label>
          <label for="marv">Score</label>
          <label for="marv" className="marv">MARVELOUS</label>
          <label for="perfect" className="perfect">PERFECT</label>
          <label for="great" className="great">GREAT</label>
          <label for="good" className="good" >GOOD</label>
          <label for="ok" className="ok">O.K.</label>
          <label for="miss" className="miss">MISS</label>
          <label for="ex" className="ex">EX SCORE</label>
        </div>
        <div className="formInput">
          <input type="text" name="title" label="title" onChange={handleChange} />
          <br />
          <input type="number" label="score" name="score" onChange={handleChange} />
          <br />
          <input
            type="number"
            label="marv"
            name="marvelous"
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            label="Perfect"
            name="perfect"
            onChange={handleChange}
          />
          <br />
          <input type="number" label="great" name="great" onChange={handleChange} />
          <br />
          <input type="number" label="good" name="good" onChange={handleChange} />
          <br />
          <input type="number" label="ok" name="ok" onChange={handleChange} />
          <br />
          <input type="number" label="miss" name="miss" onChange={handleChange} />
          <br />
          <input type="number" label="ex" name="ex" onChange={handleChange} />
          <br />
          <input type="file" label="image" name="image" onChange={onFileChange} />
          
        </div>
      </div>
      <Button variant="contained" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
    </form>
  );
}

