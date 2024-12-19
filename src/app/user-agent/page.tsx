import UserAgent from "@/views/userAgent/userAgent";
import { headers } from "next/headers";

const UserAgentPage = () => {
	const userAgent = headers().get("user-agent") || "";
	return <UserAgent serverUserAgent={userAgent} />;
};

export default UserAgentPage;
