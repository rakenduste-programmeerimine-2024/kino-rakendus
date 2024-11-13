"use client";
import { useState } from "react";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { ICinemaState, IMembership, IMembershipTier } from "./membership.types";

import MembershipTiersDropdown from "./MembershipTiersDropdown";

const cinemas = [
  { name: "Forum", stateKey: "showForum", cinemaID: 1 },
  { name: "Apollo", stateKey: "showApollo", cinemaID: 2 },
  { name: "Artis", stateKey: "showArtis", cinemaID: 4 },
  { name: "Thule", stateKey: "showThule", cinemaID: 3 },
  { name: "Viimsi", stateKey: "showViimsi", cinemaID: 5 },
];

export default function MembershipDropdown({
  selectedMemberships,
  setSelectedMemberships,
}: IMembership) {
  const [cinemaState, setCinemaState] = useState<ICinemaState>({
    showForum: false,
    showApollo: false,
    showArtis: false,
    showThule: false,
    showViimsi: false,
  });

  const [selectedMembershipTier, setSelectedMembershipTier] = useState<
    IMembershipTier[]
  >([]);

  const handleCheckedChange = (cinemaName: string, isChecked: boolean) => {
    const tempMemberships = [...selectedMemberships];

    isChecked
      ? tempMemberships.push(cinemaName)
      : tempMemberships.splice(selectedMemberships.indexOf(cinemaName), 1);

    setSelectedMemberships(tempMemberships);
    console.log("", tempMemberships);
  };

  const handleCinemaStateChange = (
    cinemaKey: string,
    checked: boolean,
    cinemaID: number,
  ) => {
    const tempState = { ...cinemaState };
    tempState[cinemaKey as keyof ICinemaState] = checked;
    const cinema = cinemas.find((cinema) => cinema.stateKey === cinemaKey);
    setCinemaState(tempState);

    if (cinema) {
      handleCheckedChange(cinema.name, checked);
    }
  };

  
  const buttonText =
    selectedMemberships.length > 0
      ? selectedMemberships.join(", ")
      : "Select your membership(s)";

  // TODO: add membership tiers.
  // TODO: add memberships to database.

  return (
    <>
      <DropdownMenu>
        <DropdownMenuLabel>Memberships</DropdownMenuLabel>
        <DropdownMenuTrigger>{buttonText}</DropdownMenuTrigger>
        <DropdownMenuContent>
          {cinemas.map((cinema) => (
            <DropdownMenuCheckboxItem
              key={cinema.name}
              id={cinema.name}
              checked={cinemaState[cinema.stateKey as keyof ICinemaState]}
              onCheckedChange={(checked) => {
                handleCinemaStateChange(
                  cinema.stateKey,
                  checked,
                  cinema.cinemaID,
                );
              }}>
              {cinema.name}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <MembershipTiersDropdown
        selectedMembershipTier={selectedMembershipTier}
        setSelectedMembershipTier={setSelectedMembershipTier}
      />
    </>
  );
}
