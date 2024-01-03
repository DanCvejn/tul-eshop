import { IconLoader2 } from "@tabler/icons-react";

export default function Loading() {
  return (
    <div className="container flex justify-center items-center h-[60%]">
      <IconLoader2 className="animate-spin" size={52} stroke={2} />
    </div>
  )
}
