// components/ui/Avatar.tsx
import Image from "next/image";

export function Avatar({ seed }: { seed: number }) {
  return (
    <Image
      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
      alt="Avatar"
      width={40}
      height={40}
    />
  );
}
