import { type FormEvent, useState, useTransition } from "react";

interface FormState {
  success: boolean;
  message: string | null;
  errors: Record<string, string[]> | null;
}

export function useFormState(
  action: (data: FormData) => Promise<FormState>,
  onSuccess?: () => Promise<void> | void,
  onError?: () => Promise<void> | void,
  initalState?: FormState
) {
  const [isPending, startTransition] = useTransition();

  const [formState, setFormState] = useState<FormState>(
    initalState ?? {
      success: false,
      message: null,
      errors: null,
    }
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const data = new FormData(form);

    startTransition(async () => {
      const state = await action(data);

      if (state.success === true && onSuccess) {
        await onSuccess();
      } else if (!state.success && onError) {
        await onError();
      }

      setFormState(state);
    });
  }
  return [formState, handleSubmit, isPending] as const;
}
