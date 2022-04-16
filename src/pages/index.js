import React, { useState } from "react"
import Layout from "../components/layout"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"

import { Container, Grid, Box, Typography } from "@mui/material"

export default function Home() {
  const [ruleDoc, setRuleDoc] = useState("regular_season")
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const handleChange = event => {
    setRuleDoc("/docs/rules/" + event.target.value + ".pdf")
    // setRuleDoc(event.target.value)
    setNumPages(null)
    setPageNumber(1)
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <Layout src="Home" id="home">
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h2">
              Southtowns Invitational Track Association
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              paddingY: 1,
            }}
          >
            <Typography variant="p">
              SITA is an abbreviation for the Southtowns Invitational Track
              Association. It is a self administered track association
              originally organized by several locally prominent individuals that
              wanted to encourage parochial school students in grades 3 through
              8 to participate in springtime sports. Using their normal athletic
              abilities of running, jumping and throwing, the youngsters are
              given the opportunity to compete mildly with peers from their own
              school and neighboring schools.
            </Typography>

            <br />
            <br />

            <Typography variant="p">
              SITA was essentially formed with 4 schools led by Dr. Peter
              Schreier of St. Bernadette along with Mr. Joseph DeMarco of
              Nativity and several others, including the late Mr. Peter Walters
              of SS. Peter and Paul in Hamburg. The current league director Mr.
              Edward Hoak of SS. Peter and Paul joined the others shortly
              afterward and have guided the league ever since those early years.
              Today it is comprised of 22 parochial schools organized into three
              separate divisions according to the student population count in
              grades 3 through 8. During the season that generally begins the
              last week of April, each school participates in 3 triangular meets
              at varying locations, i.e., St. Francis High School, Orchard Park
              High School, Hamburg High School East Aurora High School and
              Canisius High School.
            </Typography>

            <br />
            <br />

            <Typography variant="p">
              Coaches from each school generally lineup their own athletes for
              both track and field events before each meet commences. All events
              are run for both boys and girls in each age group with ribbons
              awarded to the top 4 finshers in each event. The first event is
              the 300 meter (4x75) relay. Lane assignments are given to each
              school by the league officials. Each school, in turn, can submit 2
              teams for each race category, i.e., 10 & under, 12 &under, and 14
              & under. All the relays are run in succession.
            </Typography>

            <br />
            <br />

            <Typography variant="p">
              The field events usually start after completion of the relays. The
              first sprint is a 60 meter dash for 8 & under. The subsequent
              sprints are 75 meter sprints for each age group, from 9 & under to
              14 & under inclusive. Standing jumps occur simultaneously for 9 &
              under and 11 & under, while running jumps occur for 13 & under and
              15 & under. Softball throws happen concurrently for the same age
              and gender brackets
            </Typography>

            <br />
            <br />

            <Typography variant="p">
              A one mile race for each gender also occurs near the end of the
              field events. The last events of the day are the 800 (4x200) meter
              relay race. In addition to each boy/girl race, an 800 meter co-ed
              race finishes the triangular meet.
            </Typography>

            <br />
            <br />

            <Typography variant="p">
              The season championship for each division generally occurs the
              weekend before Memorial Day. All student athletes in the
              respective divisions participate for gold medals during one grand
              meet at which all schools participate. Six ribbons are awarded to
              the top athletes in each event and the school gaining the most
              points becomes league champions. A Most Valuable Player for the
              Championship Meet is chosen based upon the total points earned
              this day in each Boy/Girl category.
            </Typography>
          </Grid>
        </Grid>

        <Grid container id="schools">
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h3">Participating Schools</Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="p">
              St. Aloysus (AL)
              <br />
              St. Aloysus (AL)
              <br />
              St. Aloysus (AL)
              <br />
              St. Aloysus (AL)
              <br />
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="p">
              St. Aloysus (AL)
              <br />
              St. Aloysus (AL)
              <br />
              St. Aloysus (AL)
              <br />
              St. Aloysus (AL)
              <br />
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="p">
              St. Aloysus (AL)
              <br />
              St. Aloysus (AL)
              <br />
              St. Aloysus (AL)
              <br />
              St. Aloysus (AL)
              <br />
            </Typography>
          </Grid>

          {/* <Grid
            item
            xs={4}
          >
            <Typography variant="p">
              <p>St. Aloysus (AL)</p>
              <p>St. Augustine (SAS)</p>
              <p>Christ the King (CK)</p>
              <p>Immaculate Conception (IC)</p>
              <p>St. John Vianney (SJV)</p>
              <p>Nardin Academy (NAR)</p>
              <p>Nativity of Our Lord (NAT)</p>
              <p>Notre Dame Academy (ND)</p>
              <p>Our Lady of Victory (OLV)</p>
              <p>SS Peter & Paul (PP)</p>
              <p>Queen of Heaven (QH)</p>
              <p>Southtowns Catholic (SCS)</p>
              <p>Aurora Waldorf School (AWS)</p>
            </Typography>
          </Grid> */}
        </Grid>

        <Grid container id="rules">
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h3">Rules</Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={12} sm={8} md={6}>
            <FormControl fullWidth>
              <Select
                labelId="workout-select"
                id="demo-simple-select"
                inputProps={{ "aria-label": "Select Workout" }}
                onChange={handleChange}
                sx={{
                  backgroundColor: "#FFF",
                }}
                value={ruleDoc}
              >
                <MenuItem value={"regular_season"}>Regular Season</MenuItem>
                <MenuItem value={"jumping"}>Jumping</MenuItem>
                <MenuItem value={"softball_throw"}>Softball Throw</MenuItem>
                <MenuItem value={"running_shoes"}>Running Shoes</MenuItem>
                <MenuItem value={"scorekeeping"}>Scorekeeping</MenuItem>
                <MenuItem value={"all_sita"}>All Sita</MenuItem>
              </Select>
              {/* <FormHelperText sx={{color: "#FFF"}}><em>Choose a Workout Plan</em></FormHelperText> */}
            </FormControl>
          </Grid>
        </Grid>

        {ruleDoc !== "" && (
          <Grid
            container
            sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
          >
            <Grid
              item
              xs={12}
              sx={{
                textAlign: "center",
                justifyContet: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "-webkit-center",
                }}
              >
                <Document
                  file={ruleDoc}
                  loading="Loading..."
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page
                    pageNumber={pageNumber}
                    loading="..."
                    height={700}
                    scale={1.0}
                  />
                </Document>
              </Box>
            </Grid>
          </Grid>
        )}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Layout>
  )
}
