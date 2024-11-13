import { useEffect, useState } from "react";
import {
  IMembership,
  IMembershipTier,
  IMembershipTierTypes,
} from "./membership.types";
import { createClient } from "@/utils/supabase/client";
export default function MembershipTiersDropdown({
  selectedMembershipTier,
  setSelectedMembershipTier,
}: IMembershipTierTypes) {
  const [membershipTiers, setMembershipTiers] = useState<IMembershipTier[]>([]);

  useEffect(() => {
    async function fetchMembershipTiers() {
      const supabase = createClient();
      const { data: membership, error } = await supabase
        .from("membership")
        .select("*");

      if (error) {
        console.error("Error fetching membership tiers:", error);
        return [];
      }

      console.log("Membership tiers fetched:", membership);

      return membership;
    }

    fetchMembershipTiers().then((fetchedTiers) => {
      setMembershipTiers(fetchedTiers);
    });
  }, []);
  return <>sad</>;
}
