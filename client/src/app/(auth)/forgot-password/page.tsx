"use client";

import * as React from "react";
import Link from "next/link";

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
  const { forgotPassword } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [email, setEmail] = React.useState("");
  const [errors, setErrors] = React.useState([]);
  const [status, setStatus] = React.useState(null);

  function handleSubmit(e: any) {
    e.preventDefault();

    forgotPassword({
      email,
      setErrors,
      setStatus,
    });
  }

  return (
    <Card className="mx-auto min-w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Forgot Password</CardTitle>
        <CardDescription>
          Enter your email below to receive the password reset link
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Link
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Remember your password?{" "}
          <Link href="login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
