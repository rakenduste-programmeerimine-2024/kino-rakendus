import { useContext, useEffect, useState } from "react";
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

  function handleRadioChange(membershipId: number, cinemaID: number) {
    const selectedMembership = memberships.find(
      (membership) => membership.id === membershipId,
    );

    if (selectedMembership) {
      setMembershipState((previous) => {
        const updatedState = previous.filter(
          (membership) => membership.cinema_id !== cinemaID,
        );

        return [...updatedState, { ...selectedMembership }];
      });
    }
  }

  useEffect(() => {
    console.log(membershipState);
  }, [membershipState]);

  return (
    <>
      {selectedCinemas.map((cinema) => (
        <div key={cinema.id}>
          <DropdownMenu>
            {/* The dropdown menu for each cinemas tiers. Shows to the user, the selectedone */}
            {cinema.name !== "Thule" ? (
              <DropdownMenuTrigger>
                {cinema.name}
                {membershipState.find(
                  (membership) => membership.cinema_id === cinema.id,
                )?.title &&
                  " - " +
                    membershipState.find(
                      (membership) => membership.cinema_id === cinema.id,
                    )?.title}
              </DropdownMenuTrigger>
            ) : null}
            <DropdownMenuContent>
              {/* The dropdown menu for the user to check their membership tier */}
              <DropdownMenuRadioGroup>
                {memberships.map((membership) =>
                  membership.cinema_id === cinema.id ? (
                    <DropdownMenuRadioItem
                      key={membership.id}
                      id={membership.id.toString()}
                      value={JSON.stringify(membership.id)}
                      onClick={() =>
                        handleRadioChange(membership.id, membership.cinema_id)
                      }>
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
