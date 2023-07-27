"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-orange-600 transition-colors  hover:bg-orange-400 px-4 py-2 rounded-lg text-black font-semibold"
    >
      {pending ? <>loading...</> : <>Add comment...</>}
    </button>
  );
}