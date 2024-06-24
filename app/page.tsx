import { LeftPanel } from "@/components/LeftPanel";
import { RightPanel } from "@/components/RightPanel";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <Grid container spacing={2} className="py-24 h-screen">
        <Grid item xs={12} md={6}>
          <LeftPanel />
        </Grid>
        <Grid item xs={12} md={6}>
          <RightPanel />
        </Grid>
      </Grid>
    </main>
  );
}
