import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aryama</title>
      </Head>
      <main>
      <Container >
      <Grid container spacing={2}>
        <Grid item xs={12}>
         <Card className= {styles.CustomDesign}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Hey, I&apos;m Aryama 👋
        </Typography>
        <Typography variant="body2">
        I work at Walmart Inc. as a Software Developer and write code to build the Delivery Service Platform. I am currently exploring the field of User Experience Design. Besides writing code, I love to paint and watch animated movies and TV shows!
        </Typography>
            </CardContent>
          </Card>
        </Grid>
       <Grid item xs={12} md={6}>
        <Card className= {styles.CustomDesign}>
        <CardContent>
          <Typography variant="body2">
            Keep visiting this space 🍿
          </Typography>
        </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card className= {styles.CustomDesign}>
        
        <CardContent>
         
          <Typography variant="body2">
            Good things take time. 💡
          </Typography>
        </CardContent>
          </Card>
        </Grid>
        
      </Grid>
    </Container>
      </main>
    </div>
  )
}







    
