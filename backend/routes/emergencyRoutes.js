import { Router } from 'express';
import {
  createEmergencyService,
  deleteEmergencyService,
  getEmergencyService,
  listEmergencyServices,
  updateEmergencyService,
} from '../controllers/emergencyController.js';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { requireAdmin } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', asyncHandler(listEmergencyServices));
router.get('/:id', asyncHandler(getEmergencyService));
router.post('/', requireAdmin, asyncHandler(createEmergencyService));
router.put('/:id', requireAdmin, asyncHandler(updateEmergencyService));
router.delete('/:id', requireAdmin, asyncHandler(deleteEmergencyService));

export default router;
