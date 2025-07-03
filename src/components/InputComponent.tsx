import { useInput } from "hooks/useInput";
import { maxLen } from "utils/validators";

const InputComponent = () => {
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>useInput</h1>
      <input {...name} />
    </div>
  );
};

export default InputComponent;
