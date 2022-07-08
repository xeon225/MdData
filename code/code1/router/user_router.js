import express from "express";
// 从 user_ctrl.js 模块中按需导入 getAllUser 函数
import { getAllUser } from "../controller/user_ctrl.js";

// 创建路由对象
const router = new express.Router()
// 挂载路由规则
router.get('/user', getAllUser)

// 使用 ES6 的默认导出语法，将路由对象共享出去
export default router