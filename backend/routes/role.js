import express from "express";
import role from "../controllers/role.js";
import auth from "../middlewares/auth.js";
import admin from "../middlewares/admin.js";
const router = express.Router();

//los que llevan auth y admin deben estar logueados uy ser admin para realizar dicha accion
router.post("/registerRole",auth,  role.registerRole);
router.get("/listRole",auth,  role.listRole);
router.get("/findRole/:_id",auth,  role.findRole);
router.put("/updateRole",auth,  role.updateRole);
router.delete("/deleteRole/:_id",auth,  role.deleteRole);

export default router;
