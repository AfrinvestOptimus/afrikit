var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _reactNativeRemixIcon=_interopRequireDefault(require("react-native-remix-icon"));var _colors=_interopRequireDefault(require("afrikit-shared/dist/colors"));var _classnames=_interopRequireDefault(require("../../utilities/classnames"));var _getInitials=_interopRequireDefault(require("../../utilities/getInitials"));var _avatar=require("./avatar");var _jsxRuntime=require("react-native-css-interop/jsx-runtime");var AppAvatar=function AppAvatar(_ref){var _ref$size=_ref.size,size=_ref$size===void 0?4:_ref$size,_ref$variant=_ref.variant,variant=_ref$variant===void 0?'solid':_ref$variant,_ref$color=_ref.color,color=_ref$color===void 0?'neutral':_ref$color,_ref$highContrast=_ref.highContrast,highContrast=_ref$highContrast===void 0?false:_ref$highContrast,_ref$fallBack=_ref.fallBack,fallBack=_ref$fallBack===void 0?'initials':_ref$fallBack,_ref$initials=_ref.initials,initials=_ref$initials===void 0?'':_ref$initials,imageUrl=_ref.imageUrl,_ref$numberOfInitials=_ref.numberOfInitials,numberOfInitials=_ref$numberOfInitials===void 0?1:_ref$numberOfInitials;var avatarSizeStyle=_avatar.sizeStyles[size];var textColor=highContrast?_avatar.highContrastTextColors[color][variant]:_avatar.textColors[color][variant];var avatarColor=highContrast?_avatar.highContrastAvatarColors[color][variant]:_avatar.avatarColors[color][variant];var textSizeStyle=_avatar.textSizes[size];var iconSize=_avatar.iconSizes[size];var renderAvatar=function renderAvatar(){switch(fallBack){case'image':return imageUrl?(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:(0,_jsxRuntime.jsx)(_reactNative.View,{className:`${avatarSizeStyle}  flex items-center justify-center`,children:(0,_jsxRuntime.jsx)(_reactNative.Image,{source:{uri:imageUrl},className:avatarSizeStyle,resizeMode:"cover"})})}):null;case'initials':return(0,_jsxRuntime.jsx)(_reactNative.View,{className:`${(0,_classnames.default)(avatarSizeStyle,avatarColor)}flex items-center justify-center`,children:(0,_jsxRuntime.jsx)(_reactNative.Text,{className:`${(0,_classnames.default)(textSizeStyle,textColor)}`,children:(0,_getInitials.default)(initials,numberOfInitials)})});case'icon':return(0,_jsxRuntime.jsx)(_reactNative.View,{className:`${(0,_classnames.default)(avatarSizeStyle,avatarColor)} flex items-center justify-center`,children:(0,_jsxRuntime.jsx)(_reactNativeRemixIcon.default,{name:"user-6-line",size:iconSize,color:_colors.default.light.amber1})});default:return null;}};return(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:renderAvatar()});};var _default=exports.default=AppAvatar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdE5hdGl2ZSIsIl9yZWFjdE5hdGl2ZVJlbWl4SWNvbiIsIl9jb2xvcnMiLCJfY2xhc3NuYW1lcyIsIl9nZXRJbml0aWFscyIsIl9hdmF0YXIiLCJfanN4UnVudGltZSIsIkFwcEF2YXRhciIsIl9yZWYiLCJfcmVmJHNpemUiLCJzaXplIiwiX3JlZiR2YXJpYW50IiwidmFyaWFudCIsIl9yZWYkY29sb3IiLCJjb2xvciIsIl9yZWYkaGlnaENvbnRyYXN0IiwiaGlnaENvbnRyYXN0IiwiX3JlZiRmYWxsQmFjayIsImZhbGxCYWNrIiwiX3JlZiRpbml0aWFscyIsImluaXRpYWxzIiwiaW1hZ2VVcmwiLCJfcmVmJG51bWJlck9mSW5pdGlhbHMiLCJudW1iZXJPZkluaXRpYWxzIiwiYXZhdGFyU2l6ZVN0eWxlIiwic2l6ZVN0eWxlcyIsInRleHRDb2xvciIsImhpZ2hDb250cmFzdFRleHRDb2xvcnMiLCJ0ZXh0Q29sb3JzIiwiYXZhdGFyQ29sb3IiLCJoaWdoQ29udHJhc3RBdmF0YXJDb2xvcnMiLCJhdmF0YXJDb2xvcnMiLCJ0ZXh0U2l6ZVN0eWxlIiwidGV4dFNpemVzIiwiaWNvblNpemUiLCJpY29uU2l6ZXMiLCJyZW5kZXJBdmF0YXIiLCJqc3giLCJGcmFnbWVudCIsImNoaWxkcmVuIiwiVmlldyIsImNsYXNzTmFtZSIsIkltYWdlIiwic291cmNlIiwidXJpIiwicmVzaXplTW9kZSIsImNsYXNzTmFtZXMiLCJUZXh0IiwiZ2V0SW5pdGlhbHMiLCJkZWZhdWx0IiwibmFtZSIsImNvbG9ycyIsImxpZ2h0IiwiYW1iZXIxIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vbW9sZWN1bGVzL0FwcEF2YXRhci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW1hZ2UsIFRleHQsIFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnXG5pbXBvcnQgUmVtaXhJY29uIGZyb20gJ3JlYWN0LW5hdGl2ZS1yZW1peC1pY29uJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICdhZnJpa2l0LXNoYXJlZC9kaXN0L2NvbG9ycydcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJy4uLy4uL3V0aWxpdGllcy9jbGFzc25hbWVzJ1xuaW1wb3J0IGdldEluaXRpYWxzIGZyb20gJy4uLy4uL3V0aWxpdGllcy9nZXRJbml0aWFscydcbmltcG9ydCB7XG4gIEFwcEF2YXRhclByb3BzLFxuICBhdmF0YXJDb2xvcnMsXG4gIGhpZ2hDb250cmFzdEF2YXRhckNvbG9ycyxcbiAgaGlnaENvbnRyYXN0VGV4dENvbG9ycyxcbiAgaWNvblNpemVzLFxuICBzaXplU3R5bGVzLFxuICB0ZXh0Q29sb3JzLFxuICB0ZXh0U2l6ZXMsXG59IGZyb20gJy4vYXZhdGFyJ1xuXG5jb25zdCBBcHBBdmF0YXI6IFJlYWN0LkZDPEFwcEF2YXRhclByb3BzPiA9ICh7XG4gIHNpemUgPSA0LFxuICB2YXJpYW50ID0gJ3NvbGlkJyxcbiAgY29sb3IgPSAnbmV1dHJhbCcsXG4gIGhpZ2hDb250cmFzdCA9IGZhbHNlLFxuICBmYWxsQmFjayA9ICdpbml0aWFscycsXG4gIGluaXRpYWxzID0gJycsXG4gIGltYWdlVXJsLFxuICBudW1iZXJPZkluaXRpYWxzID0gMSxcbn0pID0+IHtcbiAgY29uc3QgYXZhdGFyU2l6ZVN0eWxlID0gc2l6ZVN0eWxlc1tzaXplXVxuICBjb25zdCB0ZXh0Q29sb3IgPSBoaWdoQ29udHJhc3RcbiAgICA/IGhpZ2hDb250cmFzdFRleHRDb2xvcnNbY29sb3JdW3ZhcmlhbnRdXG4gICAgOiB0ZXh0Q29sb3JzW2NvbG9yXVt2YXJpYW50XVxuICBjb25zdCBhdmF0YXJDb2xvciA9IGhpZ2hDb250cmFzdFxuICAgID8gaGlnaENvbnRyYXN0QXZhdGFyQ29sb3JzW2NvbG9yXVt2YXJpYW50XVxuICAgIDogYXZhdGFyQ29sb3JzW2NvbG9yXVt2YXJpYW50XVxuICBjb25zdCB0ZXh0U2l6ZVN0eWxlID0gdGV4dFNpemVzW3NpemVdXG5cbiAgY29uc3QgaWNvblNpemUgPSBpY29uU2l6ZXNbc2l6ZV1cblxuICBjb25zdCByZW5kZXJBdmF0YXIgPSAoKSA9PiB7XG4gICAgc3dpdGNoIChmYWxsQmFjaykge1xuICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICByZXR1cm4gaW1hZ2VVcmwgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxWaWV3IGNsYXNzTmFtZT17YCR7YXZhdGFyU2l6ZVN0eWxlfSAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgfT5cbiAgICAgICAgICAgICAgPEltYWdlIHNvdXJjZT17eyB1cmk6IGltYWdlVXJsIH19IGNsYXNzTmFtZT17YXZhdGFyU2l6ZVN0eWxlfSByZXNpemVNb2RlPVwiY292ZXJcIiAvPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogbnVsbFxuICAgICAgY2FzZSAnaW5pdGlhbHMnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZXMoYXZhdGFyU2l6ZVN0eWxlLCBhdmF0YXJDb2xvcil9ZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgfT5cbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lcyh0ZXh0U2l6ZVN0eWxlLCB0ZXh0Q29sb3IpfWB9PlxuICAgICAgICAgICAgICB7Z2V0SW5pdGlhbHMoaW5pdGlhbHMsIG51bWJlck9mSW5pdGlhbHMpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgKVxuICAgICAgY2FzZSAnaWNvbic6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lcyhhdmF0YXJTaXplU3R5bGUsIGF2YXRhckNvbG9yKX0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgfT5cbiAgICAgICAgICAgIDxSZW1peEljb24gbmFtZT1cInVzZXItNi1saW5lXCIgc2l6ZT17aWNvblNpemV9IGNvbG9yPXtjb2xvcnMubGlnaHQuYW1iZXIxfSAvPlxuICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPD57cmVuZGVyQXZhdGFyKCl9PC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcEF2YXRhclxuIl0sIm1hcHBpbmdzIjoibUtBQUEsSUFBQUEsTUFBQSxDQUFBQyxzQkFBQSxDQUFBQyxPQUFBLFdBQ0EsSUFBQUMsWUFBQSxDQUFBRCxPQUFBLGlCQUNBLElBQUFFLHFCQUFBLENBQUFILHNCQUFBLENBQUFDLE9BQUEsNkJBQ0EsSUFBQUcsT0FBQSxDQUFBSixzQkFBQSxDQUFBQyxPQUFBLGdDQUNBLElBQUFJLFdBQUEsQ0FBQUwsc0JBQUEsQ0FBQUMsT0FBQSxnQ0FDQSxJQUFBSyxZQUFBLENBQUFOLHNCQUFBLENBQUFDLE9BQUEsaUNBQ0EsSUFBQU0sT0FBQSxDQUFBTixPQUFBLGFBU2lCLElBQUFPLFdBQUEsQ0FBQVAsT0FBQSx5Q0FFakIsR0FBTSxDQUFBUSxTQUFtQyxDQUFHLFFBQXRDLENBQUFBLFNBQW1DQSxDQUFBQyxJQUFBLENBU25DLEtBQUFDLFNBQUEsQ0FBQUQsSUFBQSxDQVJKRSxJQUFJLENBQUpBLElBQUksQ0FBQUQsU0FBQSxVQUFHLENBQUMsQ0FBQUEsU0FBQSxDQUFBRSxZQUFBLENBQUFILElBQUEsQ0FDUkksT0FBTyxDQUFQQSxPQUFPLENBQUFELFlBQUEsVUFBRyxPQUFPLENBQUFBLFlBQUEsQ0FBQUUsVUFBQSxDQUFBTCxJQUFBLENBQ2pCTSxLQUFLLENBQUxBLEtBQUssQ0FBQUQsVUFBQSxVQUFHLFNBQVMsQ0FBQUEsVUFBQSxDQUFBRSxp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