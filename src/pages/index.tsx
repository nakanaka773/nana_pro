import Header from "@/Components/Common/Header";
import Profile from "@/Components/Profile";
import Sidebar from "@/Components/Sidebar";
import Skill from "@/Components/Skill";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Profile />
      <Skill />
    </div>
  )
}
