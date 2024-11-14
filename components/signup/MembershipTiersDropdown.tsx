import { useContext, useState } from "react";
import { ICinemaState, IMembershipTier } from "./membership.types";
import { MembershipContext } from "./SignUpForm";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from "../ui/dropdown-menu";

interface MembershipTiersDropdownProps {
  selectedCinemas: ICinemaState[];
  membershipState: IMembershipTier[];
  setMembershipState: React.Dispatch<React.SetStateAction<IMembershipTier[]>>;
}

export default function MembershipTiersDropdown({
  selectedCinemas,
  membershipState,
  setMembershipState,
}: MembershipTiersDropdownProps) {
  const memberships = useContext(MembershipContext);

  // Checks whether the same type of membership already exists.
  const isThere = (membershipId: number, cinemaId: number) => {
    return membershipState.some(
      (membership) =>
        membership.id === membershipId && membership.cinema_id === cinemaId,
    );
  };

  const handleCheckedChange = (membershipId: number, checked: boolean) => {
    if (checked) {
      const selectedmemberships = memberships.find(
        (membership) => membership.id === membershipId,
      );
      if (
        selectedmemberships &&
        !isThere(membershipId, selectedmemberships.cinema_id)
      ) {
        setMembershipState((prevState) => [
          ...prevState,
          { ...selectedmemberships, isChecked: true },
        ]);
      }
    } else {
      setMembershipState((prevState) =>
        prevState.filter((membership) => membership.id !== membershipId),
      );
    }

    console.log("Selected memberships:");
    console.dir(membershipState);
  };
  console.log("Selected memberships väljas:");
  console.dir(membershipState);

  return (
    <>
      {selectedCinemas.map((cinema) => (
        <div key={cinema.id}>
          <DropdownMenu>
            <DropdownMenuTrigger>
              {cinema.name !== "Thule" ? cinema.name : null}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup>
                {memberships.map((membership) =>
                  membership.cinema_id === cinema.id ? (
                    <DropdownMenuRadioItem
                      key={membership.id}
                      id={membership.id.toString()}
                      value={JSON.stringify(membership.id)}
                      onClick={() => handleCheckedChange(membership.id, true)}>
                      {membership.title}
                    </DropdownMenuRadioItem>
                  ) : null,
                )}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </>
  );
}
