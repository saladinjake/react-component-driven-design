const approvalConfigToUrlPath = {
  UpdateBranch: (id: string) => `/branch-management/${id}`,
  CreateBranch: "/branch-management/create",
  UpdateRegion: (id: string) => `/region-management/${id}`,
  CreateRegion: "/region-management/create",
};

export default approvalConfigToUrlPath;
