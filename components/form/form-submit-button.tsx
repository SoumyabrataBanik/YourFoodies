"use client";

import { useFormStatus } from "react-dom";

const FormSubmitButton: React.FC = () => {
  const { pending } = useFormStatus();

  return <button type="submit" disabled={pending}>
    {pending ? "Sharing... Please Wait!" : "Share Meal"}
  </button>;
};

export default FormSubmitButton;
