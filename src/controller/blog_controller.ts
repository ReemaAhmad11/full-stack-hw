import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { IUser } from '../middleware/auth';
import { Blog } from '@prisma/client';
import { deleteBlogSchemaType, updateBlogSchemaType,} from '../zod_schema/blog_schema';


export const getAllBlogHandler = async(req:Request , res:Response) =>{
  const user = res.locals.user as IUser;

  const BlogList = await prisma.blog.findMany({
    where: { user_id: user.id },
  });

  return res.status(200).json(BlogList);
}

export const addBlogHandler = async (req: Request, res: Response) => {
  const { title ,message} = req.body as Blog;
  const user = res.locals.user as IUser;

  await prisma.blog.create({
    data: {
      title,
      user_id: user.id,
      message

    },
  });

  return res.status(201).json({
    message: 'New blog created for user : ' + user.id,
  });
};



export const updateBlogHandler = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user as IUser;
    const updatedTodo = req.body as Blog;
    const { blogid } = req.params as updateBlogSchemaType;

    const isUpdated = await prisma.blog.updateMany({
      where: {
        id: blogid,
        user_id: user.id,
      },
      data: updatedTodo,
    });

    if (isUpdated.count == 0) {
      return res.status(400).json({
        message: 'Invalid blog id',
      });
    }

    return res.status(200).json({
      message: 'Blog updated !',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server error !',
    });
  }
};

export const deleteBlogHandler = async (req: Request, res: Response) => {
  const user = res.locals.user as IUser;
  const { blogid } = req.params as deleteBlogSchemaType;

  const deleteCount = await prisma.blog.deleteMany({
    where: {
      id: blogid,
      user_id: user.id,
    },
  });

  if (deleteCount.count == 0) {
    return res.status(400).json({
      message: 'Invalid blog id',
    });
  }

  return res.status(200).json({
    message: 'Blog deleted !',
  });
};
