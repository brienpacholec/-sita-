import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import Dialog from "@mui/material/Dialog"
import ListItemText from "@mui/material/ListItemText"
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorElNav: null,
      anchorElUser: null,
      open: false,
    }
  }

  render() {
    function handleClickOpen() {
      this.setState({ open: true })
    }

    const handleClose = () => {
      this.setState({ open: false })
    }

    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="right" ref={ref} {...props} />
    })

    return (
      <>
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link
                href="/#home"
                underline="none"
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", sm: "flex" },
                  color: "#FFF",
                }}
              >
                SITA
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => this.setState({ open: true })}
                  color="inherit"
                >
                  <MenuIcon  onClick={() => this.setState({ open: true })} />
                </IconButton>

                <Dialog
                  fullScreen
                  open={this.state.open}
                  onClose={handleClose}
                  TransitionComponent={Transition}
                >
                  <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                      <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                      <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                      >
                        Sound
                      </Typography>
                      <Button autoFocus color="inherit" onClick={handleClose}>
                        save
                      </Button>
                    </Toolbar>
                  </AppBar>

                  <List>
                    <ListItem button onClick={handleClose}>
                      <ListItemText
                        primary={
                          <Link
                            href="/#home"
                            color="inherit"
                            underline="none"
                            textAlign="center"
                          >
                            Home
                          </Link>
                        }
                      />
                    </ListItem>

                    <Divider />

                    <ListItem button onClick={handleClose}>
                      <ListItemText
                        primary={
                          <Link
                            href="/#schools"
                            color="inherit"
                            underline="none"
                            textAlign="center"
                          >
                            Schools
                          </Link>
                        }
                      />
                    </ListItem>

                    <Divider />

                    <ListItem button onClick={handleClose}>
                      <ListItemText
                        primary={
                          <Link
                            href="/#rules"
                            color="inherit"
                            underline="none"
                            textAlign="center"
                          >
                            Rules
                          </Link>
                        }
                      />
                    </ListItem>

                    <Divider />

                    <ListItem button onClick={handleClose}>
                      <ListItemText
                        primary={
                          <Link
                            href="/regular_season"
                            color="inherit"
                            underline="none"
                            textAlign="center"
                          >
                            Regular Season
                          </Link>
                        }
                      />
                    </ListItem>

                    <Divider />

                    <ListItem button onClick={handleClose}>
                      <ListItemText
                        primary={
                          <Link
                            href="/championship"
                            color="inherit"
                            underline="none"
                            textAlign="center"
                          >
                            Championship
                          </Link>
                        }
                      />
                    </ListItem>

                    <Divider />

                    <ListItem button onClick={handleClose}>
                      <ListItemText
                        primary={
                          <Link
                            href="/all_sita"
                            color="inherit"
                            underline="none"
                            textAlign="center"

                          >
                            All Sita
                          </Link>
                        }
                      />
                    </ListItem>
                  </List>
                </Dialog>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
                <Button
                  key="school"
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="/#schools"
                >
                    Schools
                </Button>

                <Button
                  key="rules"
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="/#rules"
                >
                    Rules
                </Button>

                <Button
                  key="regular_season"
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="/regular_season"
                >
                    Regular Season
                </Button>

                <Button
                  key="championship"
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="/championship"
                >
                    Championship
                </Button>

                <Button
                  key="all_sita"
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="/all_sita"

                >
                    All SITA
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </>
    )
  }
}
