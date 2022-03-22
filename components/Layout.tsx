import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  useMantineTheme,
} from '@mantine/core';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { Calendar, File, Home } from 'react-feather';
import { Messages } from 'tabler-icons-react';
import useBuildId from '../hooks/useBuildId';
import LayoutLink from './LayoutLink';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

// Links
const links = [
  { icon: <Home size={16} />, color: 'teal', label: 'Koti', to: '/home' },
  {
    icon: <Messages size={16} />,
    color: 'orange',
    label: 'Viestit',
    to: '/messages',
  },
  {
    icon: <Calendar size={16} />,
    color: 'red',
    label: 'Työjärjestys',
    to: '/schedule',
  },
  { icon: <File size={16} />, color: 'grape', label: 'Kokeet', to: '/tests' },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const buildId = useBuildId();

  return (
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      navbar={
        <Navbar
          p="md"
          // Breakpoint at which navbar will be hidden if hidden prop is true
          hiddenBreakpoint="sm"
          // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
          hidden={!opened}
          // when viewport size is less than theme.breakpoints.sm navbar width is 100%
          // viewport size > theme.breakpoints.sm – width is 300px
          // viewport size > theme.breakpoints.lg – width is 400px
          width={{ sm: 300, lg: 400 }}
        >
          {/* First section with normal height (depends on section content) */}
          {/* <Navbar.Section>First section</Navbar.Section> */}
          <Navbar.Section grow>
            {links.map((ele) => (
              <LayoutLink key={ele.label} {...ele} />
            ))}
          </Navbar.Section>
          <Navbar.Section>Build {buildId}</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Logo
              onClick={() =>
                alert('Redirect to / or /home, sent from Layout.tsx line 54')
              }
            />

            <ThemeToggle />
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
