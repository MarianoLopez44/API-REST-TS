import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "THIS CAN ONLY BE SEEN BY ACTIVE SESSION USERS / JWT",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ORDERS");
  }
};

export { getItems };
