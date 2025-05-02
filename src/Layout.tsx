import { Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import HomePage from "./pages/HomePage/HomePage";
import UploadPhotoPage from "./pages/UploadPhoto/UploadPhotoPage";
import Sidebar from "./components/sidebar";
import TextPage from "./pages/TextPage/TextPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import AccountPage from "./pages/AccountPage/AccountPage";

export default function Layout() {
  const location = useLocation();
  const showSidebar = location.pathname !== "/";

  return (
    <Box sx={{ display: "flex" }}>
      {showSidebar && <Sidebar />}
      <Box sx={{ flexGrow: 1, ml: showSidebar ? "220px" : 0 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload-photo" element={<UploadPhotoPage />} />
          <Route path="/text-idea" element={<TextPage />} />
          <Route path="/browse-ideas" element={<GalleryPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Box>
    </Box>
  );
}
