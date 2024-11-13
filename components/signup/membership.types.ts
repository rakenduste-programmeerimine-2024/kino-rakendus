export interface ICinemaState {
  showForum: boolean;
  showApollo: boolean;
  showArtis: boolean;
  showThule: boolean;
  showViimsi: boolean;
}

export interface IMembership {
  selectedMemberships: string[];
  setSelectedMemberships: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface IMembershipTier {
  id: number;
  title: string;
}

export interface IMembershipTierTypes {
  selectedMembershipTier: IMembershipTier[];
  setSelectedMembershipTier: React.Dispatch<React.SetStateAction<IMembershipTier[]>>;
  allTiers?: IMembershipTier[]; // Stores the fetched tiers
}
