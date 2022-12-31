// export const sessionInfo = {
// 	SampleAppToken: "SampleAppToken",
// 	SampleAppUserData: "SampleAppUserData",
// };

// export const getToken = () => {
// 	let token = cookies.get(sessionInfo.SampleAppToken);
// 	if (token && !isSessionActive()) {
// 		return token;
// 	}
// 	return null;
// };

// export const isSessionActive = () => {
// 	const expire = cookies.get(sessionInfo.SampleAppToken);
// 	if (!expire) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// export const deleteToken = () => {
// 	Cookies.remove(sessionInfo.SampleAppToken);
// 	Cookies.remove(sessionInfo.SampleAppUserData);
// };
