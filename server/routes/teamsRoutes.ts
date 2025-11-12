import express from "express";
import { getTeams } from "../services/nbaService";

const router = express.Router();
/* Created teams route in order to only show the /api/teams URL on the frontend */
router.get('/teams', async (_req, res) => {
    try {
        const data = await getTeams();
        res.json(data)
    } catch (error) {
        //console.error(error);
        res.status(500).json({ error: 'Failed to fetch teams' });
    }
})

export default router;