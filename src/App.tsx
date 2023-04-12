import Button from "./UI/Button/Button";
import Input from "./UI/Form/Input/Input";

const App = () => {
  return (
    <div className="App">
      <div className="flex-col items-start justify-start">
        <Input
          type="checkbox"
          id="1"
          label={{ content: "Hello", position: "right" }}
        />
      </div>
    </div>
  );
};

export default App;
