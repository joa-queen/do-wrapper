type TierSlug = "starter" | "basic" | "professional";

export interface CreateRegistryOptions {
    name: string;
    region: string;
    subscription_tier_slug: TierSlug;
}

export interface UpdateSubscriptionTierOptions {
  tier_slug: TierSlug;
}
