import useLocalStorage from "../hooks/useLocalStorage";

function Form() {
  const [fName, setFName] = useLocalStorage("fName", "");
  const [lName, setLName] = useLocalStorage("lName", "");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const handleSubmit = () => {
    console.log("Submitted");
  };

  const themeButtonClicked = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className={theme}>
        First Name:{" "}
        <input
          type="text"
          name="fName"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <br />
        Last Name:{" "}
        <input
          type="text"
          name="lName"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />
        <br />
        <button type="button" onClick={themeButtonClicked}>
          Switch to {theme === "light" ? "dark" : "light"} theme!
        </button>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Form;
