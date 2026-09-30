import { NativeAdClient } from "./native-ad-client";

export function NativeAdSlot() {
  return (
    <div className="ad-native" aria-label="Advertisement">
      <span className="ad-label">Advertisement</span>
      <NativeAdClient />
    </div>
  );
}
