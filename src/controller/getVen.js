import Data from '../models/vender.js';
export const getVender = async (req, res) => {
  const { prId, VendorOrganizationId } = req.body;

  const prline = await Data.prLineItems(prId);
  const venUser = await Data.vernderU(VendorOrganizationId);

  res.send({ prline, venUser });
};
