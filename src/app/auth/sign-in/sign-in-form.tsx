import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormState } from "@/hooks/user-form-state";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "./actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Loader2 } from "lucide-react";

export function SignInForm() {
  const router = useRouter();

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
    () => {
      router.push("/");
    }
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Sign in failed!</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}

      <div className="mb-4">
        <Label
          htmlFor="email"
          className=" block text-sm font-medium text-gray-700"
        >
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="email@exemplo.com"
          className="mt-1 p-5 block w-80 border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        {errors?.email && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.email[0]}
          </p>
        )}
      </div>

      <div className="mb-4">
        <Label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Senha
        </Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="******"
          className=" p-5 text-[#38A3A5]mt-1 block w-80 border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        {errors?.password && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.password[0]}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center">
          <Checkbox
            id="keep-connected"
            className="text-teal-500 border-[#38A3A5] appearance-none checked:bg-[#38A3A5]"
          />
          <Label
            htmlFor="keep-connected"
            className="ml-1 text-xs text-gray-700"
          >
            Manter conectado
          </Label>
        </div>
        <p className="text-xs ml-2">
          Esqueceu sua
          <a href="#" className="text-xs text-teal-600 hover:underline">
            senha
          </a>
          ?
        </p>
      </div>

      <Button
        type="submit"
        className="bg-[#38A3A5] text-white text-[13px] py-2 px-9 rounded-md"
        disabled={isPending}
      >
        {isPending ? <Loader2 className="size-4 animate-spin" /> : "Entrar"}
      </Button>
    </form>
  );
}
