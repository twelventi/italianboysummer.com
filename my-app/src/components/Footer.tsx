import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";
import { Instagram } from "@mui/icons-material";

export default function Footer() {
  return (
    <>
      <Stack
        sx={{ width: "100vw", padding: "1rem" }}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Link href="https://instagram.com/italian.boy.summer">
          <Stack flexDirection={"row"} alignItems={"center"}>
            <Instagram />

            <span> italian.boy.summer</span>
          </Stack>
        </Link>
      </Stack>
    </>
  );
}
