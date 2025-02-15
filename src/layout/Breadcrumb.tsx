import {
  Breadcrumb as ShadCnBreadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrumb: FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => ({
    label: segment
      .split("-") // Split by hyphen
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "), // Join back with space
    path: `/${pathSegments.slice(0, index + 1).join("/")}`,
  }));
  return (
      <ShadCnBreadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Pages</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {breadcrumbs.map((crumb, idx) => (
            <BreadcrumbItem key={idx}>
              <NavLink to={crumb.path}>
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              </NavLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </ShadCnBreadcrumb>
  );
};

export default Breadcrumb;
