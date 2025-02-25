import { useState } from "react";

export const useAuthView = () => {
  const [showCredentials, setShowCredentials] = useState(true);

  const toggleView = () => {
    setShowCredentials((prev) => !prev);
  };

  return {
    showCredentials,
    setShowCredentials,
    toggleView,
  };
};
