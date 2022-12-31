export const ApprovalKeys = {
  getApprovals: "get_approvals",
  getPendingUserApprovals: "get_pending_user_approvals",
  getApprovalConfigurations: "get_approval_configurations",
};

const queryKeys = {
  systemSetupMgt: {
    taxConfig: { getTaxConfig: "getTaxConfig" },
    endOfDay: { getEndOfDay: "getEndOfDay" },
    accountTierLevel: { getAccountTierLevel: "getAccountTierLevel" },
    tierLevelEntryCodeLimit: {
      getTierLevelEntryCodeLimit: "getTierLevelEntryCodeLimit",
    },
    productOrOther: {
      getProductOrOtherConfig: "getProductOrOtherConfig",
    },
    workingDay: { getWorkingDays: "getWorkingDays" },
    publicHoliday: { getPublicHolidays: "getPublicHolidays" },
  },
};

export default queryKeys;
