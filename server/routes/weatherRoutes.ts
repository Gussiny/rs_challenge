import express from "express";
import { getCurrent } from "../services/weatherService";

const router = express.Router();

router.get('/weather', async (req, res) => {
    const city = req.query.city as string;

    if (!city) {
        return res.status(400).json({ error: 'City value is required' });
    }
    try {
        const data = await getCurrent(city);
        res.json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch weather' });
    }
})

export default router;