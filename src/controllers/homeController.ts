import { Request, Response } from "express";
import Url from "../models/Url";
import shortenUrl from "../utils/shortenUrl";


export const store = async (req: Request, res: Response) => {
  try {

    if (!req.body) return res.status(204).json('No Content: no content send')


    const verifyUrl = async (): Promise<string> => {
      const shorten = shortenUrl();

      const url = await Url.findOne({ where: { $short$: shorten } });

      if (url) {
        return verifyUrl();
      }

      return shorten
    }

    const newUrl = await Url.create({
      ...req.body,
      short: await verifyUrl()
    })

    res.send(newUrl)

  } catch (e) {
    res.json(e)
  }
};


export const index = async (req: Request, res: Response) => {
  try {
    const urls = await Url.findAll();

    return res.json(urls)
  } catch (e) {
    return res.json(null)
  }
};

export const show = async (req: Request, res: Response) => {
  try {

    const { short } = req.params

    const url = await Url.findOne({ where: { $short$: short } });

    if (!url) {
      return res.status(404).json({ errors: ['Not found'] });
    }

    return res.status(200).json(url)

  } catch (e) {
    return res.json('null')
  }
};


export const deleteUrl = async (req: Request, res: Response) => {

  const { id } = req.params

  if (!id) {
    return res.status(400).json({
      errors: ['id não enviado'],
    }
    )
  }

  const url = await Url.findByPk(id)

  if (!url) {
    return res.status(400).json({
      errors: ['url não existe'],
    }
    )
  }

  await url.destroy();

  return res.status(200).json(`url apagada com sucesso`)


}
