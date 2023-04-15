import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AppLogo() {
  return (
    <div className="text-3xl text-center py-4  ">
      GPT BLOG{" "}
      <FontAwesomeIcon className="text-2xl text-slate-400" icon={faBrain} />
    </div>
  );
}
