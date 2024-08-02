import { Router } from 'express';
import { Investiment } from '../models/investiment';
import { GET, POST, PUT } from "mgr-swagger-express"

const router = Router();

/**
 * @swagger
 * /investiment/:
 *   post:
 *     summary: Creates an investiment
 *     tags: [Investiments]
 *     requestBody:
 *      description: Investiment object to create
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Investiment'
 *     responses:
 *       200:
 *         description: Investiment details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Investiment'
 *       404:
 *         description: Investiment not found
 */
router.post('/', async (req, res) => {
  try {
    const investiment = await Investiment.create(req.body);
    res.status(201).json(investiment);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /investiment:
 *   get:
 *     summary: Retrieve a list of Investiments
 *     tags: [Investiments]
 *     responses:
 *       200:
 *         description: A list of Investiments.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Investiment'
 */
router.get('/', async (req, res) => {
  try {
    const investiments = await Investiment.findAll();
    res.status(200).json(investiments);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /investiment/{id}:
 *   get:
 *     summary: Get an investiment by ID
 *     tags: [Investiments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Investiment ID
 *     responses:
 *       200:
 *         description: Investiment details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Investiment'
 *       404:
 *         description: Investiment not found
 */
router.get('/:id', async (req, res) => {
  try {
    const investiment = await Investiment.findByPk(req.params.id);
    if (investiment) {
      res.status(200).json(investiment);
    } else {
      res.status(404).json({ error: 'Investiment not found' });
    }
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /investiment/{id}:
 *   put:
 *     summary: Update an investiment by ID
 *     tags: [Investiments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Investiment ID
 *     responses:
 *       200:
 *         description: Investiment details updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Investiment'
 *       404:
 *         description: Investiment not found
 */
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Investiment.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedInvestiment = await Investiment.findByPk(req.params.id);
      res.status(200).json(updatedInvestiment);
    } else {
      res.status(404).json({ error: 'Investiment not found' });
    }
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /investiment:
 *   get:
 *     summary: Retrieve a list of Investiments
 *     tags: [Investiments]
 *     responses:
 *       200:
 *         description: A list of Investiments.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Investiment'
 */
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Investiment.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Investiment not found' });
    }
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
