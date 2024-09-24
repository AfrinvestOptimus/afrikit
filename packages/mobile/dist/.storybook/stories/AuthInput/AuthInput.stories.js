var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.ErrorMessage=exports.CustomKeypad=exports.Basic=void 0;var _reactNative=require("react-native");var _AuthInput=_interopRequireDefault(require("../../../molecules/AuthInput"));var _jsxRuntime=require("react-native-css-interop/jsx-runtime");var AuthInputMeta={title:'AuthInput',component:_AuthInput.default,argTypes:{count:{control:'select',options:[1,2,3,4,5,6]},isError:{control:'boolean'},keypad:{control:'select',options:['Custom','Native']},onValueChange:{action:'pressed the button'},errorMessage:{control:'text'}},decorators:[function(Story){return(0,_jsxRuntime.jsx)(_reactNative.View,{style:{alignItems:'center',justifyContent:'center',flex:1},children:(0,_jsxRuntime.jsx)(Story,{})});}]};var _default=exports.default=AuthInputMeta;var Basic=exports.Basic={args:{count:4,isError:false,keypad:'Native',errorMessage:''}};var CustomKeypad=exports.CustomKeypad={args:{count:4,isError:false,keypad:'Custom',errorMessage:''}};var ErrorMessage=exports.ErrorMessage={args:{count:4,isError:true,keypad:'Native',errorMessage:'Mismatch'}};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3ROYXRpdmUiLCJyZXF1aXJlIiwiX0F1dGhJbnB1dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfanN4UnVudGltZSIsIkF1dGhJbnB1dE1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsIkF1dGhJbnB1dCIsImFyZ1R5cGVzIiwiY291bnQiLCJjb250cm9sIiwib3B0aW9ucyIsImlzRXJyb3IiLCJrZXlwYWQiLCJvblZhbHVlQ2hhbmdlIiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwiZGVjb3JhdG9ycyIsIlN0b3J5IiwianN4IiwiVmlldyIsInN0eWxlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleCIsImNoaWxkcmVuIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsIkJhc2ljIiwiYXJncyIsIkN1c3RvbUtleXBhZCIsIkVycm9yTWVzc2FnZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5zdG9yeWJvb2svc3Rvcmllcy9BdXRoSW5wdXQvQXV0aElucHV0LnN0b3JpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTWV0YSwgU3RvcnlPYmogfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0J1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3JlYWN0LW5hdGl2ZSdcbmltcG9ydCBBdXRoSW5wdXQgZnJvbSAnLi4vLi4vLi4vbW9sZWN1bGVzL0F1dGhJbnB1dCdcblxuY29uc3QgQXV0aElucHV0TWV0YTogTWV0YTx0eXBlb2YgQXV0aElucHV0PiA9IHtcbiAgdGl0bGU6ICdBdXRoSW5wdXQnLFxuICBjb21wb25lbnQ6IEF1dGhJbnB1dCxcbiAgYXJnVHlwZXM6IHtcbiAgICBjb3VudDoge1xuICAgICAgY29udHJvbDogJ3NlbGVjdCcsXG4gICAgICBvcHRpb25zOiBbMSwgMiwgMywgNCwgNSwgNl0sXG4gICAgfSxcbiAgICBpc0Vycm9yOiB7XG4gICAgICBjb250cm9sOiAnYm9vbGVhbicsXG4gICAgfSxcbiAgICBrZXlwYWQ6IHtcbiAgICAgIGNvbnRyb2w6ICdzZWxlY3QnLFxuICAgICAgb3B0aW9uczogWydDdXN0b20nLCAnTmF0aXZlJ10sXG4gICAgfSxcbiAgICBvblZhbHVlQ2hhbmdlOiB7XG4gICAgICBhY3Rpb246ICdwcmVzc2VkIHRoZSBidXR0b24nLFxuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBjb250cm9sOiAndGV4dCcsXG4gICAgfSxcbiAgfSxcbiAgZGVjb3JhdG9yczogW1xuICAgIFN0b3J5ID0+IChcbiAgICAgIDxWaWV3IHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZsZXg6IDEgfX0+XG4gICAgICAgIDxTdG9yeSAvPlxuICAgICAgPC9WaWV3PlxuICAgICksXG4gIF0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhJbnB1dE1ldGFcblxudHlwZSBTdG9yeSA9IFN0b3J5T2JqPHR5cGVvZiBBdXRoSW5wdXRNZXRhPlxuXG5leHBvcnQgY29uc3QgQmFzaWM6IFN0b3J5ID0ge1xuICBhcmdzOiB7XG4gICAgY291bnQ6IDQsXG4gICAgaXNFcnJvcjogZmFsc2UsXG4gICAga2V5cGFkOiAnTmF0aXZlJyxcbiAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICB9LFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9tS2V5cGFkOiBTdG9yeSA9IHtcbiAgYXJnczoge1xuICAgIGNvdW50OiA0LFxuICAgIGlzRXJyb3I6IGZhbHNlLFxuICAgIGtleXBhZDogJ0N1c3RvbScsXG4gICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IEVycm9yTWVzc2FnZTogU3RvcnkgPSB7XG4gIGFyZ3M6IHtcbiAgICBjb3VudDogNCxcbiAgICBpc0Vycm9yOiB0cnVlLFxuICAgIGtleXBhZDogJ05hdGl2ZScsXG4gICAgZXJyb3JNZXNzYWdlOiAnTWlzbWF0Y2gnLFxuICB9LFxufVxuIl0sIm1hcHBpbmdzIjoiMk5BQ0EsSUFBQUEsWUFBQSxDQUFBQyxPQUFBLGlCQUNBLElBQUFDLFVBQUEsQ0FBQUMsc0JBQUEsQ0FBQUYsT0FBQSxrQ0FBb0QsSUFBQUcsV0FBQSxDQUFBSCxPQUFBLHlDQUVwRCxHQUFNLENBQUFJLGFBQXFDLENBQUcsQ0FDNUNDLEtBQUssQ0FBRSxXQUFXLENBQ2xCQyxTQUFTLENBQUVDLGtCQUFTLENBQ3BCQyxRQUFRLENBQUUsQ0FDUkMsS0FBSyxDQUFFLENBQ0xDLE9BQU8sQ0FBRSxRQUFRLENBQ2pCQyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FDNUIsQ0FBQyxDQUNEQyxPQUFPLENBQUUsQ0FDUEYsT0FBTyxDQUFFLFNBQ1gsQ0FBQyxDQUNERyxNQUFNLENBQUUsQ0FDTkgsT0FBTyxDQUFFLFFBQVEsQ0FDakJDLE9BQU8sQ0FBRSxDQUFDLFFBQVEsQ0FBRSxRQUFRLENBQzlCLENBQUMsQ0FDREcsYUFBYSxDQUFFLENBQ2JDLE1BQU0sQ0FBRSxvQkFDVixDQUFDLENBQ0RDLFlBQVksQ0FBRSxDQUNaTixPQUFPLENBQUUsTUFDWCxDQUNGLENBQUMsQ0FDRE8sVUFBVSxDQUFFLENBQ1YsU0FBQUMsS0FBSyxRQUNILEdBQUFmLFdBQUEsQ0FBQWdCLEdBQUEsRUFBQ3BCLFlBQUEsQ0FBQXFCLElBQUksRUFBQ0MsS0FBSyxDQUFFLENBQUVDLFVBQVUsQ0FBRSxRQUFRLENBQUVDLGNBQWMsQ0FBRSxRQUFRLENBQUVDLElBQUksQ0FBRSxDQUFFLENBQUUsQ0FBQUMsUUFBQSxDQUN2RSxHQUFBdEIsV0FBQSxDQUFBZ0IsR0FBQSxFQUFDRCxLQUFLLEdBQUUsQ0FBQyxDQUNMLENBQUMsRUFDUixDQUVMLENBQUMsS0FBQVEsUUFBQSxDQUFBQyxPQUFBLENBQUFDLE9BQUEsQ0FFY3hCLGFBQWEsQ0FJckIsR0FBTSxDQUFBeUIsS0FBWSxDQUFBRixPQUFBLENBQUFFLEtBQUEsQ0FBRyxDQUMxQkMsSUFBSSxDQUFFLENBQ0pyQixLQUFLLENBQUUsQ0FBQyxDQUNSRyxPQUFPLENBQUUsS0FBSyxDQUNkQyxNQUFNLENBQUUsUUFBUSxDQUNoQkcsWUFBWSxDQUFFLEVBQ2hCLENBQ0YsQ0FBQyxDQUVNLEdBQU0sQ0FBQWUsWUFBbUIsQ0FBQUosT0FBQSxDQUFBSSxZQUFBLENBQUcsQ0FDakNELElBQUksQ0FBRSxDQUNKckIsS0FBSyxDQUFFLENBQUMsQ0FDUkcsT0FBTyxDQUFFLEtBQUssQ0FDZEMsTUFBTSxDQUFFLFFBQVEsQ0FDaEJHLFlBQVksQ0FBRSxFQUNoQixDQUNGLENBQUMsQ0FFTSxHQUFNLENBQUFnQixZQUFtQixDQUFBTCxPQUFBLENBQUFLLFlBQUEsQ0FBRyxDQUNqQ0YsSUFBSSxDQUFFLENBQ0pyQixLQUFLLENBQUUsQ0FBQyxDQUNSRyxPQUFPLENBQUUsSUFBSSxDQUNiQyxNQUFNLENBQUUsUUFBUSxDQUNoQkcsWUFBWSxDQUFFLFVBQ2hCLENBQ0YsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==