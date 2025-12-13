import resend from "@the-untraceable/convex-resend/convex.config";
import { defineApp } from "convex/server";

const app = defineApp();
app.use(resend);

export default app;
