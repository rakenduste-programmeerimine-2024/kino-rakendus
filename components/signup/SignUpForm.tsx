"use client";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signUpAction } from "@/app/actions";
import MembershipDropdown from "@/components/signup/MembershipDropdown";
import { createContext, useContext, useEffect, useState } from "react";
import { ICinemaState, IMembershipTier } from "./membership.types";

export const CinemaContext = createContext<ICinemaState[]>([]);
export const MembershipContext = createContext<IMembershipTier[]>([]);

export default function SignUpForm({
  cinemas,
  memberships,
}: {
  cinemas: ICinemaState[];
  memberships: IMembershipTier[];
}) {
  // Needed to pass data from child to parent
  const [parentMembership, setParentMembership] = useState<IMembershipTier[]>(
    [],
  );
  const [parentCinema, setParentCinema] = useState<ICinemaState[]>([]);

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="username">Username</Label>
          <Input
            name="username"
            id="username"
            placeholder="Username"
            required
          />
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            placeholder="you@example.com"
            required
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <Label htmlFor="first-name">First name</Label>
          <Input
            name="first-name"
            id="first-name"
            placeholder="First name"
            required
          />{" "}
          <Label htmlFor="last-name">Last name</Label>
          <Input
            name="last-name"
            id="last-name"
            placeholder="Last name"
            required
          />
          <Label htmlFor="date-input">Date-of-birth</Label>
          <Input name="date-input" id="date-input" type="date" required />
          <CinemaContext.Provider value={cinemas}>
            <MembershipContext.Provider value={memberships}>
              <MembershipDropdown
                setParentMembership={setParentMembership}
                setParentCinema={setParentCinema}
              />
            </MembershipContext.Provider>
          </CinemaContext.Provider>
          <input
            type="hidden"
            name="selectedMemberships"
            value={parentMembership ? JSON.stringify(parentMembership) : ""}
          />
          <input
            type="hidden"
            name="selectedCinemas"
            value={parentCinema ? JSON.stringify(parentCinema) : ""}
          />
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
        </div>
      </form>
    </>
  );
}
