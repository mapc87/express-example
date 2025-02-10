import { Router, Express } from "express";
import generator from "./generator.routes";

export const expressRouter = (app:Express) => {
    const api = '/api/'
    app.use(api, generator)
}