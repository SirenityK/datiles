import colors from "tailwindcss/colors";

export enum PageRefs {
  reasons = "reasons",
  reasonsHash = `/#${PageRefs.reasons}`,
  joinUs = "how-to-contribute",
  joinUsHash = `/#${PageRefs.joinUs}`,
  contact = "/contact",
}

export const Palette = {
  red: colors.red[500],
  yellow: colors.yellow[500],
  green: colors.green[500],
  blue: colors.blue[500],
  colors,
};

export const description =
  "Tu generosidad puede hacer la diferencia en nuestra comunidad";
