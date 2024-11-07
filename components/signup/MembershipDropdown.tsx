"use client";
import { useState } from "react";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";

export default function MembershipDropdown() {
  const [selectedMemberships, setSelectedMemberships] = useState<string[]>([]);
  const [showForum, setShowForum] = useState<boolean>(false);
  const [showApollo, setShowApollo] = useState<boolean>(false);
  const [showArtis, setShowArtis] = useState<boolean>(false);
  const [showThule, setShowThule] = useState<boolean>(false);
  const [showViimsi, setShowViimsi] = useState<boolean>(false);

  const handleCheckedChange = (cinemaName: string, isChecked: boolean) => {
    const tempMemberships = [...selectedMemberships];

    if (isChecked) {
      tempMemberships.push(cinemaName);
      setSelectedMemberships(tempMemberships);
    } else {
      tempMemberships.splice(selectedMemberships.indexOf(cinemaName), 1);
      setSelectedMemberships(tempMemberships);
    }
    // console.log(tempMemberships);
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
          <DropdownMenuCheckboxItem
            key="forum"
            checked={showForum}
            onCheckedChange={(checked) => {
              setShowForum(checked);
              handleCheckedChange("Forum", checked);
            }}>
            Forum
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            key="apollo"
            checked={showApollo}
            onCheckedChange={(checked) => {
              setShowApollo(checked);
              handleCheckedChange("Apollo", checked);
            }}>
            Apollo
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            key="artis"
            checked={showArtis}
            onCheckedChange={(checked) => {
              setShowArtis(checked);
              handleCheckedChange("Artis", checked);
            }}>
            Artis
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            key="thule"
            checked={showThule}
            onCheckedChange={(checked) => {
              setShowThule(checked);
              handleCheckedChange("Thule", checked);
            }}>
            Thule
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            key="viimsi"
            checked={showViimsi}
            onCheckedChange={(checked) => {
              setShowViimsi(checked);
              handleCheckedChange("Viimsi", checked);
            }}>
            Viimsi
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
