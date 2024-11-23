export interface ICinemaState {
  id: number;
  name: string;
  isChecked: boolean;
}

export interface IMembershipTier {
  id: number;
  title: string;
  cinema_id: number;
}

export interface IMembershipToParent {
  setParentMembership: React.Dispatch<React.SetStateAction<IMembershipTier[]>>;
  setParentCinema: React.Dispatch<React.SetStateAction<ICinemaState[]>>;
}

export interface MembershipTiersDropdownProps {
  selectedCinemas: ICinemaState[];
  membershipState: IMembershipTier[];
  setMembershipState: React.Dispatch<React.SetStateAction<IMembershipTier[]>>;
  setParentMembership: React.Dispatch<React.SetStateAction<IMembershipTier[]>>;
}