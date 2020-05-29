/*
  Full Name:
  Student ID:

  Instructions:
    Follow the steps below. If you have any questions
    please feel free to use Slack to communicate. You
    are allowed to discuss the lab with other students
    but you ARE NOT permitted to copy/paste or share
    code.
  
  Rubric:
    Steps: 11.5 points
    Code Format: 10 points
    Github Link: 10 points

  NOTE: The code format and Github link marks are
    only awarded if the steps have been completed.
    (Code formatting is the visual structure of
      you code. I expect that you have used proper
      tabbing of nested structures so code readability
      is adequate.)
*/

/*
  Step 1 (2.5 points):
    Create an array that contains 4 people objects.
    Each object must have at least 2 properties.
*/
const person1 = {
    firstName: "Bob",
    lastName: "Doe"
};
const person2 = {
    firstName: "Jon",
    lastName: "Brown"
};
const person3 = {
    firstName: "Stu",
    lastName: "Jones"
};
const person4 = {
    firstName: "Mike",
    lastName: "Stone"
};
const people = [person1,person2,person3,person4];

/*
  Step 2 (6 points):
    Create an arrow function that accepts
    a destructured object as an argument. In the
    body of your function, console.log a string
    template utilizing the properties you
    destructured.
*/

const arrowFunction = (person) => {
    const {firstName, lastName} = person;
    console.log(`Hi my first name is ${firstname} and my last name is ${lastName}.`);
};

/*
  Step 3 (3 points):
    Loop over your array using a for/of loop.
    Call your arrow function passing the array item
    as an argument.
*/

for (let person in people) {
    arrowFunction(person);
};
