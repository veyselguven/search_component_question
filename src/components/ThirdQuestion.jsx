import { useEffect, useState } from "react";
import "./index.css";
import { data } from "./data";

export default function ThirdQuesion() {
  const [searchDate, setSearchDate] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log("searchDate", searchDate);
    console.log("searchTerm", searchTerm);
    console.log("handleSearchTerm", handleSearchTerm);
  });

  const handleSearchTerm = () => {
    const filtered = searchDate.filter((search) => search.date === searchTerm);
    setFilteredData(filtered);
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="large"
          placeholder="5-January-2000"
          id="app-input"
          data-testid="app-input"
        />
        <button
          className=""
          id="submit-button"
          data-testid="submit-button"
          onClick={handleSearchTerm}
        >
          Search
        </button>
      </section>
      {filteredData.length > 0 ? (
        <ul
          className="mt-50 slide-up-fade-in styled"
          id="stockData"
          data-testid="stock-data"
        >
          {filteredData.map((data, index) => (
            <li key={index} className="py-10">
              <ul data-testid="stock-data">
                <li>Open: {data.open}</li>
                <li>Close: {data.close}</li>
                <li>High: {data.high}</li>
                <li>Low: {data.low}</li>
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="mt-50 slide-up-fade-in"
          id="no-result"
          data-testid="no-result"
        >
          <p>No data...</p>
        </div>
      )}
    </div>
  );
}
