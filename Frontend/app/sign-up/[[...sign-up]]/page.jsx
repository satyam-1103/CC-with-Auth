import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-full py-6 items-center justify-center">
      <SignUp
        redirectUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || "/"}
      />
    </div>
  );
}
