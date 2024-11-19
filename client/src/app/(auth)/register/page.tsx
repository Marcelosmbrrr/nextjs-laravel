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
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [errors, setErrors] = React.useState([]);
  const [status, setStatus] = React.useState(null);

  function handleSubmit() {
    register({
      name,
      email,
      password,
      passwordConfirmation,
      setErrors,
      setStatus,
    });
  }

  return (
    <Card className="mx-auto min-w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>Enter your account data below</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              required
            />
          </div>
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
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="*********"
              value={password}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password-confirmation">Password Confirmation</Label>
            <Input
              id="password-confirmation"
              type="password"
              placeholder="*********"
              value={passwordConfirmation}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Link
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
