import React from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import AttractionList from "../components/AttractionList";
import BackgroundSaver from "../components/BackgroundSaver";
import NetworkStatus from "../components/NetworkStatus";

const Home = ({ query, setQuery, category, setCategory, setLocation }) => (
  <>
    <NetworkStatus />
    <SearchBar query={query} onChange={setQuery} />
    <Filters selected={category} onChange={setCategory} />
    <AttractionList query={query} category={category} />
    <BackgroundSaver query={query} category={category} />
  </>
);

export default Home;
