import React from "react";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie } from "../services/fakeMovieService";

import Joi from "joi-browser";

class NewMovie extends Form {
  state = {
    data: {
      title: "",
      numberInStock: "",
      rate: "",
    },
    genres: [{ id: "genid", name: "" }, ...getGenres()],
    errors: {},
    currentGenre: { id: "", name: "" },
  };

  componentDidMount = () => {
    const genres = [...getGenres()];
    console.log(genres);
    this.setState({ genres });
  };

  schema = {
    title: Joi.string().required().label("Title"),
    //genres: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .label("Number In Stock")
      .min(0)
      .max(100),
    rate: Joi.number().required().label("Rate").min(0).max(10),
  };

  doSubmit = () => {
    const movie = {
      name: this.state.data.title,
      genre: this.state.currentGenre,
      numberInStock: this.state.data.numberInStock,
      rate: this.state.data.rate,
    };
    console.log(movie);
    saveMovie(movie);
    this.props.history.push("/movies/new");
  };

  handleGenre = (genre) => {
    //console.log();
    this.setState({ currentGenre: genre });
  };

  render() {
    return (
      <div>
        <h1>New Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          <div className="form-group">
            <label htmlFor="genres">Genres</label>
            <select name="genres" id="genres" className="form-control">
              {this.state.genres.map((genre) => (
                <option onClick={() => this.handleGenre(genre)} id={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("rate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
