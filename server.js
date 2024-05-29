import { app } from './app.js';
import con from './config/db.js';
app.listen(process.env.PORT, () => {
  console.log(`Server running on the port ${process.env.PORT}`);
  con
});
