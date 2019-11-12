import { Colors } from "@blueprintjs/core";

export const typeToColor = (type: string) => {
  let color;

  switch (type) {
    case "Diagnostic":
      color = Colors.BLUE4;
      break;

    case "Prescription":
      color = Colors.GREEN4;
      break;

    default:
      color = Colors.DARK_GRAY3;
      break;
  }

  return color;
};

export const typeToIcon = (type: string) => {
  let icon;

  switch (type) {
    case "Diagnostic":
      icon = "/src/assets/img/arkhn_logo_only_white.svg";
      break;

    case "Prescription":
      icon = "/src/assets/img/arkhn_logo_only_white.svg";
      break;

    default:
      icon = "/src/assets/img/arkhn_logo_only_white.svg";
      break;
  }

  return icon;
};
