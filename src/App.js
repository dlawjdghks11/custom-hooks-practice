import { useInput } from "./hooks/useInput";
import { maxLen } from "./utils/validators";

function App() {
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <input {...name} />
    </div>
  );
}

export default App;
