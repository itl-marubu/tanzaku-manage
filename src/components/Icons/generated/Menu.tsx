import * as React from "react";
import type { SVGProps } from "react";
type Props = {
  size?: number;
};
const SvgMenu = (props: SVGProps<SVGSVGElement> & Props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" height={props.size ?? "1em"} viewBox="0 -960 960 960" width={props.size ?? "1em"} fill="currentColor" {...props}><path d="M170-254.62q-12.75 0-21.37-8.63-8.63-8.62-8.63-21.38 0-12.75 8.63-21.37 8.62-8.61 21.37-8.61h620q12.75 0 21.37 8.62 8.63 8.63 8.63 21.39 0 12.75-8.63 21.37-8.62 8.61-21.37 8.61H170ZM170-450q-12.75 0-21.37-8.63-8.63-8.63-8.63-21.38 0-12.76 8.63-21.37Q157.25-510 170-510h620q12.75 0 21.37 8.63 8.63 8.63 8.63 21.38 0 12.76-8.63 21.37Q802.75-450 790-450H170Zm0-195.39q-12.75 0-21.37-8.62-8.63-8.63-8.63-21.39 0-12.75 8.63-21.37 8.62-8.61 21.37-8.61h620q12.75 0 21.37 8.63 8.63 8.62 8.63 21.38 0 12.75-8.63 21.37-8.62 8.61-21.37 8.61H170Z" /></svg>;
};
export default SvgMenu;