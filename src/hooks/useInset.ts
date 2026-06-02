import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

// Define the return type explicitly so any component using this hook knows what to expect
interface Insets {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

const useInset = (): Insets => {
  // inset inherits the EdgeInsets type natively from the package
  const inset: EdgeInsets = useSafeAreaInsets();

  return {
    top: inset.top,
    bottom: inset.bottom,
    left: inset.left,
    right: inset.right,
  };
};

export default useInset;
