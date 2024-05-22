import {Router} from "express";
import ProdutoController from "../controllers/controller.produto.js";

const routeProduto = Router();

routeProduto.get("/produtos", ProdutoController.getAllProdutos);

export default routeProduto;

