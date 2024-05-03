import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    // danger: PaletteColor;
    // active: PaletteColor;
    // disabled: PaletteColor;
    // warn: PaletteColor;
    // export: PaletteColor;
    // inactive: PaletteColor;
    // btnBackground: PaletteColor;
    // licensegreen: PaletteColor;
    // bodyBGColor: PaletteColor;
    // primaryGreen: PaletteColor;
    // darkBgBrown: PaletteColor;
    // darkBgBrownBorder: PaletteColor;
    // listBgColor: PaletteColor;
    // listHoverColor: PaletteColor;
    // disabledselectColor: PaletteColor;
    // batteryRed: PaletteColor;
    // batteryGreen: PaletteColor;
    // batteryYellow: PaletteColor;
    // batteryBorderRed: PaletteColor;
    // batteryBorderGreen: PaletteColor;
    // batteryBorderGray: PaletteColor;
    // drawerBackground: PaletteColor;
  }

  interface PaletteOptions {
    // danger?: PaletteColorOptions;
    // active?: PaletteColorOptions;
    // disabled?: PaletteColorOptions;
    // warn?: PaletteColorOptions;
    // export?: PaletteColorOptions;
    // inactive?: PaletteColorOptions;
    // btnBackground?: PaletteColorOptions;
    // licensegreen?: PaletteColorOptions;
    // bodyBGColor?: PaletteColorOptions;
    // primaryGreen?: PaletteColorOptions;
    // darkBgBrown?: PaletteColorOptions;
    // darkBgBrownBorder?: PaletteColorOptions;
    // listBgColor?: PaletteColorOptions;
    // listHoverColor?: PaletteColorOptions;
    // disabledselectColor?: PaletteColorOptions;
    // batteryRed?: PaletteColorOptions;
    // batteryGreen?: PaletteColorOptions;
    // batteryYellow?: PaletteColorOptions;
    // batteryBorderRed?: PaletteColorOptions;
    // batteryBorderGreen?: PaletteColorOptions;
    // batteryBorderGray?: PaletteColorOptions;
    // drawerBackground?: PaletteColorOptions;
  }

  // eslint-disable-next-line no-unused-vars
  interface TypographyVariants {
    // transmitterHeading: React.CSSProperties;
    // transmitterSubHeading: React.CSSProperties;
    // transmitterInfoDetails: React.CSSProperties;
    // transmitterInfoSubDetails: React.CSSProperties;
    // receiverHeading: React.CSSProperties;
    // receiverCardTitle: React.CSSProperties;
    // receiverCardBatteryStatus: React.CSSProperties;
    // transmitterCardTitle: React.CSSProperties;
    // transmitterCardPowerStatus: React.CSSProperties;
    // transmitterDetailsTitle: React.CSSProperties;
    // transmitterSettingSectionTitle: React.CSSProperties;
    // transmitterSettingSubtext: React.CSSProperties;
    // transmitterDetailsSubTitle: React.CSSProperties;
    // transmitterDetailsContent: React.CSSProperties;
    // transmitterInfoButton: React.CSSProperties;
    // transmitterDetailsLabel: React.CSSProperties;
    // transmitterModeHelpText: React.CSSProperties;
    // transmitterDetailsInfo: React.CSSProperties;
    // transmitterDetailsHeader: React.CSSProperties;
    // transmitterDetailsIDetails: React.CSSProperties;
    // transmitterDetailsButtons: React.CSSProperties;
    // transmitterDetailsSlideoutScheduleButton: React.CSSProperties;
    // transmitterPermissionSliderHeader: React.CSSProperties;
    // transmitterDetailsInfoContainerHeader: React.CSSProperties;
    // transmitterDetailsInfoContainerContent: React.CSSProperties;
    // transmitterGroupTitles: React.CSSProperties;
    // receiverToolTipTitle: React.CSSProperties;
    // receiverToolTipDesc: React.CSSProperties;
    // receiverDetailsHeader: React.CSSProperties;
    // receiverDetailsBatteryIconStatus: React.CSSProperties;
    // transmitterDetailsTopLabel: React.CSSProperties;
    // receiverDetailsSlideoutSubLabel: React.CSSProperties;
    // receiverDetailsSlideoutBoxLabel: React.CSSProperties;
    // receiverDetailsSlideoutBoxText: React.CSSProperties;
    // receiverDetailsSlideouBoxContent: React.CSSProperties;
    // receiverDetailsSlideoutLabel: React.CSSProperties;
    // receiverDetailsSlideoutInfo: React.CSSProperties;
    // receiverDetailsSlideoutSubInfo: React.CSSProperties;
    // receiverDetailsSlideoutGraphLabel: React.CSSProperties;
    // receiverDetailsSlideoutGraphTooltip: React.CSSProperties;
    // receiverNotesLabel: React.CSSProperties;
    // receiverNotesAddBtn: React.CSSProperties;
    // receiverNotesDownloadBtn: React.CSSProperties;
    // receiverNotesTimestamp: React.CSSProperties;
    // receiverNotesInfo: React.CSSProperties;
    // notFoundMessage: React.CSSProperties;
    // powerDeliveryHeading: React.CSSProperties;
    // expandedGraphTitle: React.CSSProperties;
    // licenseWelcome: React.CSSProperties;
    // licenseDescription: React.CSSProperties;
    // modeHeader: React.CSSProperties;
    // modeSubHeader: React.CSSProperties;
    // versionDialogHeader: React.CSSProperties;
    // versionDialogContent: React.CSSProperties;
    // settingLabelHeader: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  // eslint-disable-next-line no-unused-vars
  interface TypographyVariantsOptions {
    // transmitterHeading: React.CSSProperties;
    // transmitterSubHeading: React.CSSProperties;
    // transmitterInfoDetails: React.CSSProperties;
    // transmitterInfoSubDetails: React.CSSProperties;
    // receiverHeading: React.CSSProperties;
    // receiverCardTitle: React.CSSProperties;
    // receiverCardBatteryStatus: React.CSSProperties;
    // transmitterCardTitle: React.CSSProperties;
    // transmitterCardPowerStatus: React.CSSProperties;
    // transmitterDetailsTitle: React.CSSProperties;
    // transmitterDetailsSubTitle: React.CSSProperties;
    // transmitterDetailsContent: React.CSSProperties;
    // transmitterSettingSectionTitle: React.CSSProperties;
    // transmitterSettingSubtext: React.CSSProperties;
    // transmitterInfoButton: React.CSSProperties;
    // transmitterDetailsLabel: React.CSSProperties;
    // transmitterModeHelpText: React.CSSProperties;
    // transmitterDetailsInfo: React.CSSProperties;
    // transmitterDetailsHeader: React.CSSProperties;
    // transmitterDetailsIDetails: React.CSSProperties;
    // transmitterDetailsButtons: React.CSSProperties;
    // transmitterDetailsSlideoutScheduleButton: React.CSSProperties;
    // transmitterPermissionSliderHeader: React.CSSProperties;
    // transmitterDetailsInfoContainerHeader: React.CSSProperties;
    // transmitterDetailsInfoContainerContent: React.CSSProperties;
    // transmitterGroupTitles: React.CSSProperties;
    // receiverToolTipTitle: React.CSSProperties;
    // receiverToolTipDesc: React.CSSProperties;
    // receiverDetailsHeader: React.CSSProperties;
    // receiverDetailsBatteryIconStatus: React.CSSProperties;
    // transmitterDetailsTopLabel: React.CSSProperties;
    // receiverDetailsSlideoutSubLabel: React.CSSProperties;
    // receiverDetailsSlideoutBoxLabel: React.CSSProperties;
    // receiverDetailsSlideoutBoxText: React.CSSProperties;
    // receiverDetailsSlideouBoxContent: React.CSSProperties;
    // receiverDetailsSlideoutLabel: React.CSSProperties;
    // receiverDetailsSlideoutInfo: React.CSSProperties;
    // receiverDetailsSlideoutSubInfo: React.CSSProperties;
    // receiverDetailsSlideoutGraphLabel: React.CSSProperties;
    // receiverDetailsSlideoutGraphTooltip: React.CSSProperties;
    // receiverNotesLabel: React.CSSProperties;
    // receiverNotesAddBtn: React.CSSProperties;
    // receiverNotesDownloadBtn: React.CSSProperties;
    // receiverNotesTimestamp: React.CSSProperties;
    // receiverNotesInfo: React.CSSProperties;
    // notFoundMessage: React.CSSProperties;
    // powerDeliveryHeading: React.CSSProperties;
    // expandedGraphTitle: React.CSSProperties;
    // licenseWelcome: React.CSSProperties;
    // licenseDescription: React.CSSProperties;
    // modeHeader: React.CSSProperties;
    // modeSubHeader: React.CSSProperties;
    // versionDialogHeader: React.CSSProperties;
    // versionDialogContent: React.CSSProperties;
    // settingLabelHeader: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
// declare module "@mui/material/Typography" {
//   // eslint-disable-next-line no-unused-vars
//   interface TypographyPropsVariantOverrides {
//     transmitterHeading: true;
//   }
// }

// declare module "@mui/material/Button" {
//     interface ButtonPropsColorOverrides {
//     }
// }

// declare module "@mui/material/Card" {
//     interface CardPropsColorOverrides {
//     }
// }

const AppTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 900,
      lg: 1285,
      xl: 1536,
    },
  },
});

export default AppTheme;
