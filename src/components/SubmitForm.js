import React, { useState, useEffect, useContext } from "react";
import { Button } from "@material-ui/core";
import { useHistory, Redirect, Link } from "react-router-dom";
import { ScoreContext } from "../contexts/scoreContext";

export default function submitForm() {
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
    if (score.ex && exscore == score.ex) {
      console.log(`you submitted ${score}`);
      store.setScores(() => {
        return [...store.scores, score];
      });
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
      <label for="title">Song Title</label>
      <input type="text" name="title" label="title" onChange={handleChange} />
      <br />
      <label for="marv">Score</label>
      <input type="number" label="score" name="score" onChange={handleChange} />
      <br />
      <label for="marv">Marvelous</label>
      <input
        type="number"
        label="marv"
        name="marvelous"
        onChange={handleChange}
      />
      <br />
      <label for="perfect">Perfect</label>
      <input
        type="number"
        label="Perfect"
        name="perfect"
        onChange={handleChange}
      />
      <br />
      <label for="great">Great</label>
      <input type="number" label="great" name="great" onChange={handleChange} />
      <br />
      <label for="good">Good</label>
      <input type="number" label="good" name="good" onChange={handleChange} />
      <br />
      <label for="ok">O.K.</label>
      <input type="number" label="ok" name="ok" onChange={handleChange} />
      <br />
      <label for="miss">Miss</label>
      <input type="number" label="miss" name="miss" onChange={handleChange} />
      <br />
      <label for="ex">EX SCORE</label>
      <input type="number" label="ex" name="ex" onChange={handleChange} />
      <br />
      <input type="file" label="image" name="image" onChange={onFileChange} />
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
}
