import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function NotificationsPage () {
	return(
		<Layout>
			<h1 className="text-6xl mb-4 text-gray-300">Notifications</h1>
			<Card noPadding={true}>
				<div className="">
					<div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
						<Link href={'/profile'}>
							<Avatar />
						</Link>
						<div>
							<Link href={'/profile'} className={'mr-1 font-semibold hover:underline'}>Jane Doe</Link> 
							liked your 
							<Link href={''} className={'ml-1 text-socialBlue hover:underline'}>photo</Link>
						</div>
					</div>
					<div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
						<Link href={'/profile'}>
							<Avatar />
						</Link>
						<div>
							<Link href={'/profile'} className={'mr-1 font-semibold hover:underline'}>Jane Doe</Link> 
							liked your 
							<Link href={''} className={'ml-1 text-socialBlue hover:underline'}>photo</Link>
						</div>
					</div>
					<div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
						<Link href={'/profile'}>
							<Avatar />
						</Link>
						<div>
							<Link href={'/profile'} className={'mr-1 font-semibold hover:underline'}>Jane Doe</Link> 
							liked your 
							<Link href={''} className={'ml-1 text-socialBlue hover:underline'}>photo</Link>
						</div>
					</div>
				</div>
			</Card>
		</Layout>
	)
}