import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Open Sans',
  palette: {
    primary1Color: Colors.lightBlue700,
    accent1Color: Colors.lightBlue700,
    textColor: Colors.lightBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.grey100,
    borderColor: Colors.grey400,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
  }
};