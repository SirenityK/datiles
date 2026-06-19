import colors from "tailwindcss/colors";

export enum PageRefs {
  reasons = "reasons",
  reasonsHash = `/#${PageRefs.reasons}`,
  joinUs = "how-to-contribute",
  joinUsHash = `/#${PageRefs.joinUs}`,
  contact = "/contact",
}

export const Palette = {
  red: "#c76662",
  yellow: "#b98555",
  green: "#8fa044",
  blue: "#6f7975",
  colors,
};

export const description =
  "Tu donación de higos puede hacer la diferencia en nuestra comunidad";
