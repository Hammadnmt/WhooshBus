import { useState } from "react";

export default function useInputHandlerHook() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return {
    handleInputChange,
    formData,
  };
}
