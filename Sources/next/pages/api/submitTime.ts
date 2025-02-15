import { NextApiRequest, NextApiResponse } from "next";

import { sequelize } from "@components/database";
import { Scores } from "@models/Scores.model";
import { User } from "@models/User.model";
import { getUserId } from "@core/helpers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	await sequelize.authenticate();
	await User.sync();
	await Scores.sync();

	const playerId = getUserId(req);
	if (!playerId) {
		res.status(401).end();
		return;
	}

	if (req.method === "POST") {
		// Save score
		const { time, vehicle, track } = req.body;

		try {
			await Scores.create({
				playerId,
				time,
				vehicle,
				track,
			});

			res.status(201).end();
		} catch (e) {
			console.error(e);
			res.status(500).end();
		}
	} else {
		res.status(405).end();
	}
};
