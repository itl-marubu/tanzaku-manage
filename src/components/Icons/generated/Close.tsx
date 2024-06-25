import * as React from "react";
import type { SVGProps } from "react";
type Props = {
  size?: number;
};
const SvgClose = (props: SVGProps<SVGSVGElement> & Props) => {
  return <svg xmlns="http://www.w3.org/2000/svg" height={props.size ?? "1em"} viewBox="0 -960 960 960" width={props.size ?? "1em"} fill="currentColor" {...props}><path d="M480-437.85 277.08-234.92q-8.31 8.3-20.89 8.5-12.57.19-21.27-8.5-8.69-8.7-8.69-21.08 0-12.38 8.69-21.08L437.85-480 234.92-682.92q-8.3-8.31-8.5-20.89-.19-12.57 8.5-21.27 8.7-8.69 21.08-8.69 12.38 0 21.08 8.69L480-522.15l202.92-202.93q8.31-8.3 20.89-8.5 12.57-.19 21.27 8.5 8.69 8.7 8.69 21.08 0 12.38-8.69 21.08L522.15-480l202.93 202.92q8.3 8.31 8.5 20.89.19 12.57-8.5 21.27-8.7 8.69-21.08 8.69-12.38 0-21.08-8.69L480-437.85Z" /></svg>;
};
export default SvgClose;