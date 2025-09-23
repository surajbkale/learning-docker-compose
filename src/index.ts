import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
  const users = await prismaClient.user.findMany();
  res.json(users);
});

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await prismaClient.user.create({
    data: { email, password },
  });
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});