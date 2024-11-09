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
