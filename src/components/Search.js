import React from "react";
import "../Search.css";
import { fetchSearchResults } from "../actions/index";
import { connect } from "react-redux";
import Card from "./Card";
import Loader from "../loader.gif";
// import PageNavigation from "./PageNavigation";

const images = {
  img2: {
    id: 2,
    link:
      "https://www.gameofthronesquote.com/images/robert-baratheon/robert-baratheon-ttm.jpg",
  },

  img5: {
    id: 5,
    link:
      "https://image.cnbcfm.com/api/v1/image/103750570-103750570.jpg?v=1529471986&w=1400&h=950",
  },

  img10: {
    id: 10,
    link:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*",
  },
};

const getRandomImage = () => {
  const keys = Object.keys(images);
  const randomIndex = keys[Math.floor(Math.random() * keys.length)];
  const img = images[randomIndex];

  return img;
};

class Search extends React.Component {
  componentDidMount() {
    this.props.fetchSearchResults("");
  }

  // handleOnInputChange = (event) => {
  //   const query = event.target.value;
  //   if (!query) {
  //     this.setState({
  //       query,
  //       results: {},
  //       message: "",
  //       totalPages: 0,
  //       totalResults: 0,
  //     });
  //   } else {
  //     this.setState({ query, loading: true, message: "" }, () => {
  //       this.fetchSearchResults(1, query);
  //     });
  //   }
  // };

  render() {
    const { query, message } = {};

    const { data } = this.props;
    // const loading = data.loading;
    const results = data.results;
    console.log("loading", data.loading);

    // const showPrevLink = 1 < currentPageNo;
    // const showNextLink = totalPages > currentPageNo;

    return (
      <div>
        <div className="container">
          {/*	Heading*/}
          <h2 className="heading">Game of Thrones Battle Web App</h2>
          {/* Search Input*/}
          <label className="search-label" htmlFor="search-input">
            <input
              type="text"
              name="query"
              value={query}
              id="search-input"
              placeholder="Search By Location.."
              onChange={(e) => this.props.fetchSearchResults(e.target.value)}
            />
            <i className="fa fa-search search-icon" aria-hidden="true" />
          </label>

          {/*	Error Message*/}
          {message && <p className="message">{message}</p>}
        </div>
        {/*	Loader*/}
        <img
          src={Loader}
          className={`search-loading ${data.loading ? "show" : "hide"}`}
          alt="loader"
        />
        {/*	Result*/}
        <div className="cards">
          {results.map((data) => {
            return (
              <Card
                AttackerImage={getRandomImage()}
                DefenderImage={getRandomImage()}
                battle_name={data.name}
                attacker={data.attacker_1}
                defender={data.defender_1}
                {...data}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps, {
  fetchSearchResults,
})(Search);
