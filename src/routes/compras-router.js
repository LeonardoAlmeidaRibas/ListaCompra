import { Router } from 'express';
import {
    store,
    show
} from '../controllers/compras-controller.js';

const router = Router();

router.post('/', store);
router.get("/:id", show);

export default router;