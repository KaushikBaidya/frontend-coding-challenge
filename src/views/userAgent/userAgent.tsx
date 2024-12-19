"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";

interface UserAgentProps {
	serverUserAgent?: string;
}

const UserAgent: React.FC<UserAgentProps> = ({ serverUserAgent }) => {
	const { userAgent } = useUserAgentContext();

	return (
		<div>
			<BackToHome />
			{userAgent || serverUserAgent ? (
				<div className="flex font-mono font-semibold text-sm">
					<div className="border p-2">UserAgent</div>
					<div className="border p-2">{userAgent || serverUserAgent}</div>
				</div>
			) : (
				<div>No user agent</div>
			)}
		</div>
	);
};

export default UserAgent;
