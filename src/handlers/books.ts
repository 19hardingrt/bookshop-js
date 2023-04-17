import { Request, Response } from "express";
import * as db from "../db";
import { validateInput } from "./inputValidator"

export const createBook = async (req: Request, res: Response) => {
    const { title, author, price } = req.body;
    if(validateInput(price) == false || validateInput(author) == false || validateInput(price) == false)
    {
        res.status(422).json({ status: "failed: contains forbidden characters."});
    }
    else
    {
        await db.createBook(title, author, price);
        res.status(201).json({ status: "success" });
    }
}

export const getPrice = async (req: Request, res: Response) => {
    const { title, author } = req.body;
    if(validateInput(title) == false || validateInput(author) == false)
    {
        console.log("Validation Failed");
        res.status(422).json({ status: "failed: contains forbidden characters."});
    }
    else
    {
        console.log("validation succeeded");
        const bid = await db.getBookId(title, author);
        console.log("found book id of: " + bid);
        const price = await db.getBookPrice(bid);
        console.log("found price of: " + price);
        res.status(200).json({ price });
    }
}