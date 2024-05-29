import con from '../../config/db.js';
const Data = {
  prLineItems: async (id) => {
    const [row] = await con.query('select * from prlineitem where prId = ?', [
      id,
    ]);
    return row;
  },
  vernderU: async (VendorOrganizationId) => {
    const [row] = await con.query(
      'select * from venderUser where VendorOrganizationId =?',
      [VendorOrganizationId]
    );
    return row;
  },
};

export default Data;
