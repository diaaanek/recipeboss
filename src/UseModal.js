import { useState } from "react";

// created custom react hook for showing and hiding modal component

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  // function toggle changes value of isShowing to opposite
  function toggle() {
    setIsShowing(!isShowing);
  }
  // return isShowing and toggle function from the Hook, so compoennt has access to it
  return {
    isShowing,
    toggle
  };
};

export default useModal;
