import express from 'express';
import { addBlogHandler, deleteBlogHandler, getAllBlogHandler, updateBlogHandler } from '../controller/blog_controller';
import validate from '../middleware/validate';
import { protect } from '../middleware/auth';
import { addBlogSchema ,updateBlogSchema ,deleteBlogSchema } from '../zod_schema/blog_schema';

const router = express.Router();

router.get('/', protect, getAllBlogHandler);
router.post('/', protect, validate(addBlogSchema), addBlogHandler);
router.put('/:blogid', protect, validate(updateBlogSchema), updateBlogHandler);
router.delete(
  '/:blogid', protect, validate(deleteBlogSchema),  deleteBlogHandler);

export default router;


