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
  return (
    <div>
      <input type="text" placeholder="Search Here....." />
    </div>
  );
}

export default FirstQuestions;
