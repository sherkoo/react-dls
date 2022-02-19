import Button from "./Components/Buttons";
import Dropdown from "./Components/Dropdown";
import {FormText} from "./Components/Forms";
import { ButtonGroup } from "./Components/Buttons/button.style";
const mockData = ['one', 'two', 'thre', 'one', 'two', 'thre', 'one', 'two', 'thre', 'one', 'two', 'thre'];

function App() {
  return (
    <div className="App">
      <h1>Design system</h1>
      <hr />
      <h3>Buttons primary</h3>
      <ButtonGroup>
        <Button label="Large button" size="large" />
        <Button label="Medium button" size="medium" />
        <Button label="Small button" size="small" />
      </ButtonGroup>
      <hr />
      <h3>Buttons secondary</h3>
      <ButtonGroup>
        <Button label="Large button" size="large" type="secondary" />
        <Button label="Medium button" size="medium" type="secondary" />
        <Button label="Small button" size="small" type="secondary" />
      </ButtonGroup>
      <hr />
      <h3>Buttons disabled</h3>
      <ButtonGroup size="large">
        <Button label="Large button" size="large" type="disabled" />
        <Button label="Medium button" size="medium" type="disabled" />
        <Button label="Small button" size="small" type="disabled" />
      </ButtonGroup>
      <hr />
      <h3>Buttons ghost</h3>
      <ButtonGroup>
        <Button label="Large button" size="large" type="ghost" />
        <Button label="Medium button" size="medium" type="ghost" />
        <Button label="Small button" size="small" type="ghost" />
      </ButtonGroup>
      <hr />
      <h3>Buttons Error</h3>
      <ButtonGroup>
        <Button label="Large button" size="large" type="error" />
        <Button label="Medium button" size="medium" type="error" />
        <Button label="Small button" size="small" type="error" />
      </ButtonGroup>
      <h3>Buttons Success</h3>
      <ButtonGroup>
        <Button label="Large button" size="large" type="success" />
        <Button label="Medium button" size="medium" type="success" />
        <Button label="Small button" size="small" type="success" />
      </ButtonGroup>

      <hr />

      <h1>Dropdowns</h1>
      <ButtonGroup size="large" direction="row">
        <Dropdown label="Dropdown" data={mockData} />
        <Dropdown label="Dropdown" data={mockData} />
        <Dropdown label="Dropdown" data={mockData} />
      </ButtonGroup>

      <hr />
      <div>
        <FormText label="Form label" type="text" />
        <FormText label="Form label" type="password" />
        <FormText label="Form label" type="email" />
      </div>
    </div>
  );
}

export default App;
