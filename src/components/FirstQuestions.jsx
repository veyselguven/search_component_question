/* 

Initial Setup:
  Let an array of strings called fruits,foor example : ["apple","banana","cherry"...]
  Display this list in the UI

Search Input:
  Use the provided input fields
  As the user types into input filter the displayed list to include only those items that

Real-Time Filtering:
  The list should  update as soon as the user types into search box without needing to submit
  
No Matches:
  Display a friendly message if no items match the search term
*/

import { useState } from "react";

function FirstQuestions() {
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cramberry",
    "Date",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "GrapeFurit",
  ];

  const [fruitsData, setfruitsData] = useState(fruits);
  const [searchTerm, serSearchTerm] = useState("");

  const handleInputChange = (e) => {
    serSearchTerm(e.target.value);
    console.log(searchTerm);
  };
  const fruitsDataFiltered = fruitsData.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search Here....."
        onChange={handleInputChange}
      />
      {fruitsDataFiltered.length > 0 ? (
        fruitsDataFiltered.map((fruit, index) => {
          return (
            <div key={index}>
              <p>{fruit}</p>
            </div>
          );
        })
      ) : (
        <p>No fruits match your search term.</p>
      )}
    </div>
  );
}

export default FirstQuestions;
