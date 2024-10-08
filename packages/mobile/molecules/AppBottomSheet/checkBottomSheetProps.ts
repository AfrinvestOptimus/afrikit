import { AppBottomSheetProps, DetachedProps, RegularProps } from '../../types/molecules';

export default function checkBottomSheetProps(
    props: AppBottomSheetProps<boolean>,
): DetachedProps | RegularProps {
  if (props.isDetached) {
    // Check if the props satisfy the DetachedProps type
    const { title, content, ...rest } = props;

    // Ensure required props for detached mode are present
    if (typeof title !== 'string' || typeof content !== 'string') {
      throw new Error('Detached mode requires title as string and content as string');
    }

    // Check mutual exclusivity of index and height
    if ('index' in rest && 'height' in rest) {
      throw new Error('Detached mode cannot have both index and height');
    }

    // Provide a default value for index if it's undefined
    const index = rest.index ?? 0;

    if ('index' in rest && index !== 0) {
      throw new Error('Detached mode index must be 0');
    }

    if ('height' in rest && typeof rest.height !== 'number') {
      throw new Error('Detached mode height must be a number');
    }

    return props as DetachedProps;
  } else {
    // Check if the props satisfy the RegularProps type
    const { title, ...rest } = props;

    // Check title structure if present
    if (title && (typeof title !== 'object' || typeof title.text !== 'string')) {
      throw new Error('Regular mode title must be an object with a text property');
    }

    // Check mutual exclusivity of index and height
    if ('index' in rest && 'height' in rest) {
      throw new Error('Regular mode cannot have both index and height');
    }

    // Ensure that index is a number or provide a fallback if undefined
    const index = rest.index ?? 0;

    if ('index' in rest && ![0, 1, 2, 3, 4, 5].includes(index)) {
      throw new Error('Regular mode index must be between 0 and 5');
    }

    // Check for if no index or height is provided
    if (!('index' in rest) && !('height' in rest)) {
      throw new Error('Regular mode must have either index or height');
    }

    if ('height' in rest && typeof rest.height !== 'number') {
      throw new Error('Regular mode height must be a number');
    }

    return props as RegularProps;
  }
}
