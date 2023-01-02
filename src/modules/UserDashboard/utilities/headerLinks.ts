export const mainHeaderLink = {
  url: "/dasboard",
  name: "User",
};

export const createLinks = [
  {
    url: "/dashboard",
    name: "Branch Management",
  },
  {
    url: "/dashboard/create",
    name: "Create Branch",
  },
];

export const manageLinks = (id) => [
  {
    url: "/dashboard",
    name: "Branch Management",
  },
  {
    url: `/branch-management/${id}`,
    name: "Manage Branch",
  },
];


