import { Router } from "express";
import { deleteUrl, index, show, store } from "../controllers/homeController";

const router = Router()

router.post('/', store);
router.get('/', index);
router.get('/:short', show);
router.delete('/:id', deleteUrl);


export default router;
