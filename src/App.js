import Button from "./Components/Buttons";
import Dropdown from "./Components/Dropdown";
import { FormText } from "./Components/Forms";
import { ButtonGroup } from "./Components/Buttons/button.style";
import { H1, H2, H3, Paragraph, Label } from "./Components/Typography";
import { Table, TableHead, TableBody } from "./Components/Tables";
import CheckBox from "./Components/Checkbox";
import { NavigationLeft } from "./Components/Navigation";
import Messaging from "./Components/Messaging";
import warningIcon from "../src/Components/Messaging/icons/warning.svg";


const mockData = [
  "one",
  "two",
  "thre",
  "one",
  "two",
  "thre",
  "one",
  "two",
  "thre",
  "one",
  "two",
  "thre",
];

const tableData = [
  {
    items: ["one", "two", "three", "four"],
  },
  {
    items: ["one", "two", "three", "four"],
  },
  {
    items: ["one", "two", "three", "four"],
  },
];

function App() {
  const handleClick = () => {
    alert('button clicked')
  }

  return (
    <div className="App">
      <h1>Design system</h1>
      <hr />
      <h3>Buttons primary</h3>
      <ButtonGroup>
        <Button click={() => handleClick()} label="Large button" size="large" />
        <Button label="Medium button" size="medium" />
        <Button label="Small button" size="small" />
      </ButtonGroup>
      <hr />
      <h3>Buttons secondary</h3>
      <ButtonGroup>
        <Button click={() => handleClick()} label="Large button" size="large" type="secondary" />
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

      <hr />
      <div>
        <H1 label="Headline 1" />
        <H2 label="Headline 2" />
        <H3 label="Headline 3" />
        <Label label="Label" />
        <Paragraph label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquid enim odit aperiam commodi a officiis nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquid enim odit aperiam commodi a officiis nihil" />
        <Paragraph
          label=" 
        rem ipsum necessitatibus nemo fugiat, dolores suscipit, non nam amet. Fugit, numquam nemo!"
        />
      </div>
      <hr />
      <H1 label="Tables" />
      <Table
        head={["Table1", "Table2", "Table3", "Table4"]}
        align="left"
        body={tableData}
      />
      <Table
        head={["Table1", "Table2", "Table3", "Table4"]}
        align="right"
        body={tableData}
      />
      <hr />
      <H1 label="Checkbox" />
      <CheckBox click={() => handleClick()} label="Check box label" />
      <CheckBox label="Check box label" />
      <CheckBox />
      <div>
        <H1 label="Navigation" />
        <NavigationLeft />
      </div>
      <div>
        <hr />
        <H1 label="Messaging" />
        <Messaging type="info" icon={warningIcon} label="Default message" />
        <Messaging type="error" label="Error message" />
        <Messaging type="success" label="Success message" />
        <Messaging type="warning" label="Warning message" />
      </div>
    </div>
  );
}

export default App;
