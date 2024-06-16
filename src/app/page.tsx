import dynamic from "next/dynamic";

const Sandisk = dynamic(() => import("@/main/components/component/sandisk"), { ssr: false })

export default function Home() {
  return <Sandisk />
}
