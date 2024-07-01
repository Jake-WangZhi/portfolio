"use client";

import { LeftPanel } from "@/components/LeftPanel";
import { RightPanel } from "@/components/RightPanel";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:py-20 lg:py-0">
      <Grid container spacing={0} className="h-screen">
        <Grid item xs={12} md={4}>
          <LeftPanel />
        </Grid>
        <Grid item xs={12} md={8}>
          <RightPanel />
        </Grid>
      </Grid>
    </main>
  );
}
