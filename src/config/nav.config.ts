import { Terminal, Briefcase, Monitor, Cpu, Send, LucideIcon } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  mobileLabel: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "~/terminal", href: "#main", mobileLabel: "Terminal", icon: Terminal },
  { name: "career.log", href: "#experience", mobileLabel: "Career", icon: Briefcase },
  { name: "projects.ide", href: "#projects", mobileLabel: "Projects", icon: Monitor },
  { name: "tech_arsenal", href: "#arsenal", mobileLabel: "Arsenal", icon: Cpu },
  { name: "connect.sh", href: "#contact", mobileLabel: "Connect", icon: Send },
];
