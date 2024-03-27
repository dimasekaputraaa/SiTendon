import { Breadcrumbs } from "@material-tailwind/react";

export default function BreadcrumbsDefault() {
  return (
    <Breadcrumbs>
      <a href="#" className="opacity-60">
        Docs
      </a>
      <a href="#" className="opacity-60">
        Components
      </a>
      <a href="#">Breadcrumbs</a>
    </Breadcrumbs>
  );
}
