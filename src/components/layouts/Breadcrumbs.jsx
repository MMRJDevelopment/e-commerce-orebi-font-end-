import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";
  return (
    <div className="breadcrumbs flex flex-row items-center justify-start ">
      <Link to="/" className="text-[12px] font-sans font-normal text-[#767676]">
        Home
      </Link>
      <MdOutlineKeyboardArrowRight className="text-[#767676] text-sm" />
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span
            key={breadcrumbPath}
            className="text-[12px] font-sans font-normal text-[#767676] "
          >
            {name}
          </span>
        ) : (
          <span key={breadcrumbPath}>
            {" "}
            /{" "}
            <Link
              to={breadcrumbPath}
              className="text-[12px] font-sans font-normal text-[#767676] "
            >
              {name}
            </Link>
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
