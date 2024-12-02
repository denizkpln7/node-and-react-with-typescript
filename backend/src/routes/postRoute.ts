import { Router } from 'express';
import {createPost, deleteGame, getAllPost, getPostById, updateGame} from "../controller/postController";
import {validate} from "../middleware/validate";
import {createValidation} from "../utils/validation/Post";


const router:Router = Router();

// @ts-ignore
router.get("/all", getAllPost);
// @ts-ignore
router.route("/save").post(validate(createValidation),createPost);
// @ts-ignore
router.get("/:id",getPostById)
// @ts-ignore
router.delete("/delete/:id",deleteGame)
// @ts-ignore
router.post("/update/:id",updateGame)

export default router;