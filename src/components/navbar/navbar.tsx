import {
  Badge,
  createStyles,
  Navbar,
  Switch,
  Text,
  UnstyledButton,
} from '@mantine/core'
import { IconCircleCaretRight, IconCirclePlus, IconMoon2 } from '@tabler/icons'
import React from 'react'

const useStyles = createStyles((theme) => ({
  mainLink: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: theme.fontSizes.xs,
    padding: `8px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  mainLinkInner: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: 20,
    height: 20,
    pointerEvents: 'none',
  },
  switch: {
    display: 'flex',
  },
}))

export function NavbarSimple() {
  const { classes } = useStyles()

  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section mb="xl">
        <Text weight={500} mb="sm">
          Library
        </Text>
        <div>
          <UnstyledButton className={classes.mainLink}>
            <div className={classes.mainLinkInner}>
              <IconCircleCaretRight
                size={20}
                className={classes.mainLinkIcon}
                stroke={1.5}
              />
              <span>My Books</span>
            </div>
            <Badge
              size="sm"
              variant="filled"
              color="gray"
              className={classes.mainLinkBadge}
            >
              15
            </Badge>
          </UnstyledButton>
          <UnstyledButton className={classes.mainLink}>
            <div className={classes.mainLinkInner}>
              <IconCirclePlus
                size={20}
                className={classes.mainLinkIcon}
                stroke={1.5}
              />
              <span>Add New Books</span>
            </div>
          </UnstyledButton>
        </div>
      </Navbar.Section>
      <Navbar.Section>
        <Text weight={500} mb="sm">
          Settings
        </Text>
        <div>
          <UnstyledButton className={classes.mainLink}>
            <div className={classes.mainLinkInner}>
              <IconMoon2
                size={20}
                className={classes.mainLinkIcon}
                stroke={1.5}
              />
              <span>Dark Mode</span>
            </div>
            <Switch className={classes.switch} />
          </UnstyledButton>
        </div>
      </Navbar.Section>
    </Navbar>
  )
}
