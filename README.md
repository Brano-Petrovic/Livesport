# Pokemon application
This is a simple application written in JavaScript using [React](https://reactjs.org/).
We want you to come up with and write some tests. We've prepared whole devstack and set it up for you. All you need to do is to run the application and get familiar with it. It shows list of pokemons with pagination. You can click on one pokemon and see its details.
Then write some end to end test using [Cypress](https://www.cypress.io/).

### Requirements
* [node.js](https://nodejs.org/)
* browser
* text editor (notepad, [Visual Studio Code](https://code.visualstudio.com/))

### How to run application in browser
It is really simple. Clone the repository. Open command line and navigate to application root. Run ```npm i```. This installs all dependencies. It may take a while. Then run ```npm start```. It should build the application and open a web browser on page [http://localhost:3000](http://localhost:3000)
You can use application as you like and get familiar with it.

### Prepare test cases
There is a folder named *test_cases* in application root with one simple example test case. Come up with at least 2 other ones.

### Add test cases to Cypress
Go to folder *cypress/integrations* and add your test cases. Cypress is [well documented](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-Can-Be-Simple-Sometimes) so don't be afraid if you don't know it.

#### Run the tests
* Make sure your dev server is ip and running (you can run ```npm start``` to start it).
* Run ```npm run cypress:open``` to open Cypress GUI and run and debug individual tests.

### Fork this, commit all your progress and send us link to your repository :-)
- Make sure the repo with your solution remains **PRIVATE**, leaving it public will disqualify you automatically
- Add read access to our developers: daniel.tokar@livesporttv.cz, jonas.sevcik@livesporttv.cz, jan.liska@livesporttv.cz
