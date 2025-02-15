import type { NextPage } from 'next'
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Antarace</h1>
					<p className="py-6">
						Download the game now and discover unique races in a space environment!
					</p>

					<Link
						href="/signup"
						passHref
					>
						<a
							className="btn btn-primary"
						>
							Register
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home
