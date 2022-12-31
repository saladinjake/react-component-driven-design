import { useMemo } from "react";
import { useContext } from "react";
import { AcceptRequestContext } from "services/contextApi/contextProviders/acceptRequest/AcceptRequestContext";
import { ConfirmTransactionContext } from "services/contextApi/contextProviders/confirmTransaction/ConfirmTransactionContext";

export function useAuth() {
	const { acceptRequestSharedObj } = useContext(AcceptRequestContext);
	const { confirmTransactionSharedObj } = useContext(ConfirmTransactionContext);

	const isAuthenticated = useMemo(
		() => (confirmTransactionSharedObj?.customerAccounts && confirmTransactionSharedObj?.consentId) || (acceptRequestSharedObj?.customerAccounts && acceptRequestSharedObj?.consentId),
		[acceptRequestSharedObj?.consentId, acceptRequestSharedObj?.customerAccounts, confirmTransactionSharedObj?.consentId, confirmTransactionSharedObj?.customerAccounts],
	);
	return isAuthenticated ? true : false;
}
