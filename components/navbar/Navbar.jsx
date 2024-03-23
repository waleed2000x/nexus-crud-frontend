"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { PanelBottom } from "lucide-react";
import styled from "styled-components";

import NavMenu from "./NavMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <StyledDrawer>
          <StyledDrawerTrigger>
            <PanelBottom />
            <Link href="/">
              <h2>Nextjs Products</h2>
            </Link>
          </StyledDrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Nextjs Products</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </StyledDrawer>
        <NavigationMenu>
          <NavMenu />
        </NavigationMenu>
      </div>
    </nav>
  );
}
const StyledDrawer = styled(Drawer)``;
const StyledDrawerTrigger = styled(DrawerTrigger)`
  display: flex;
  align-items: center;
  & svg {
    color: white;
    width: 30px;
    height: 30px;
    &:hover {
      color: #aaa;
    }
  }
  &:hover {
    background-color: transparent;
  }

  & h2 {
    color: white;
    margin-left: 20px;
  }
`;

const NavigationMenu = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  width: 40%;
`;
