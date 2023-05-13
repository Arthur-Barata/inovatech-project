import { ContainerProps, styled } from "@mui/material";

export const ModalStyle = styled("div")<ContainerProps>(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  height: "100%",
  minHight: "100vh",
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "2",
}));

export const ModalContent = styled("div")<ContainerProps>(({ theme }) => ({
  overflowY: "auto",
  maxHeight: "95vh",
  backgroundColor: "#fff",
  borderRadius: "3px",
  boxShadow: "1px 1px 20px black",
  "&.-webkit-scrollbar": {
    width: "12px",
  },
}));
