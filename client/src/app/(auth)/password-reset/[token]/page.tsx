"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useAuth } from "@/hooks/auth";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const searchParams = useSearchParams();

  const { resetPassword } = useAuth({ middleware: "guest" });

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [errors, setErrors] = React.useState([]);
  const [status, setStatus] = React.useState(null);

  function handleSubmit(e: any) {
    e.preventDefault();

    resetPassword({
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
      setStatus,
    });
  }

  React.useEffect(() => {
    setEmail(searchParams.get("email") as string);
  }, [searchParams.get("email")]);

  return (
    <Card className="mx-auto min-w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>Enter your new password below</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="*********"
              required
              readOnly
              value={email}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="*********"
              required
              value={password}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password-confirmation">Password Confirmation</Label>
            <Input
              id="password"
              type="password"
              placeholder="*********"
              required
              value={passwordConfirmation}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
