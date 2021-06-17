# Password Strength Checker

## Pre-Requisites

* Install node
* Install nodemon globally
* Install npm

## Clone the Project
git clone https://github.com/nat021295/password-strength-checker.git

## Setup .env
### In the project directory you can run: 
* copy .env.template .env (cmd)
* cp .env.template .env (linux)
* npm install -y

## Available Scripts
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Testing

### Writing Unit Tests

##### Snapshot Testing

This tests are written to make sure that there are no UI changes that are unexpected. According to the [Jest](https://jestjs.io/docs/en/snapshot-testing) documentation:

> A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.

Example:

Given a `Heading` component

```javascript
const Heading = ({ children }) => <h1>{children}</h1>;
```

Snapshot test can be like this:

```javascript
// Heading.test.js
describe("<Heading />", () => {
  it("should match the snapshot", () => {
    const {
      container: { firstChild },
    } = render(<Heading>Title</Heading>);
    expect(firstChild).toMatchSnapshot();
  });
});
```

If there is no existing snapshot from this test, it will automatically create a `__snapshots__` folder. Else, if something has changed in the Heading component, ie. added class to `h1`, the test will fail. In order to update the snapshot just run this command:

##### Behavior Testing

These are component tests that mimics user behavior. It is based on [React Testing Library principle](https://github.com/testing-library/react-testing-library):

> The more your tests resemble the way your software is used, the more confidence they can give you.

For example you have this `InputField` Component:

```javascript
const InputField = () => {
  const [error, setError] = useState(null);
  const handleValidate = (e) => {
    const value = e.target.value;
    if(value == "") setError("Cannot be empty.");
    else setError(null);
  }
  return(
    <div>
      {error && <span>{error}</span>
      <input type="text" placeholder="Name" onBlur={handleValidate}>
    </div>
  );
}
```

Behavior test can be like this:

```javascript
it("should show error message onBlur when empty", () => {
  const { getByPlaceholder, getByText } = render(<InputField />);
  const field = getByPlaceholderText("Name");
  fireEvent.change(field, { target: { value: "" } });
  fireEvent.blur(field);
  expect(getByText("Cannot be empty.")).toBeTruthy();
});
```


### Running Tests

To run all the unit tests, you can run:

```
npm run test
```

### Code Coverage

To see the code coverage report, run this command:

```
npm run test:coverage
```

This command will output the coverage results in the command line and a `coverage` folder where you can see the coverage details per `.js` file. You can open this in your browser by opening `index.html` from the `./coverage/lcov-report` folder.
