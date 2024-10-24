import { Router } from 'express';
import {
    store,
    show,
    index,
    update,
    destroy
} from '../controllers/compras-controller.js';

const router = Router();

router.post('/', store);
router.get("/:id", show);
router.get('/', index);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;