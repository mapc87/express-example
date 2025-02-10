import {serverClientPlugin} from '@plugins/server.adapter'
import {expressRouter } from '@routes/express.router';
import dotenv from 'dotenv';

dotenv.config();

const app = new serverClientPlugin().getApp();
const port = process.env.PORT || 3000;

expressRouter(app)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});