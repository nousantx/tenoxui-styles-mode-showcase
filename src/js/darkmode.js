// defining state between lightmode and darkmode
const styles = {
  light: {
    ":root": "[--dark]-#e0e4e8 [--light]-#161a1e [--text-para]-#3f4952 [--primary]-#e9085f"
  },
  dark: {
    ":root": "[--dark]-#161a1e [--light]-#e0e4e8 [--text-para]-#c7cdd4 [--primary]-#ccf654"
  }
};

// initial dark mode state
let darkMode = true;

const darkModeToggler = () => {
  // change the value of darkMode
  darkMode = !darkMode;

  // change the darkmode icon
  document.getElementById("darkmode-icon").innerHTML = darkMode ? "nights_stay" : "light_mode";

  // make conditional for darkMode state
  const stateNow = darkMode ? styles.dark : styles.light;

  // finally, apply the styles according the state using `makeStyles`
  makeStyles(stateNow);
};
