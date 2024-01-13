import { BasicLayout } from "@/layouts";
import { Separator } from "./components/Shared/Separator/Separator";

export default function Loading() {
  return (
    <BasicLayout relative>
      <Separator height={50} />

      <div className="spinner">
        <div className="dot1}"></div>
        <div className="dot2"></div>
      </div>
   
    </BasicLayout>
  );
}
